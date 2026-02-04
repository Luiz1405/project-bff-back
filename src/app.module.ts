import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoryModule } from './category/category.module';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CategoryModule,
    PrismaModule,
    ProductModule
  ],
})
export class AppModule {}
