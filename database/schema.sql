-- ZKOO Database Schema
-- Voer dit uit op je Database VM

-- Create database (run as postgres superuser)
-- CREATE DATABASE zkoo_db;

-- Connect to zkoo_db and run the following:

-- Demo requests table
CREATE TABLE IF NOT EXISTS demo_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending'
);

-- Create index for better performance
CREATE INDEX idx_demo_requests_created_at ON demo_requests(created_at DESC);
CREATE INDEX idx_demo_requests_status ON demo_requests(status);

-- Insert test data (optional)
INSERT INTO demo_requests (name, email, phone, company, message) VALUES
('Test Gebruiker', 'test@example.nl', '+31612345678', 'Test Ziekenhuis', 'Dit is een test aanvraag'),
('Jan de Vries', 'jan@huisarts.nl', '+31623456789', 'Huisartsenpraktijk Amsterdam', 'Interesse in EPD oplossing');

-- View all demo requests
-- SELECT * FROM demo_requests ORDER BY created_at DESC;