import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from "./dto/updatePost.dto";
import Post from "./post.interface";

@Injectable()
export default class PostsService {
  private lastPostId = 0;
  private posts: Post[] = [];

  createPost(post: CreatePostDto) {
    const newPost = {
      id: ++this.lastPostId,
      ...post
    }
    this.posts.push(newPost);
    return newPost;
  }
}