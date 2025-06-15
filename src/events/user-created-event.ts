import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface UserCreatedEvent {
    subject: Subjects.UserCreated;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        email: string;
        provider: "email" | "google";
        googleId?: string;
        name?: string;
        isActive: boolean;
        isDeleted: boolean;
        profilePic: string;
        version: number;
    };
}
