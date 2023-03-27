//import module
import { Post, } from '../Models/posts'
export class postService {
    //create a post
    async createPost(data: any) {
        try {
            const newPost = await Post.create(data)
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
            const post = await Post.findById({_id:id})
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
                //pass the id of the object you want to update
                //data is for the new body you are updating the old one with
                //new:true, so the dats being returned, is the update one
                const postz = await Post.findByIdAndUpdate({_id:id}, data, {new: true})                
                if(!postz){
                    return "post not available"
                }
                return postz          
        } catch (error) {
            console.log(error)
        }
    }

    //delete a post by using the find by id and delete 
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

//export the class
export const postServices = new postService()