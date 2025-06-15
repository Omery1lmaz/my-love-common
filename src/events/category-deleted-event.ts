import { Subjects } from "./subjects";
import mongoose from "mongoose";
export interface CategoryDeletedEvent {
    subject: Subjects.CategoryDeleted;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        version: number;
    };
}
