import mongoose, { Document, Schema, Model } from "mongoose";

export interface ICategroy extends Document {
  name: string;
  slug: string;
  description: string;
  image: string;
  parent: mongoose.Types.ObjectId | null;
  isActive: boolean;
  createAt: Date;
  updatedAt: Date;
}

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 500,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    parent: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

categorySchema.index({ parent: 1 });

const Category: Model<ICategroy> =
  mongoose.models.Category ||
  mongoose.model<ICategroy>("Category", categorySchema);

export default Category;
