import mongoose from 'mongoose'

const datesSchema = new mongoose.Schema({
    blockDates:{
        type: String
    }
}, {timestamps: true})

const BookTypeFiveDateBlock = mongoose.model('BookTypeFiveDateBlock', datesSchema)
export default BookTypeFiveDateBlock