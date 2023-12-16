import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const BookTypeThreeDateBlock = mongoose.model('BookTypeThreeDateBlock', datesSchema)
export default BookTypeThreeDateBlock
