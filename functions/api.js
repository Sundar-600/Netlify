import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Site is working now" });
});

export const handler = serverless(app);