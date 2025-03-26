import mongoose from "mongoose";
import { Subjects } from "./subjects";

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    email: string;
    provider: "email" | "google";
    googleId?: string;
    number?: string;
    name?: string;
    address?: string;
    isActive: boolean;
    isDeleted: boolean;
    imageUrl: string;
    version: number;
  };
}
