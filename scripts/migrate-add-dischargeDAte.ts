import { ClientMongo } from "../mongodb/Models/Client";

export async function migrateAddStatus() {
  const result = await ClientMongo.updateMany(
    { dischargeDate: { $exists: false } },
    { $set: { dischargeDate:"2024-02-01", note:"Observação padrão" } }
  );

  console.log(`Migração concluída. ${result} posts atualizados.`);
}
