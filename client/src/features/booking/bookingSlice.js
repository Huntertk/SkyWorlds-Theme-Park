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
    totalAmount: 0,
    isPaxModal: false,
    loading: false,
    totalAmount: 0,
    bookingDate: "",
    name:"", 
    email:"",
    mobileNumber:"",
    bookingResponse: "",
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
            setBookingDetailsFromLocalStorage(state)
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
            setBookingDetailsFromLocalStorage(state)
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
            setBookingDetailsFromLocalStorage(state)
        },
        adultTotalAmount: (state) => {
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
                } //First 
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.adultTotal =  state.adultCount *  148
                    return 
                 } else{
                    state.adultTotal = state.adultCount *  118
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.adultTotal =  state.adultCount *  110
                    return
                 } else{
                    state.adultTotal = state.adultCount *  88
                 }
            }
            // state.adultTotal = state.type === 'dinner' ?  state.adultCount *  199 : state.type === 'lunch' ? state.adultCount * 118 : state.adultCount * 88   
            setBookingDetailsFromLocalStorage(state)
        },
        childTotalAmount: (state) => {
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
                } //First 
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.childTotal =  state.childCount *  111
                    return 
                 } else{
                    state.childTotal = state.childCount *  82
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.childTotal = state.childCount *  90
                    return
                 } else{
                    state.childTotal = state.childCount *  70
                 }
            }
            // state.childTotal = state.type === 'dinner' ? state.childCount * 10 : state.type === 'lunch' ? state.childCount * 10 : state.childCount * 10
            setBookingDetailsFromLocalStorage(state)
        },
        seniorTotalAmount: (state) => {
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
                } //First 
            } else if(state.type === 'lunch'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.seniorTotal =  state.seniorCount *  111
                    return 
                 } else{
                    state.seniorTotal = state.seniorCount *  82
                 }
            } else if(state.type === 'tea'){
                if(state.bookingDay === 'Sun' || state.bookingDay === 'Sat' || state.bookingDay === 'Fri') {
                    state.seniorTotal = state.seniorCount *  90
                    return
                 } else{
                    state.seniorTotal = state.seniorCount *  70
                 }
            }

            // state.seniorTotal = state.type === 'dinner' ? state.seniorCount * 150 : state.type === 'lunch' ? state.seniorCount * 82 : state.seniorCount * 70
            setBookingDetailsFromLocalStorage(state)
        },

        setPreference: (state, action) => {
            state.pref = action.payload.pref
            setBookingDetailsFromLocalStorage(state)
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.seniorTotal
            state.bookingResponse = ""
            setBookingDetailsFromLocalStorage(state)
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
            setBookingDetailsFromLocalStorage(state)
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
            setBookingDetailsFromLocalStorage(state)
        },
        settingBookingResponse: (state, action) => {
            console.log(action.payload);
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
} = bookingSlice.actions

export default bookingSlice.reducer