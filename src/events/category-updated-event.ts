import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface CategoryUpdatedEvent {
  subject: Subjects.CategoryUpdated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    name: string;
    description: string;
    isActive: boolean;
  };
}
