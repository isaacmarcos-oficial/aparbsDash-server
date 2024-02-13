"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateAddStatus = void 0;
const Client_1 = require("../mongodb/Models/Client");
async function migrateAddStatus() {
    const result = await Client_1.ClientMongo.updateMany({ dischargeDate: { $exists: false } }, { $set: { dischargeDate: "2024-02-01" } });
    console.log(`Migração concluída. ${result} posts atualizados.`);
}
exports.migrateAddStatus = migrateAddStatus;
