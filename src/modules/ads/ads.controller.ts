import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpCode } from '@nestjs/common';
import { AdsService } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import  { Request as Req }  from 'express';


@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post(':id')
  create(@Body() createAdDto: CreateAdDto, @Param('id') id: string/* @Request() req */) {
    return this.adsService.create(createAdDto, id /* req.user.id */);
  }

  @Get()
  findAll() {
    return this.adsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdDto: UpdateAdDto) {
    return this.adsService.update(id, updateAdDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adsService.remove(id);
  }
}
