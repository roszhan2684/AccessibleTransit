import type { User, InsertUser, Route, Feedback, InsertFeedback } from "@shared/schema";
import { mockRoutes } from "../client/src/lib/mockData";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getRoutes(): Promise<Route[]>;
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private feedback: Map<number, Feedback>;
  private currentUserId: number;
  private currentFeedbackId: number;

  constructor() {
    this.users = new Map();
    this.feedback = new Map();
    this.currentUserId = 1;
    this.currentFeedbackId = 1;

    // Add mock user
    this.users.set(1, {
      id: 1,
      username: "demo_user",
      password: "password",
      credits: 75,
      emergencyContact: "John Doe",
      emergencyPhone: "555-0123"
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = {
      ...insertUser,
      id,
      credits: 100,
      emergencyContact: insertUser.emergencyContact || null,
      emergencyPhone: insertUser.emergencyPhone || null
    };
    this.users.set(id, user);
    return user;
  }

  async getRoutes(): Promise<Route[]> {
    return mockRoutes;
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const id = this.currentFeedbackId++;
    const feedback: Feedback = {
      ...insertFeedback,
      id,
      createdAt: new Date()
    };
    this.feedback.set(id, feedback);
    return feedback;
  }
}

export const storage = new MemStorage();