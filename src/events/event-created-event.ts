import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface EventCreatedEvent {
    subject: Subjects.EventCreated;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        userId: mongoose.Schema.Types.ObjectId;
        partnerId: mongoose.Schema.Types.ObjectId;
        title: string;
        description?: string;
        eventType?: "date" | "anniversary" | "birthday" | "gift_exchange" | "travel" | "celebration" | "surprise" | "custom";
        customEventType?: string;
        startDate: Date;
        endDate?: Date;
        startTime?: string;
        endTime?: string;
        isAllDay?: boolean;
        isRecurring?: boolean;
        recurrence?: {
            frequency: "daily" | "weekly" | "monthly" | "yearly";
            interval?: number;
            endDate?: Date;
        };
        location?: {
            address?: string;
            city?: string;
            state?: string;
            country?: string;
            postalCode?: string;
            coordinates?: {
                type: "Point";
                coordinates: [number, number];
            };
        };
        mood?: "romantic" | "fun" | "adventurous" | "relaxing" | "special";
        surpriseLevel?: "none" | "small" | "medium" | "big";
        giftIdeas?: string[];
        photos?: string[];
        notes?: string;
        budget?: {
            amount: number;
            currency: string;
            expenses?: {
                description: string;
                amount: number;
                date: Date;
            }[];
        };
        weatherDependent?: boolean;
        weatherPreferences?: {
            minTemperature?: number;
            maxTemperature?: number;
            preferredConditions?: string[];
        };
        isPrivate?: boolean;
        memories?: {
            text?: string;
            photos?: string[];
            date: Date;
        }[];
        version: number;
    };
}
