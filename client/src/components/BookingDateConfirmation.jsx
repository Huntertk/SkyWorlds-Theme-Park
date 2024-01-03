import React, { useEffect, useRef, useState } from 'react'
import '../styles/bookingDateConfirmation.scss'
import 'react-day-picker/dist/style.css';
import './day-picker.css';
import { format,differenceInCalendarDays } from 'date-fns';
// import PaxModal from './PaxModal';
import { DayPicker, Row } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { openPaxModel, setBookingDate } from '../features/booking/bookingSlice';
import {Navigate, useNavigate} from 'react-router-dom'
import PreferenceTour from './PreferenceTour';
import PaxModal from './PaxModal';
import axios from 'axios'


function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const DateBtn = ({setSelectedDate, setCalenderOpen,selectedDate, calenderOpen, disabledDates}) => {
    const btnRef = useRef(null)
    const disabledBtnToDate = (btnDate) => {
        const settingHourToZero = disabledDates?.map(d => d.setHours(0,0,0,0))
        const findingDate = settingHourToZero?.find(d => d === new Date(Date.now() + btnDate).setHours(0,0,0,0))
        return findingDate
    }

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    function getDayName(date) {
        return new Date(date).toLocaleDateString('en-US', {weekday: 'short'});
    }
    const day = new Date().getDay()
    const date = new Date(Date.now()).getDate()
    const focusBtn = () => {
        btnRef.current.focus()
    }
    useEffect(() => {
        focusBtn()
    },[])
    return (
        <div className="dateBtnContainer">
           <button className={selectedDate?.toString() == new Date(Date.now())  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now()+1000 *60 *60 *24))}
           disabled={disabledBtnToDate(1000 *60 *60 *24)}
           >
            <span>
                {new Date(Date.now() + 1000 *60 *60 *24).getDate()}
            </span>
            <span>
                {getDayName(new Date(Date.now() + 1000 *60 *60 *24))}
            </span>
           </button>
           <button 
           className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24*2)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 *2))}
           disabled={disabledBtnToDate( 1000 * 60 *60 *24 *2 )}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *2  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 *24 * 2))}
            </span>
            </button>
           <button  
            className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24 * 3)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 3))}
           disabled={disabledBtnToDate( 1000 * 60 *60 *24 *3 )}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *3  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 3))}
            </span>
            </button>
           <button 
            className={selectedDate?.toString() == new Date(Date.now() + 1000*60*60*24 *4)  ? "active" : ""}
           onClick={() => setSelectedDate(new Date(Date.now() + 1000*60*60*24 * 4))}
           disabled={disabledBtnToDate( 1000 * 60 *60 *24 *4)}
           >
            <span>
            {new Date(Date.now() + 1000 * 60 * 60 * 24 *4  ).getDate()}
            </span>
            <span>
            {getDayName(new Date(Date.now() + 1000 * 60 *60 * 24 * 4))}
            </span>
            </button>
           <button ref={btnRef} className={calenderOpen ? "moreDates active" : "moreDates"} onClick={() => setCalenderOpen(prev => !prev)}>More Dates</button>
        </div>
    )
}

