import { Module } from '@nestjs/common';
import { CategoryResolver } from './category.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryService } from './category.service';

@Module({
    imports: [PrismaModule],
    providers: [CategoryResolver, CategoryService]
})
export class CategoryModule {}
