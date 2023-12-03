import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma/prisma.service';
import Papa from 'papaparse';

@Controller('upload')
export class UploadController {
  constructor(private prismaService: PrismaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const text = file.buffer.toString('utf-8');
    const results = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
    });

    // for (const row of results.data) {
    //   await this.prismaService.modelName.create({
    //     data: row,
    //   });
    // }

    return { results };
  }
}
