import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { Comment } from "../entities/comment.entity";

export abstract class CommentsRepository{
    abstract create(data: CreateCommentDto, ad_id:string, user_id: string): Promise<Comment> | Comment
    abstract findAll(): Promise<Comment[]> | Comment[]
    abstract findOne(id: string): Promise<Comment> | undefined | Comment
    abstract update(id: string, data:UpdateCommentDto): Promise<Comment> | Comment
    abstract delete(id: string): Promise<void> | void
}