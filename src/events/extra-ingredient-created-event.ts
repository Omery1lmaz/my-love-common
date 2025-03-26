import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface ExtraIngredientCreatedEvent {
  subject: Subjects.ExtraIngredientCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    name: string;
    price: number;
    status: boolean;
    seller: mongoose.Schema.Types.ObjectId;
  };
}
