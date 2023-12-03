import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { dataset } from '@prisma/client';
import { parse } from 'csv-parse';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller()
export class UploadController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No file provided', HttpStatus.BAD_REQUEST);
    }

    // Create a stream from the file buffer
    const parseStream = parse(file.buffer, {
      columns: true,
      trim: true,
    });

    // Handle each record
    await this.prismaService.deleteAllRecords();
    for await (const record of parseStream) {
      await this.prismaService.addRecord(record);
    }

    return { message: 'CSV has been processed' };
  }
}
