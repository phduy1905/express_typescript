import express from "express";
import Post from "./post.interface";

class PostsController {
  public path = "/posts";
  public router = express.Router();
  private posts: Post[] = [
    {
      author: "Kevin Spacey",
      title: "House of cards",
      content: "Lorem ipsum",
    },
  ];
  constructor() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createNewPost);
  }

  getAllPosts = (request: express.Request, response: express.Response) => {
    response.send(this.posts);
  };

  createNewPost = (request: express.Request, response: express.Response) => {
    const newPost: Post = request.body;
    this.posts.push(newPost);
    response.send(this.posts);
  };
}

export default PostsController;
