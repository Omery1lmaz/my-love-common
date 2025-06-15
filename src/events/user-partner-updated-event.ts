import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface UserPartnerUpdatedEvent {
    subject: Subjects.UserPartnerUpdated;
    data: {
        userId: mongoose.Schema.Types.ObjectId;
        partnerId: mongoose.Schema.Types.ObjectId;
        version: number;
    };
}
