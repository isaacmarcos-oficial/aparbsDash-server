import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  phone: String,
  serviceOrder: Number,
  vehicle: String,
  dischargeDate: Date,
  sentToday: Boolean,
  sentThreeDays: Boolean,
  sentSevenDays: Boolean,
  sentOneMonth: Boolean,
  sentThreeMonths: Boolean,
  sentSixMonths: Boolean,
})

export const ClientMongo = mongoose.model("Client", schema)