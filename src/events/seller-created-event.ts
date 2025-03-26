import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface SellerCreatedEvent {
  subject: Subjects.SellerCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    isTakeAway: boolean;
    name: string;
    storeName?: string;
    mersisNumber?: string;
    location: {
      type: "Point";
      coordinates: [number, number];
    };
    commissionPercentage: number;
    bankAccountNumber?: string;
    bankAccountOwnerName?: string;
    taxOffice?: string;
    companyTitle?: string;
    taxNumber?: string;
    companyType?: string;
    email: string;
    number: string;
    address?: {
      street: string;
      city: string;
      state?: string;
      postalCode: string;
      country: string;
    };
    isAdmin: boolean;
    isWorking: boolean;
    isSeller: boolean;
    isActive: boolean;
    isDeleted: boolean;
    imageUrl: string;
    orderCompletedDate?: Date;
    waiter?: mongoose.Schema.Types.ObjectId;
    kitchenCategory?: mongoose.Schema.Types.ObjectId[];
    createdAt: string;
    updatedAt: string;
  };
}
