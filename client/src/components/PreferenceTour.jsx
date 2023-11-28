import '../styles/preferenceTour.scss'
import { preferenceData } from '../data'
import {useDispatch, useSelector} from 'react-redux'
import { countTotalBookingAmount, setPreference } from '../features/booking/bookingSlice'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const CardData = ({data}) => {
    const {pref}  = useSelector(state => state.booking)
    const dispatch = useDispatch()
    return (
        <div className="prefrenceTabCard">
        <h1>{data.title}</h1>
        <div className="content">
            <p>MYR {data.price}</p>
            <button onClick={() => {
                dispatch(setPreference({pref: data.title}))
                dispatch(countTotalBookingAmount({totalAmount: data.price}))
            }}>{pref === data.title ? "✔ Selected": "Select"}</button>
        </div>
        <ul>
            {
                data.details.map((d, index) => (
                    <li key={index}>{d}</li>
                ))
            }
        </ul>
    </div>
    )
}

const PreferenceTour = () => {
  return (
    <section className='prefrenceTab'>
        <h1>Select your preference</h1>
        <div className="prefrenceTabCardContainer">
            {
                preferenceData.map((data) => (
                    <CardData key={data.id} data={data} />
                ))
            }
            
        </div>
    </section>
  )
}

export default PreferenceTour