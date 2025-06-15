import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface UserProfileUpdatedEvent {
    subject: Subjects.UserProfileUpdated;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        name: string;
        version: number;
    };
}
