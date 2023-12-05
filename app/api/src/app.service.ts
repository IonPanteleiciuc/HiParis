import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

interface DataFilters {
  year?: number;
  quarter?: number;
  region?: number; // Add region filter
  country?: number; // Add country filter
  zone?: number; // Add zone filter
}

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getData(filters: DataFilters): Promise<any> {
    const { year, quarter, region, country, zone } = filters;

    const where = {
      Year: year,
      Quarter: quarter,
      Region: region != undefined ? region : undefined,
      Country: country != undefined ? country : undefined,
      Zone: zone != undefined ? zone : undefined,
    };

    return await this.prismaService.dataset.findMany({
      orderBy: {
        Quarter_cumuled: 'asc',
      },
      where,
    });
  }
}
