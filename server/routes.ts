import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertFeedbackSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express) {
  // Users
  app.get("/api/users/me", async (req, res) => {
    // Mock authenticated user for demo
    const user = await storage.getUser(1);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  });

  app.post("/api/users", async (req, res) => {
    const result = insertUserSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: "Invalid user data" });
      return;
    }
    const user = await storage.createUser(result.data);
    res.json(user);
  });

  // Routes
  app.get("/api/routes", async (_req, res) => {
    const routes = await storage.getRoutes();
    res.json(routes);
  });

  // Feedback
  app.post("/api/feedback", async (req, res) => {
    const result = insertFeedbackSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: "Invalid feedback data" });
      return;
    }
    const feedback = await storage.createFeedback(result.data);
    res.json(feedback);
  });

  const httpServer = createServer(app);
  return httpServer;
}
