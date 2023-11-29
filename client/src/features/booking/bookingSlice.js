import { createSlice } from "@reduxjs/toolkit";
import { setBookingDetailsFromLocalStorage, getBookingDetailsFromLocalStorage } from "../../utils/localStorage";
import { toast } from 'react-toastify';


const initialState = {
    adultCount:0,
    childCount:0,
    seniorCount:0,
    adultTotal: 0,
    childTotal: 0,
    seniorTotal: 0,
    generalCount:0,
    generalTotal:0,
    totalAmount: 0,
    isPaxModal: false,
    loading: false,
    totalAmount: 0,
    bookingDate: "",
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
    responseClientUrl:"",
    type:"",
    totalBookingsCount: 0,
    bookingDay: "",
    bookingId:"",
    pref:"",
    bookingTitle:""
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
            // setBookingDetailsFromLocalStorage(state)
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
            // setBookingDetailsFromLocalStorage(state)
        },


        generalCountIncrease : (state, action) => {
            state.generalCount = state.generalCount + 1
            // setBookingDetailsFromLocalStorage(state)
        },
        generalCountDecrease : (state, action) => {
            state.generalCount = state.generalCount - 1
            // setBookingDetailsFromLocalStorage(state)
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
            // setBookingDetailsFromLocalStorage(state)
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
            // setBookingDetailsFromLocalStorage(state)
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
            // setBookingDetailsFromLocalStorage(state)
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
            // setBookingDetailsFromLocalStorage(state)
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
            // setBookingDetailsFromLocalStorage(state)
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
            // setBookingDetailsFromLocalStorage(state)
        },

        generalTotalAmount: (state) => {
            state.generalTotal = state.generalCount * 75
            // setBookingDetailsFromLocalStorage(state)
        },
        adultTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "1-Day Pass") {
                    state.adultTotal = state.adultCount *  151
                   return 
                } else if(state.pref === "Combo: 1-Day Pass + Two-Way Standard Gondola Ride"
                ){
                    state.adultTotal = state.adultCount *  171
                   return
                } else if(state.pref === "1-Day Pass with Photo"){
                    state.adultTotal = state.adultCount *  179
                   return 
                } else if(state.pref === "Combo: Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets"
                ) {
                    state.adultTotal = state.adultCount *  215
                   return 
                } //Third
            } else if(state.type === 'bookTypeThree'){
                state.adultTotal = state.adultCount *  215
                return 
            } else if(state.type === 'bookTypeFour'){
                //Fourth
                state.adultTotal = state.adultCount *  166
                return
            } else if(state.type === 'bookTypeFive'){
                //Fifth
                state.adultTotal = state.adultCount *  225
                return
            }
            // setBookingDetailsFromLocalStorage(state)
        },
        childTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "1-Day Pass") {
                    state.childTotal = state.childCount *  128
                   return 
                } else if(state.pref === "Combo: 1-Day Pass + Two-Way Standard Gondola Ride"
                ){
                    state.childTotal = state.childCount *  148
                   return
                } else if(state.pref === "1-Day Pass with Photo"){
                    state.childTotal = state.childCount *  153
                   return 
                } else if(state.pref === "Combo: Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets"
                ) {
                    state.childTotal = state.childCount *  190
                   return 
                } //Third 
            }  else if(state.type === 'bookTypeThree'){
                state.childTotal = state.childCount *  190
                return 
            } else if(state.type === 'bookTypeFour'){
                //Fourth
                state.childTotal = state.childCount *  136
                return
            } else if(state.type === 'bookTypeFive'){
                //Fifth
                state.childTotal = state.childCount *  200
                return
            }

            // setBookingDetailsFromLocalStorage(state)
        },
        seniorTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "1-Day Pass") {
                    state.seniorTotal =  state.seniorCount *  128
                   return 
                } else if(state.pref === "Combo: 1-Day Pass + Two-Way Standard Gondola Ride"
                ){
                    state.seniorTotal =  state.seniorCount *  148
                   return
                } else if(state.pref === "1-Day Pass with Photo"){
                    state.seniorTotal =  state.seniorCount *  153
                   return 
                } else if(state.pref === "Combo: Genting SkyWorlds Theme Park + Skytropolis Indoor Theme Park Tickets"
                ) {
                    state.seniorTotal =  state.seniorCount *  190
                   return 
                } //Third 
            } else if(state.type === 'bookTypeThree'){
                state.seniorTotal = state.seniorCount *  190
                return 
            } else if(state.type === 'bookTypeFour'){
                //Fourth
                state.seniorTotal = state.seniorCount *  136
                return
            } else if(state.type === 'bookTypeFive'){
                //Fifth
                state.seniorTotal = state.seniorCount *  200
                return
            }
            // setBookingDetailsFromLocalStorage(state)
        },

        setPreference: (state, action) => {
            state.pref = action.payload.pref
            // setBookingDetailsFromLocalStorage(state)
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.seniorTotal + state.generalTotal
            state.bookingResponse = ""
            // setBookingDetailsFromLocalStorage(state)
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
            // setBookingDetailsFromLocalStorage(state)
        },
        openPaxModel: (state) => {
            state.isPaxModal = true
        },
        closePaxModel: (state) => {
            state.isPaxModal = false
        }, 
        cancelBooking: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            toast.warning("Booking Cancel")
            return state = initialState
        }, 
        bookingStart: (state,action) =>{
            state.loading  = true
            state.bookingResponse = ""
            
        },
        bookingSucess: (state, action) => {
            state.loading  = false
            state.name = action.payload.name
            state.email = action.payload.email
            state.mobileNumber = action.payload.mobileNumber
            state.bookingResponse = action.payload.bookingResponse
            state.totalBookingsCount = action.payload.totalBookingsCount
            state.responseClientUrl = action.payload.responseClientUrl
            console.log(state);
            setBookingDetailsFromLocalStorage(state)
        },
        bookingFailed: (state, action) => {
            state.loading = false
            toast.error("Booking Failed")
        },
        bookingConfirm: (state, action) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
        choosingBooking: (state, action) => {
            state.type = action.payload.type
            state.bookingTitle = action.payload.title
            // setBookingDetailsFromLocalStorage(state)
        },
        settingBookingResponse: (state, action) => {
            state.bookingResponse = ""
            state.bookingId = action.payload.createBookingId
            setBookingDetailsFromLocalStorage(state)
        },
        initialRender: (state) => {
            setBookingDetailsFromLocalStorage(initialState)
            return state = initialState
        },
    }
})

export const {
    adultCountIncrease, 
    adultCountDecrease, 
    childCountIncrease, 
    childCountDecrease,
    infantCountDecrease,
    infantCountIncrease,
    seniorCountDecrease,
    seniorCountIncrease,
    adultTotalAmount,
    childTotalAmount,
    infantTotalAmount,
    seniorTotalAmount,
    countTotalBookingAmount, 
    setBookingDate,
    openPaxModel,
    closePaxModel,
    cancelBooking,
    bookingFailed,
    bookingSucess,
    bookingStart,
    bookingConfirm,
    choosingBooking,
    settingBookingResponse,
    initialRender,
    setPreference,
    generalCountDecrease,
    generalCountIncrease,
    generalTotalAmount
} = bookingSlice.actions

export default bookingSlice.reducer