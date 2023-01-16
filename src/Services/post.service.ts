import { Post, } from '../Models/posts'

export class postService {

    //create a post
    async createPost(data: any) {
        try {
            const post = await new Post()
            const newPost = post.save(data)
            return newPost

        } catch (error) {
            console.log(error)
        }

    }

    //get all posts
    async getPosts() {
        try {
            const posts = await Post.find({})
            return posts

        } catch (error) {
            console.log(error)
        }

    }

    //get a single post
    async getPost(id: string) {
        try {
            const post = await Post.findById(id)
            if (!post) {
                return 'post not available'
            }
            return post

        } catch (error) {
            console.log(error)
        }

    }

    //update a post
    async updatePost(id: string, data: any) {
        try {
            const post = Post.findByIdAndUpdate(id, { data: data })
            return post
        } catch (error) {
            console.log(error)
        }
    }

    //delete a post 
    async deletePost(id: string) {
        try {
            const post = await Post.findByIdAndDelete(id)
            if (!post) {
                return 'post not available'
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const postServices = new postService()