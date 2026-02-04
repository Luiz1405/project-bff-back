import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Size {
    @Field(() => ID) 
    id: number;

    @Field()
    displayName: string;
}