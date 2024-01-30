"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: String,
    phone: String,
    serviceOrder: String,
    clientNumber: String,
    dischargeDate: Date,
    sentToday: Boolean,
    sentThreeDays: Boolean,
    sentSevenDays: Boolean,
    sentOneMonth: Boolean,
    sentThreeMonths: Boolean,
    sentSixMonths: Boolean,
});
exports.ClientMongo = mongoose_1.default.model("Client", schema);
