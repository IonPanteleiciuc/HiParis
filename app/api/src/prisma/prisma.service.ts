import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://admin:superSecretSecurePassword4@vps-ion.tech:6001/dataset?schema=public',
        },
      },
    });
  }

  async addRecord(record: any): Promise<void> {
    const data = {
      id_product: Number(record.id_product),
      Region: Number(record.Region),
      Country: Number(record.Country),
      Zone: Number(record.Zone),
      Year: Number(record.Year),
      Quarter_cumuled: Number(record.Quarter_cumuled),
      Quarter: Number(record.Quarter),
      Month_1: Number(record.Month_1),
      Month_2: Number(record.Month_2),
      Month_3: Number(record.Month_3),
      Month_4: Number(record.Month_4),
    };

    await this.dataset.create({ data });
  }

  async deleteAllRecords(): Promise<{ count: number }> {
    return this.dataset.deleteMany({});
  }
}
