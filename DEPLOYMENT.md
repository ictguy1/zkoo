# ZKOO Deployment Guide - Azure VMs

## Overzicht
Deze guide helpt je om de ZKOO website te deployen op twee Azure VMs:
- **Web VM**: Frontend (React) + Backend API (Node.js + Express)
- **Database VM**: PostgreSQL database

---

## Database VM Setup

### 1. Maak Azure VM aan
- OS: Ubuntu 22.04 LTS
- Size: B2s of groter
- Open poort 5432 in Network Security Group (alleen voor Web VM IP)

### 2. Installeer PostgreSQL
```bash
# Update systeem
sudo apt update && sudo apt upgrade -y

# Installeer PostgreSQL
sudo apt install postgresql postgresql-contrib -y

# Start PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 3. Configureer PostgreSQL
```bash
# Login als postgres gebruiker
sudo -u postgres psql

# In PostgreSQL prompt:
CREATE DATABASE zkoo_db;
CREATE USER zkoo_user WITH ENCRYPTED PASSWORD 'jouw_sterke_wachtwoord';
GRANT ALL PRIVILEGES ON DATABASE zkoo_db TO zkoo_user;
\q
```

### 4. Maak database schema aan
```bash
# Kopieer schema.sql naar de VM
# Dan:
sudo -u postgres psql zkoo_db < ~/database/schema.sql
```

### 5. Sta externe verbindingen toe
```bash
# Edit postgresql.conf
sudo nano /etc/postgresql/14/main/postgresql.conf
# Verander: listen_addresses = '*'

# Edit pg_hba.conf
sudo nano /etc/postgresql/14/main/pg_hba.conf
# Voeg toe: host    all    zkoo_user    <WEB_VM_IP>/32    md5

# Herstart PostgreSQL
sudo systemctl restart postgresql
```

### 6. Test verbinding
```bash
# Vanaf Database VM:
psql -h localhost -U zkoo_user -d zkoo_db
# Voer wachtwoord in en test:
\dt
```

---

## Web VM Setup

### 1. Maak Azure VM aan
- OS: Ubuntu 22.04 LTS
- Size: B2s of groter
- Open poorten: 80, 443, 3000 in Network Security Group

### 2. Installeer Node.js
```bash
# Update systeem
sudo apt update && sudo apt upgrade -y

# Installeer Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificeer installatie
node --version
npm --version
```

### 3. Installeer Nginx (voor frontend)
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 4. Deploy Backend API
```bash
# Maak directory
mkdir -p ~/zkoo-backend
cd ~/zkoo-backend

# Kopieer server bestanden (index.js, package.json)
# Of gebruik git:
# git clone <jouw-repo> .

# Installeer dependencies
npm install

# Maak .env bestand
nano .env
```

Voeg toe in `.env`:
```
DB_HOST=<DATABASE_VM_PRIVATE_IP>
DB_PORT=5432
DB_NAME=zkoo_db
DB_USER=zkoo_user
DB_PASSWORD=jouw_sterke_wachtwoord
PORT=3000
```

```bash
# Test de API
npm start

# Installeer PM2 voor productie
sudo npm install -g pm2
pm2 start index.js --name zkoo-api
pm2 startup
pm2 save
```

### 5. Deploy Frontend
```bash
# Op je lokale machine, build de frontend:
npm run build

# Upload dist folder naar Web VM
scp -r dist/* user@<WEB_VM_IP>:/var/www/zkoo/

# Op Web VM:
sudo mkdir -p /var/www/zkoo
sudo chown -R $USER:$USER /var/www/zkoo
```

### 6. Configureer Nginx
```bash
sudo nano /etc/nginx/sites-available/zkoo
```

Voeg toe:
```nginx
server {
    listen 80;
    server_name <JOUW_DOMEIN_OF_IP>;

    # Frontend
    location / {
        root /var/www/zkoo;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:3000/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/zkoo /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Test de Setup

### 1. Test Database verbinding
```bash
# Vanaf Web VM:
psql -h <DATABASE_VM_IP> -U zkoo_user -d zkoo_db
```

### 2. Test Backend API
```bash
# Health check
curl http://localhost:3000/api/health

# Test demo request
curl -X POST http://localhost:3000/api/demo-requests \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.nl","message":"Test"}'
```

### 3. Test Frontend
Open browser: `http://<WEB_VM_IP>`

---

## Netwerk Configuratie

### Database VM - Network Security Group
- **Inbound Rules:**
  - PostgreSQL (5432) - Source: Web VM private IP
  - SSH (22) - Source: Your IP

### Web VM - Network Security Group
- **Inbound Rules:**
  - HTTP (80) - Source: Internet
  - HTTPS (443) - Source: Internet
  - API (3000) - Source: Internet (of alleen voor testing)
  - SSH (22) - Source: Your IP

---

## Troubleshooting

### Backend kan niet verbinden met database
```bash
# Check firewall op Database VM
sudo ufw status
sudo ufw allow from <WEB_VM_IP> to any port 5432

# Test connectie vanaf Web VM
telnet <DATABASE_VM_IP> 5432
```

### Nginx errors
```bash
# Check logs
sudo tail -f /var/nginx/error.log

# Check configuratie
sudo nginx -t
```

### PM2 niet running
```bash
pm2 status
pm2 logs zkoo-api
pm2 restart zkoo-api
```

---

## Beveiliging Tips

1. **Gebruik sterke wachtwoorden** voor database
2. **Beperk network access** met NSG rules
3. **Gebruik private IPs** voor VM-to-VM communicatie
4. **Enable SSL** voor productie (Let's Encrypt)
5. **Update regelmatig** packages en OS

---

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/demo-requests` - Submit demo request
- `GET /api/demo-requests` - Get all demo requests (admin)