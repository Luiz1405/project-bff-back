import { PrismaModule } from "src/prisma/prisma.module";
import { Product } from "./models/product.model";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";
import { Module } from "@nestjs/common";


@Module({
    imports: [PrismaModule],
    providers: [ProductResolver, ProductService],
})
export class ProductModule {}