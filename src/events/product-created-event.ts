import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    name: string;
    imageUrl: string;
    description: string;
    status: boolean;
    seller: mongoose.Schema.Types.ObjectId;
    sellingPrice: number;
    ownSellable: boolean;
    ingredients: mongoose.Schema.Types.ObjectId[];
    extraIngredients: mongoose.Schema.Types.ObjectId[];
    modifierGroups: mongoose.Schema.Types.ObjectId[];
    categoryId?: mongoose.Schema.Types.ObjectId;
    categoryAttributes?: any[];
  };
}
