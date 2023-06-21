import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../images.repository";
import { PrismaService } from "src/database/prisma.service";
import { CreateImageDto } from "../../dto/create-image.dto";
import { Image } from "../../entities/image.entity";
import { plainToInstance } from "class-transformer";
import { UpdateImageDto } from "../../dto/update-image.dto";

@Injectable()
export class ImagesPrismaRepository implements ImagesRepository{
    constructor(private prisma: PrismaService) {}
    async create(data: CreateImageDto, ad_id: string): Promise<Image> {
      const image = new Image();
      Object.assign(image, {
        ...data,
        ad_id: ad_id,
      });

      const newImage = await this.prisma.image.create({
          data: {
            ...image,
          },
        });
  
      return newImage;
    }
    async findAll(): Promise<Image[]> {
      const images = await this.prisma.image.findMany();
      return images;
    }
   
    async findOne(id: string): Promise<Image> {
      const image = await this.prisma.image.findUnique({
        where: { id }
      });
      return image
    }
    async update(id: string, data: UpdateImageDto): Promise<Image> {
      const image = this.prisma.image.update({
        where: { id },
        data: { ...data },
      });
      return image;
    }
    async delete(id: string): Promise<void> {
      await this.prisma.image.delete({
        where: { id },
      });
    }
}