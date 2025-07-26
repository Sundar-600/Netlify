import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/hello", (req, res) => {
  return res.json({ message: "Site is working now" });
});

const handler = serverless(app);

module.exports.handler = async (event, context) => {
	const result = await handler(event,context);
	return result;
};