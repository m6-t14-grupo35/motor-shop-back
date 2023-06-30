import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commentRepository: CommentsRepository) {}
  async create(
    createCommentDto: CreateCommentDto,
    ad_id: string,
    user_id: string,
  ) {
    return await this.commentRepository.create(
      createCommentDto,
      ad_id,
      user_id,
    );
  }

  async findAll() {
    return await this.commentRepository.findAll();
  }

  async findOne(id: string) {
    const comment = await this.commentRepository.findOne(id);
    if (!comment) {
      throw new NotFoundException('Comment not found.');
    }
    return comment;
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
    user_id: string,
  ) {
    const comment = await this.commentRepository.findOne(id);
    if (!comment) {
      throw new NotFoundException('Comment not found.');
    }
    if (comment.user_id != user_id) {
      throw new ForbiddenException(
        'Not allowed to patch another users comments. Update just your own comments.',
      );
    }
    return await this.commentRepository.update(id, updateCommentDto);
  }

  async remove(id: string, user_id: string) {
    const comment = await this.commentRepository.findOne(id);
    if (!comment) {
      throw new NotFoundException('Comment not found.');
    }
    if (comment.user_id != user_id) {
      throw new ForbiddenException(
        'Not allowed to delete another users comments. Remove just your own comments.',
      );
    }
    return await this.commentRepository.delete(id);
  }
}
