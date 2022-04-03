import mongoose from '../db/conn'
import { Schema, Document } from 'mongoose'


interface UserInterface extends Document {
    name : string
}

const schema = new Schema({
    name : {
        type : String,
        required : true
    }
}, {timestamps : true})

export default mongoose.model<UserInterface>('User', schema)