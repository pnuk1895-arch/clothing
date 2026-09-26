import mongoose, { Model, Schema } from "mongoose";

export interface ICoupon {
  code: string;
  description: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  minimumOrderValue: number;
  maximumDiscount?: number;
  usageLimit?: number;
  usedCount: number;
  startsAt: Date;
  expiresAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const couponSchema = new Schema<ICoupon>(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      maxlength: 50,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },

    discountType: {
      type: String,
      enum: ["percentage", "fixed"],
      required: true,
    },

    discountValue: {
      type: Number,
      required: true,
      min: 0,
    },

    minimumOrderValue: {
      type: Number,
      default: 0,
      min: 0,
    },

    maximumDiscount: {
      type: Number,
      min: 0,
    },

    usageLimit: {
      type: Number,
      min: 1,
    },

    usedCount: {
      type: Number,
      default: 0,
      min: 0,
    },

    startsAt: {
      type: Date,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

couponSchema.index({ code: 1 });
couponSchema.index({ isActive: 1 });
couponSchema.index({ expiresAt: 1 });

const Coupon: Model<ICoupon> =
  mongoose.models.Coupon || mongoose.model<ICoupon>("Coupon", couponSchema);

export default Coupon;
