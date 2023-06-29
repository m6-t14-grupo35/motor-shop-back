import { Controller, Get, Post, Body, Request, Param, Delete, UseGuards } from '@nestjs/common';
import { SoldsService } from './solds.service';
import { CreateSoldDto } from './dto/create-sold.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('solds')
export class SoldsController {
  constructor(private readonly soldsService: SoldsService) {}

  @Post(':ad_id')
  @UseGuards(JwtAuthGuard)
  create(@Body() createSoldDto: CreateSoldDto, @Param('ad_id') ad_id: string, @Request() req) {
    return this.soldsService.create(createSoldDto, ad_id, req.user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.soldsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.soldsService.findOne(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.soldsService.remove(id);
  }
}
