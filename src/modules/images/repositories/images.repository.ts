import { CreateImageDto } from "../dto/create-image.dto";
import { UpdateImageDto } from "../dto/update-image.dto";
import { Image } from "../entities/image.entity";

export abstract class ImagesRepository{
        abstract create(data: CreateImageDto, ad_id: string): Promise<Image> | Image
        abstract findAll(): Promise<Image[]> | Image[]
        abstract findOne(id: string): Promise<Image> | undefined | Image
        abstract update(ad_id: string, data:UpdateImageDto): Promise<Image> | Image
        abstract delete(id: string): Promise<void> | void
}