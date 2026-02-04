import { Field, ID } from "@nestjs/graphql";
import { Seller } from "./seller.model";


export class Product {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    image: string;

    @Field(() => Seller)
    seller: Seller;
}