import { HttpCode, Injectable, NotFoundException } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImagesRepository } from './repositories/images.repository';

@Injectable()
export class ImagesService {
  constructor(private imagesRepository: ImagesRepository) {}
  async create(createImageDto: CreateImageDto, ad_id: string) {
    return await this.imagesRepository.create(createImageDto, ad_id)
  }

  async findAll() {
    return await this.imagesRepository.findAll()
  }

  async findOne(id: string) {
    const ad = await this.imagesRepository.findOne(id)
    if(!ad){
      throw new NotFoundException("Advertisement not found.")
    }
    return ad;
  }

  async update(id: string, updateImageDto: UpdateImageDto) {
    const image = await this.imagesRepository.findOne(id)
    if(!image){
      throw new NotFoundException("Image(s) not found.")
    }
    return await this.imagesRepository.update(id, updateImageDto)
  }

  @HttpCode(204)
  async remove(id: string) {
    const image = await this.imagesRepository.findOne(id)
    if(!image){
      throw new NotFoundException("Image(s) not found.")
    }
    return await this.imagesRepository.delete(id)
  }
}
