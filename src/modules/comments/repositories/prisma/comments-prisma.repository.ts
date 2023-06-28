import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateCommentDto } from "../../dto/create-comment.dto";
import { Comment } from "../../entities/comment.entity";
import { UpdateCommentDto } from "../../dto/update-comment.dto";
import { CommentsRepository } from "../comments.repository";


@Injectable()
export class CommentsPrismaRepository implements CommentsRepository{
    constructor(private prisma: PrismaService) {}
    async create(data: CreateCommentDto, ad_id: string, user_id: string): Promise<Comment> {
      const comment = new Comment();
      Object.assign(comment, {
        ...data,
        ad_id: ad_id,
        user_id: user_id,
      });

      const newComment = await this.prisma.comment.create({
          data: {
            ...comment,
          },
        });
  
      return newComment;
    }
    async findAll(): Promise<Comment[]> {
      const comments = await this.prisma.comment.findMany();
      return comments;
    }
   
    async findOne(id: string): Promise<Comment> {
      const comment = await this.prisma.comment.findUnique({
        where: { id }
      });
      return comment
    }
    async update(id: string, data: UpdateCommentDto): Promise<Comment> {
      const comment = this.prisma.comment.update({
        where: { id },
        data: { ...data },
      });
      return comment;
    }
    async delete(id: string): Promise<void> {
      await this.prisma.comment.delete({
        where: { id },
      });
    }
}