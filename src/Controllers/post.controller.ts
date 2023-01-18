import { postServices } from '../Services/post.service'
import { Request, Response } from 'express'

class postController {

    //add post controller
    addpost = async (req: Request, res: Response) => {

        const data = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            published: req.body.published
        }
        const post = await postServices.createPost(data)
       
        res.send(post)
    }

    //get all posts
    getPosts = async (req: Request, res: Response) => {
        const posts = await postServices.getPosts()
        res.send(posts)
    }


    //get a single post
    getAPost = async (req: Request, res: Response) => {
        const id = req.params.id
        const post = await postServices.getPost(id)
        res.send(post)
    }

    //update post
    updatePost = async (req: Request, res: Response) => {
        const id = req.params.id
       const post = await postServices.updatePost(id, req.body)  
        res.send(post)
    }


    //delete a post
    deletePost = async (req: Request, res: Response) => {
        const id = req.params.id
        await postServices.deletePost(id)
        res.send('post deleted')
    }

}

export const PostController = new postController()