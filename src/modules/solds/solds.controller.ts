import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldsService } from './solds.service';
import { CreateSoldDto } from './dto/create-sold.dto';
import { UpdateSoldDto } from './dto/update-sold.dto';

@Controller('solds')
export class SoldsController {
  constructor(private readonly soldsService: SoldsService) {}

  @Post()
  create(@Body() createSoldDto: CreateSoldDto) {
    return this.soldsService.create(createSoldDto);
  }

  @Get()
  findAll() {
    return this.soldsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldDto: UpdateSoldDto) {
    return this.soldsService.update(+id, updateSoldDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldsService.remove(+id);
  }
}
