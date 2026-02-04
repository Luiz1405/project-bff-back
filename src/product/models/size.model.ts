import { Field, ID } from "@nestjs/graphql";

export class Size {
    @Field(() => ID) 
    id: number;

    @Field()
    displayName: string;
}