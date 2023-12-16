import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-day-picker/dist/style.css';
import { format,differenceInCalendarDays } from 'date-fns';
import { DayPicker, Row } from 'react-day-picker';
import {toast} from 'react-toastify'
import moment from 'moment'
import '../../styles/manageDates.scss'

const BookTypeOneDate = () => {
  const [isLoading, setIsLoading] = useState(false)
    const [selectedDate, setSelectedDate] = useState("")
    const [isFetch, setIsFetch] = useState(false)
    const [blockedDates, setBlockedDates] = useState([])
    const disabledDays = blockedDates?.map((dates) => new Date(dates.blockDates))
      const dateToString = selectedDate.toString()
      function isPastDate(date) {
        return differenceInCalendarDays(date, new Date()) < 0;
      }

      const addBlockDate = async () => {
        try {
          setIsLoading(true)
            const {data} = await axios.post('/api/v1/booktype-one-dates-manage/block-dates', {blockDates: dateToString})
            toast.success("Date Blocked Successfully")
            setIsFetch(prev => !prev)
            setSelectedDate("")
            setIsLoading(false)
          } catch (error) {
            console.log(error);
          }
        }
        
        const getBlockDates = async () => {
          try {
            const {data} = await axios.get('/api/v1/booktype-one-dates-manage/block-dates')
            setBlockedDates(data.blockDates)
          } catch (error) {
            console.log(error);
          }
        }
        
        const removeBlockedDate = async (id) => {
          try {
            setIsLoading(true)
            const res = await axios.delete(`/api/v1/booktype-one-dates-manage/block-dates/${id}`)
            setIsFetch(prev => !prev)
            setIsLoading(false)
          } catch (error) {
            console.log(error);
          }
        }

        useEffect(() => {
        getBlockDates()
      },[selectedDate, isFetch])

  return (
    <div className='mainDateManageContainer'>
        <h1>Tickets to Genting SkyWorld Outdoor Theme Park <br /> Date Manage</h1>
        <DayPicker
                defaultMonth={new Date(Date.now())}
                mode="single"
                selected={selectedDate} 
                fromDate={new Date()}
                hidden={isPastDate}
                disabled={disabledDays}
                onSelect={setSelectedDate}
            />

        {selectedDate && <p>You selected { format(selectedDate, 'PPP')} </p>}    

       {selectedDate && <button className='btn' onClick={addBlockDate}
       disabled={isLoading}
       >Block Dates</button>}

       <div className="blockedDateContainer">
        <h1>
          Blocked Dates
        </h1>
        <div className="">
        {blockedDates.map((d, i) => {
          return <button key={i}
          onClick={() => removeBlockedDate(d._id)}
          disabled={isLoading}
          >{moment(new Date(d.blockDates)).format('L')} Remove</button>
        })}
        </div>
       </div>
    </div>
  )
}

export default BookTypeOneDate