const BookingDateConfirmation = () => {
    
    const dispatch = useDispatch()
    const {isPaxModal, bookingDate, type, pref} = useSelector(store => store.booking)
    const [blockedDates, setBlockedDates] = useState([])
    const disabledDates = blockedDates?.map((dates) => new Date(dates.blockDates))
        const [selectedDate, setSelectedDate] = useState("")
        const [calenderOpen, setCalenderOpen] = useState(false)
        const disabledDays  = [
            ...disabledDates
        ]
        if(!type){
            return <Navigate to="/" />
        }
        
        const getBookTypeOneBlockDates = async () => {
            try {
                const {data} = await axios.get('/api/v1/booktype-one-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
              } catch (error) {
                  console.log(error);
              }
          }

          const getBookTypeTwoBlockDates = async () => {
            try {
                const {data} = await axios.get('/api/v1/booktype-two-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
              } catch (error) {
                  console.log(error);
              }
          }

          const getBookTypeThreeBlockDates = async () => {
            try {
                const {data} = await axios.get('/api/v1/booktype-three-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
              } catch (error) {
                  console.log(error);
              }
          }

          const getBookTypeFourBlockDates = async () => {
            try {
                const {data} = await axios.get('/api/v1/booktype-four-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
              } catch (error) {
                  console.log(error);
              }
          }

          const getBookTypeFiveBlockDates = async () => {
            try {
                const {data} = await axios.get('/api/v1/booktype-five-dates-manage/block-dates')
                setBlockedDates(data.blockDates)
              } catch (error) {
                  console.log(error);
              }
          }
        const defaultMonth = new Date(Date.now());

        const navigate = useNavigate()

        useEffect(() => {
            if(type === 'bookTypeOne'){
                getBookTypeOneBlockDates()
                return 
            } else if(type === 'bookTypeTwo'){
                getBookTypeTwoBlockDates()
                return
            }else if(type === 'bookTypeThree'){
                getBookTypeThreeBlockDates()
                return
            }else if(type === 'bookTypeFour'){
                getBookTypeFourBlockDates()
                return
            }else if(type === 'bookTypeFive'){
                getBookTypeFiveBlockDates()
                return
            }
          },[selectedDate])
  return (
    <section className='bookingDateConfirmationMainContainer'>
        <div className="bookingDateWrapper">
            <h1>select date</h1>
            <DateBtn 
            setSelectedDate={setSelectedDate} 
            setCalenderOpen={setCalenderOpen} 
            selectedDate={selectedDate}
            calenderOpen={calenderOpen}
            disabledDates={disabledDates}
            />
            <div className="moreDatesContainer">
                <DayPicker
            style={calenderOpen === false && {display:'none'}}
            mode="single"
            selected={selectedDate} 
            fromDate={new Date()}
            components={{ Row: OnlyFutureRow }}
            hidden={isPastDate}
            onSelect={setSelectedDate}
            fromMonth={defaultMonth}
            // toDate={new Date(Date.now() + 1000 *60*60*24*60)}
            disabled={disabledDays}
            />
            </div>
            <>
                {selectedDate && type === 'bookTypeOne' &&  <PreferenceTour selectedDate={selectedDate}/>} 
                {selectedDate && type === 'bookTypeThree' &&  <PreferenceTour selectedDate={selectedDate}/>}
                {selectedDate && type === 'bookTypeFour' &&  <PreferenceTour selectedDate={selectedDate}/>} 
                {selectedDate && type === 'bookTypeFive' &&  <PreferenceTour selectedDate={selectedDate}/>} 
            </>
            
            {/* <PreferenceTour /> */}
            <div className="selectedDate">
                {
                    selectedDate ? <>
                    <div className='prefrenceAndDateContainer'>
                        <p>{
                            type === 'bookTypeOne' && pref ? pref : 
                            type === 'bookTypeTwo' ? "Combo: Genting Awana SkyWay (One-way) + Skytropolis Indoor Theme Park Tickets" : 
                            type === 'bookTypeThree' && pref ? pref : 
                            type === 'bookTypeFour'  && pref ? pref : 
                            type === 'bookTypeFive' && pref 
                        }</p>
                    <p>You selected {format(selectedDate, 'PPP')}</p>
                    </div>
                   {
                    type === 'bookTypeOne' && pref && <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button>
                    }
                    {
                       type === 'bookTypeTwo' &&
                        <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button>
                    }
                    {
                       type === 'bookTypeThree' && pref &&
                        <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button>
                    }
                    {
                    type === 'bookTypeFour' && pref && <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button>
                    }
                     {
                    type === 'bookTypeFive' && pref && <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button>
                    }
                    {/* {
                       type !== 'bookTypeFour' ?
                        <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button> : 
                        type === 'bookTypeFour' && pref ? <button onClick={() => {
                            dispatch(setBookingDate({selectedBookingDate:format(selectedDate, 'PPP'), selectedDay: selectedDate.toString()}))
                            dispatch(openPaxModel())
                            setCalenderOpen(false)
                        }}>Next</button>:<></>
                    } */}
                    </> : <p>Select One Date</p>
                }
            </div>
        </div>
        
       { isPaxModal && <PaxModal  selectedDate={selectedDate} />}
        
        
    </section>
  )
}

export default BookingDateConfirmation