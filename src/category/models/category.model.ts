import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Category {
    @Field(() => ID)
    id: string;

    @Field()
    displayName: string;

    @Field()
    icon: string;
}