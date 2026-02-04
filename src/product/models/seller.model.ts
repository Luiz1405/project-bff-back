import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Seller {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;
}