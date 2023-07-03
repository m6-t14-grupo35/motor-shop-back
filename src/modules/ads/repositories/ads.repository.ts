import { Comment } from "src/modules/comments/entities/comment.entity";
import { CreateAdDto } from "../dto/create-ad.dto";
import { UpdateAdDto } from "../dto/update-ad.dto";
import { Ad } from "../entities/ad.entity";

export abstract class AdsRepository {
    abstract create(data: CreateAdDto, user_id: string): Promise<Ad> | Ad
    abstract findAll(): Promise<Ad[]> | Ad[]
    abstract findOne(id: string): Promise<Ad> | undefined | Ad
    abstract findComments(id: string): Promise<Comment[]> | Comment[]
    abstract update(id: string, data:UpdateAdDto): Promise<Ad> | Ad
    abstract delete(id: string): Promise<void> | void
}