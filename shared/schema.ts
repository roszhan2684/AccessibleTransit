import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  credits: integer("credits").notNull().default(100),
  emergencyContact: text("emergency_contact"),
  emergencyPhone: text("emergency_phone"),
});

export const routes = pgTable("routes", {
  id: serial("id").primaryKey(),
  startLocation: text("start_location").notNull(),
  endLocation: text("end_location").notNull(),
  distance: integer("distance").notNull(),
  wheelchairAccessible: boolean("wheelchair_accessible").notNull(),
  visualAids: boolean("visual_aids").notNull(),
  audioAnnouncements: boolean("audio_announcements").notNull(),
  rating: integer("rating").notNull().default(0),
});

export const feedback = pgTable("feedback", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  routeId: integer("route_id").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  emergencyContact: true,
  emergencyPhone: true,
});

export const insertRouteSchema = createInsertSchema(routes);
export const insertFeedbackSchema = createInsertSchema(feedback);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertRoute = z.infer<typeof insertRouteSchema>;
export type InsertFeedback = z.infer<typeof insertFeedbackSchema>;

export type User = typeof users.$inferSelect;
export type Route = typeof routes.$inferSelect;
export type Feedback = typeof feedback.$inferSelect;
