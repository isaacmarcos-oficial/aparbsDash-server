import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Client {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;
  
  @Field()
  phone: string;
  
  @Field()
  serviceOrder: string;
  
  @Field()
  clientNumber: string;

  @Field()
  dischargeDate: string;

  @Field()
  note: string;

  @Field()
  sentToday: boolean;
  
  @Field()
  sentThreeDays: boolean;

  @Field()
  sentSevenDays: boolean;

  @Field()
  sentOneMonth: boolean;

  @Field()
  sentThreeMonths: boolean;

  @Field()
  sentSixMonths: boolean;
}
