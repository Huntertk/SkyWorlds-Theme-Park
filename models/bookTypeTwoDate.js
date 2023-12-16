import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const BookTypeTwoDateBlock = mongoose.model('BookTypeTwoDateBlock', datesSchema)
export default BookTypeTwoDateBlock