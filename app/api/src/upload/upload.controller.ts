import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import { parse } from 'csv-parse';

@Controller('upload')
export class UploadController {
  constructor(private prismaService: PrismaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileContents = fs.readFileSync(file.path, 'utf8');
    // const parser = parse(fileContents, {
    //   columns: true,
    //   skip_empty_lines: true,
    // });

    // const records = [];
    // for await (const record of parser) {
    //   records.push(record);
    // }

    // Your database operations here

    // fs.unlinkSync(file.path);
    return fileContents;
  }
}
