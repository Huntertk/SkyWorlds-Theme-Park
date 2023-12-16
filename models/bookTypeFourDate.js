import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const BookTypeFourDateBlock = mongoose.model('BookTypeFourDateBlock', datesSchema)
export default BookTypeFourDateBlock