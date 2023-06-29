import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post(':ad_id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createImageDto: CreateImageDto,
    @Param('ad_id') ad_id: string,
  ) {
    return this.imagesService.create(createImageDto, ad_id);
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id);
  }

  @Patch(':ad_id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(@Param('ad_id') ad_id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(ad_id, updateImageDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
