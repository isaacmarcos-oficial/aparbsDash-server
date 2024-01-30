import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateClientInput {
  @Field()
  name: string;
  
  @Field()
  phone: string;
  
  @Field()
  serviceOrder: string;
  
  @Field()
  clientNumber: string;

  @Field()
  dischargeDate: Date;

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

@InputType()
export class EditClientInput {
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
  dischargeDate: Date;

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