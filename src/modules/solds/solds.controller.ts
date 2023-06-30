import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SoldsService } from './solds.service';
import { CreateSoldDto } from './dto/create-sold.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('solds')
@Controller('solds')
export class SoldsController {
  constructor(private readonly soldsService: SoldsService) {}

  @Post(':ad_id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createSoldDto: CreateSoldDto,
    @Param('ad_id') ad_id: string,
    @Request() req,
  ) {
    return this.soldsService.create(
      createSoldDto,
      ad_id,
      req.user.id /* req.user.is_seller */,
    );
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.soldsService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.soldsService.findOne(id);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.soldsService.remove(id);
  }
}
