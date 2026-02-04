import { PrismaService } from "src/prisma/prisma.service";


export class CategoryService {
    constructor(private readonly prisma: PrismaService){}

    async getAllCategories() {
        return this.prisma.category.findMany();
    }
}