import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/send-notification", (req: Request, res: Response): void => {
  console.log(req.body);

  res.status(200).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
