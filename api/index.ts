
import express from 'express';
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const handler = async (req: any, res: any) => {
  await registerRoutes(app);
  app(req, res);
};

export default handler;
