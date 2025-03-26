import mongoose from "mongoose";
import { Subjects } from "./subjects";

export interface UserPhoneNumberUpdatedEvent {
  subject: Subjects.UserPhoneNumberUpdated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    number: string;
    version: number;
  };
}
