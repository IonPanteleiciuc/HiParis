import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrismaService } from 'src/prisma/prisma.service';
import * as fs from 'fs';
import * as parse from 'csv-parse';

@Controller('upload')
export class UploadController {
  constructor(private prismaService: PrismaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileContents = fs.readFileSync(file.path, 'utf8');
    const records = parse(fileContents, {
      columns: true,
      skip_empty_lines: true,
    });

    // Map and insert data into database
    const data = records.map((record) => {
      // Map each record to your Prisma model structure
      return {
        // ...mapped fields
      };
    });

    await this.prismaService.yourModel.createMany({ data });

    fs.unlinkSync(file.path); // Optionally delete the file after processing
    return 'CSV file processed and data stored in database';
  }
}
