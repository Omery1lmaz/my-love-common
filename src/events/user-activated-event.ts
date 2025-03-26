import mongoose from "mongoose";
import { Subjects } from "./subjects";

export interface UserActivatedEvent {
  subject: Subjects.UserActivated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    email: string;
    isActive: boolean;
    version: number;
  };
}
