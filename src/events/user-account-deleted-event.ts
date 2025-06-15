import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface UserAccountDeletedEvent {
    subject: Subjects.UserAccountDeleted;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        deleted: boolean;
        version: number;
    };
}
