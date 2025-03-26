import { Subjects } from "./subjects";
import mongoose from "mongoose";

export interface ModifierGroupCreatedEvent {
  subject: Subjects.ModifierGroupCreated;
  data: {
    id: mongoose.Schema.Types.ObjectId;
    version: number;
    name: string;
    min: number;
    max: number;
    multiSelectableModifierProduct: boolean;
    modifierProducts: {
      productId: string;
      status: boolean;
      extraPrice: number;
    }[];
    status: boolean;
    seller: string;
  };
}
