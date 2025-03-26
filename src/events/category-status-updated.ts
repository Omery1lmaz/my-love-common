import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface CategoryStatusUpdatedEvent {
  subject: Subjects.CategoryStatusUpdated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    status: boolean;
  };
}
