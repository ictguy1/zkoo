import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const { Pool } = pg;

// Database connection pool
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'zkoo_db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
});

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Submit demo request
app.post('/api/demo-requests', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'Naam en email zijn verplicht' });
    }

    // Insert into database
    const result = await pool.query(
      `INSERT INTO demo_requests (name, email, phone, company, message, created_at) 
       VALUES ($1, $2, $3, $4, $5, NOW()) 
       RETURNING *`,
      [name, email, phone, company, message]
    );

    res.status(201).json({ 
      success: true, 
      message: 'Demo aanvraag succesvol ontvangen',
      data: result.rows[0] 
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Server fout bij opslaan aanvraag' });
  }
});

// Get all demo requests (for admin)
app.get('/api/demo-requests', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM demo_requests ORDER BY created_at DESC'
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Server fout bij ophalen aanvragen' });
  }
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully at:', res.rows[0].now);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Database: ${process.env.DB_HOST || 'localhost'}:${process.env.DB_PORT || 5432}`);
});