import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

interface DataFilters {
  year?: number;
  quarter?: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(
    @Query('year') year: number,
    @Query('quarter') quarter: number,
  ): Promise<any> {
    const numericFilters = {
      year: year != null ? Number(year) : 2023,
      quarter: quarter != null ? Number(quarter) : 1,
    };

    return await this.appService.getData(numericFilters);
  }
}
