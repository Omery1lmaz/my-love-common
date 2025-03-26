import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface CategoryCreatedEvent {
  subject: Subjects.CategoryCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    name: string;
    description?: string;
    user: mongoose.Schema.Types.ObjectId;
    isActive: boolean;
  };
}
