import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface DataFilters {
  year?: number;
  quarter?: number;
  region?: number; // Add region filter
  country?: number; // Add country filter
  zone?: number; // Add zone filter
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(
    @Query('year') year: number,
    @Query('quarter') quarter: number,
    @Query('region') region: number, // Add region filter
    @Query('country') country: number, // Add country filter
    @Query('zone') zone: number, // Add zone filter
  ): Promise<any> {
    const numericFilters: DataFilters = {
      year: year != null ? Number(year) : 2023,
      quarter: quarter != null ? Number(quarter) : 1,
      region: region != null ? Number(region) : undefined, // Handle region filter
      country: country != null ? Number(country) : undefined, // Handle country filter
      zone: zone != null ? Number(zone) : undefined, // Handle zone filter
    };

    return await this.appService.getData(numericFilters);
  }
}
