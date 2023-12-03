import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

interface DataFilters {
  year?: number;
  quarter?: number;
}

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getData(filters: DataFilters): Promise<any> {
    return await this.prismaService.dataset.findMany({
      orderBy: {
        Quarter_cumuled: 'asc',
      },
      where: { Year: filters.year, Quarter: filters.quarter },
    });
  }
}
