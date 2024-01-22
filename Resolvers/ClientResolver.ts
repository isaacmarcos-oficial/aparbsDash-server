import { Arg, Query, Mutation, Resolver } from "type-graphql";
import { CreateClientInput, EditClientInput } from "../Inputs/ClientInput";
import { Client } from "../Models/Client";
import { ClientMongo } from "../mongodb/Models/Client";

@Resolver()
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongo.find();
  }

  @Query(() => Client)
  async client(@Arg("id") id: string) {
    return await ClientMongo.findOne({ _id: id });
  }

  @Mutation(() => Client)
  async createClient(
    @Arg("createClientObject") createClientObject: CreateClientInput
  ) {
    const {
      name,
      phone,
      serviceOrder,
      vehicle,
      dischargeDate,
      sentToday,
      sentThreeDays,
      sentSevenDays,
      sentOneMonth,
      sentThreeMonths,
      sentSixMonths,
    } = createClientObject;

    return await ClientMongo.create({
      name,
      phone,
      serviceOrder,
      vehicle,
      dischargeDate,
      sentToday,
      sentThreeDays,
      sentSevenDays,
      sentOneMonth,
      sentThreeMonths,
      sentSixMonths,
    });
  }

  @Mutation(() => Client)
  async editClient(@Arg("editClientObject") editClientObject: EditClientInput) {
    const client = { ...editClientObject };
    await ClientMongo.updateOne({ _id: client.id }, client);

    return client;
  }

  @Mutation(() => String)
  async deleteClient(@Arg("id") id: string) {
    await ClientMongo.deleteOne({ _id: id });
    return id;
  }
}
