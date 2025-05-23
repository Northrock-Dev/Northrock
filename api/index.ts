
import express from 'express';
import { storage } from '../server/storage';

const app = express();
app.use(express.json());

export default async function handler(req, res) {
  // Add your API routes here
  if (req.method === 'GET' && req.url === '/api/health') {
    return res.json({ status: 'ok' });
  }
  
  // Handle other routes
  res.status(404).json({ error: 'Not found' });
}
