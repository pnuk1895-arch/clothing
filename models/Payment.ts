import mongoose, { Model, Schema } from "mongoose";

export interface IPayment {
  order: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  provider: "razorpay" | "stripe";
  paymentMethod: "card" | "upi" | "netbanking" | "wallet" | "cod";
  transactionId?: string;
  providerOrderId?: string;
  providerPaymentId?: string;
  amount: number;
  currency: string;
  status:
    | "created"
    | "pending"
    | "paid"
    | "failed"
    | "refunded"
    | "partially_refunded";

  failureReason?: string;
  paidAt?: Date;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const paymentSchema = new Schema<IPayment>(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    provider: {
      type: String,
      enum: ["razorpay", "stripe"],
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["card", "upi", "netbanking", "wallet", "cod"],
      required: true,
    },

    transactionId: {
      type: String,
      trim: true,
    },

    providerOrderId: {
      type: String,
      trim: true,
    },

    providerPaymentId: {
      type: String,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      uppercase: true,
      default: "INR",
    },

    status: {
      type: String,
      enum: [
        "created",
        "pending",
        "paid",
        "failed",
        "refunded",
        "partially_refunded",
      ],
      default: "created",
    },

    failureReason: {
      type: String,
      trim: true,
    },

    paidAt: {
      type: Date,
    },

    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  },
);

paymentSchema.index({ order: 1 });
paymentSchema.index({ user: 1, createdAt: -1 });
paymentSchema.index({ providerPaymentId: 1 });
paymentSchema.index({ transactionId: 1 });

const Payment: Model<IPayment> =
  mongoose.models.Payment || mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
