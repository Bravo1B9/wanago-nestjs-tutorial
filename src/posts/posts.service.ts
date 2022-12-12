import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from "./dto/updatePost.dto";
import Post from "./post.entity";

@Injectable()
export default class PostsService {
  constructor (
    @InjectRepository(Post)
    private postsRepository: Repository<Post>
  ) {}
  
  async createPost(post: CreatePostDto) {
    const newPost = await this.postsRepository.create(post);
    await this.postsRepository.save(newPost);
    return newPost;
  }

  getPostById(id: number) {
    
  }

  getAllPosts() {
    
  }

  replacePost(id: number, post: UpdatePostDto) {
    
  }

  deletePost(id: number) {
    
  }

}