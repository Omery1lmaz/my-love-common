import mongoose from "mongoose";
import { Subjects } from "./subjects";
export interface AlbumCreatedEvent {
    subject: Subjects.AlbumCreated;
    data: {
        id: mongoose.Schema.Types.ObjectId;
        user: mongoose.Schema.Types.ObjectId;
        name: string;
        description: string;
        coverPhoto: mongoose.Schema.Types.ObjectId | null | undefined;
        event: string;
        isPrivate: boolean;
        musicDetails?: {
            name: string;
            artist: string;
            album: string;
            albumImage: string;
            spotifyUrl: string;
        };
        categories: string[];
        location: {
            city?: string;
            country?: string;
            coordinates?: {
                type: "Point";
                coordinates?: [number, number];
            };
        };
        sizeInMB: number;
        allowCollaboration: boolean;
        collaborators: mongoose.Schema.Types.ObjectId[];
        startDate?: Date;
        endDate?: Date;
        version: number;
    };
}
