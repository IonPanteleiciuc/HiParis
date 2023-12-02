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
}
