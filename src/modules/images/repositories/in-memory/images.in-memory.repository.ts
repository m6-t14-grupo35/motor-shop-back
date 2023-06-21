import { Injectable } from "@nestjs/common";
import { ImagesRepository } from "../images.repository";
import { Image } from "../../entities/image.entity";
import { CreateImageDto } from "../../dto/create-image.dto";
import { UpdateImageDto } from "../../dto/update-image.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ImagesInMemory implements ImagesRepository{
    private database: Image[] = [];
    create(data: CreateImageDto, ad_id: string): Image | Promise<Image> {
      const newImage = new Image();
      Object.assign(newImage, {
        ...data,
        ad_id: ad_id,
      });
  
      this.database.push(newImage);
  
      return newImage;
    }
    findAll(): Image[] | Promise<Image[]> {
      return plainToInstance(Image, this.database);
    }
    findOne(id: string): Image | Promise<Image> {
      const image = this.database.find((image) => image.id == id);
      return plainToInstance(Image, image);
    }
    update(id: string, data: UpdateImageDto): Image | Promise<Image> {
      const imageIndex = this.database.findIndex((image) => image.id == id);
      this.database[imageIndex] = {
        ...this.database[imageIndex],
        ...data,
      };
      return plainToInstance(Image, this.database[imageIndex]);
    }
    delete(id: string): void | Promise<void> {
      const imageIndex = this.database.findIndex((image) => image.id == id);
      this.database.splice(imageIndex, 1);
    }
}