//importing modules
import mongoose, {Schema, model,} from 'mongoose'

//creating an interface creating a document in mongoDB
interface IPosts {
    title: string,
    description: string,
    author: string,
    published: boolean,

}

//schema
const postSchema = new Schema<IPosts>({
    title: {
        type: String,
        //required: true
    },

    description: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: true,
        default: false
    },

    
})

//creating a model
 export const Post = model<IPosts>('Post', postSchema )
