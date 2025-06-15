import mongoose from "mongoose";
import { Subjects } from "./subjects";
interface Location {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    coordinates?: {
        type: "Point";
        coordinates: [number, number];
    };
}
export interface EventPhotoCreatedEvent {
    subject: Subjects.EventPhotoCreated;
    data: {
        photos: {
            id: mongoose.Schema.Types.ObjectId;
            user: mongoose.Schema.Types.ObjectId;
            album?: mongoose.Schema.Types.ObjectId | null;
            event: mongoose.Schema.Types.ObjectId | null;
            url: string;
            description: string;
            photoDate: Date;
            tags: string[];
            title: string;
            isPrivate: boolean;
            musicUrl: string;
            musicDetails: {
                name: string;
                artist: string;
                album: string;
                albumImage: string;
                spotifyUrl: string;
            };
            note: string;
            width?: number;
            height?: number;
            location?: Location;
            filterName?: string;
            likes: number;
            comments: number;
            fileType: string;
            isDeleted: boolean;
            version: number;
        }[];
        coverPhotoId: mongoose.Schema.Types.ObjectId;
    };
}
export {};
