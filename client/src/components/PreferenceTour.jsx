import '../styles/preferenceTour.scss'
// import { preferenceData } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'
import { publicHoliDayDate } from '../data'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CardData = ({data}) => {
    const {pref} = useSelector(state => state.booking)
    const dispatch = useDispatch()
    return (
        <div className="prefrenceTabCard">
        <h1>{data.title}</h1>
        <div className="content">
            <p>MYR {data.price.adult}</p>
            <button onClick={() => {
                dispatch(setPreference({preferenceTitle: data.title}))
                dispatch(countTotalBookingAmount({totalAmount: data.price}))
            }}>{pref === data.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                data?.details?.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = ({selectedDate}) => {

    const formatDateToFull = selectedDate.toString().slice(0,15)
    const publicHoliday = publicHoliDayDate.includes(formatDateToFull)
    const selectedDay = selectedDate.toString().split(' ')[0]
    const {prefrenceOpt}  = useSelector(state => state.booking)
    let prefrenceData = "";
    
    if(selectedDay === 'Fri' || selectedDay === 'Sat') {
        prefrenceData = prefrenceOpt.Peak
    } else if(publicHoliday){
        prefrenceData = prefrenceOpt.Peak
    } else{
        prefrenceData = prefrenceOpt.offPeak
    }
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer" style={{
            gridTemplateColumns: `repeat(${prefrenceData.length}, 300px)`
        }}>
            {
                prefrenceData.map((data, i) => (
                    <CardData key={i} data={data} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour