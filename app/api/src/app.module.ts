import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UploadController } from './upload/upload.controller';
import { UploadService } from './upload/upload.service';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PrismaModule, UploadModule],
  controllers: [AppController, UploadController],
  providers: [AppService, PrismaService, UploadService],
})
export class AppModule {}
