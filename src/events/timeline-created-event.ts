import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface TimelineCreatedEvent {
    subject: Subjects.TimelineCreated;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        userId: mongoose.Schema.Types.ObjectId;
        partnerId?: mongoose.Schema.Types.ObjectId;
        title: string;
        description?: string;
        date: Date;
        type: "anniversary" | "first_meet" | "first_date" | "special_moment" | "custom";
        photos?: mongoose.Schema.Types.ObjectId[];
        coverPhotoId?: mongoose.Schema.Types.ObjectId;
        isPrivate?: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
}
