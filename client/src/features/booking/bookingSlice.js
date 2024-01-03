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
    bookingTitle:"",
    pricing:"",
    prefrenceOpt:""
}


const bookingSlice = createSlice({
    name:'booking',
    initialState: getBookingDetailsFromLocalStorage() || initialState,
    reducers:{
        adultCountIncrease : (state, action) => {
            state.adultCount = state.adultCount + 1
        },
        adultCountDecrease : (state, action) => {
            state.adultCount = state.adultCount - 1
        },


        generalCountIncrease : (state, action) => {
            state.generalCount = state.generalCount + 1
        },
        generalCountDecrease : (state, action) => {
            state.generalCount = state.generalCount - 1
        },
        childCountIncrease : (state, action) => {
            state.childCount = state.childCount + 1
        },
        childCountDecrease : (state, action) => {
            state.childCount = state.childCount - 1
        },
        infantCountIncrease : (state, action) => {
            state.infantCount = state.infantCount + 1
        },
        infantCountDecrease : (state, action) => {
            state.infantCount = state.infantCount - 1
        },
        seniorCountIncrease : (state, action) => {
            state.seniorCount = state.seniorCount + 1
        },
        seniorCountDecrease : (state, action) => {
            state.seniorCount = state.seniorCount - 1
        },

        generalTotalAmount: (state) => {
            state.generalTotal = state.generalCount * 75
        },
        adultTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "1 Day Pass Off Peak") {
                    
                    state.adultTotal = state.adultCount *  state.prefrenceOpt.offPeak[0].price.adult
                   return 
                } else if(state.pref === "1 Day Pass Peak"){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt.Peak[0].price.adult
                    return 
                } 
                else if(state.pref === "Combo: 1-Day Pass + Two-way Standard Gondola Ride Off Peak"
                ){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt.offPeak[1].price.adult
                   return
                } else if(state.pref === "Combo: 1-Day Pass + Two-way Standard Gondola Ride Peak"
                ){
                    state.adultTotal = state.adultCount *  state.prefrenceOpt.Peak[1].price.adult
                    return
                } 
                // else if(state.pref === "1-Day Pass with Photo"){
                    //     state.adultTotal = state.adultCount *  179
                    //    return 
                    // } 
                    else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak"
                    ) {
                        state.adultTotal = state.adultCount *  state.prefrenceOpt.offPeak[2].price.adult
                   return 
                }
                    else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Peak"
                    ) {
                        state.adultTotal = state.adultCount *  state.prefrenceOpt.Peak[2].price.adult
                   return 
                } //Third
            } else if(state.type === 'bookTypeThree'){
                if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak"){

                    state.adultTotal = state.adultCount *  state.prefrenceOpt.offPeak[0].price.adult

                } else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Peak"){

                    state.adultTotal = state.adultCount *  state.prefrenceOpt.Peak[0].price.adult
                }
            } else if(state.type === 'bookTypeFour'){
                //Fourth
                if(state.pref === "Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Off Peak"){

                    state.adultTotal = state.adultCount *  state.prefrenceOpt.offPeak[0].price.adult

                } else if(state.pref === "Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Peak"){

                    state.adultTotal = state.adultCount *  state.prefrenceOpt.Peak[0].price.adult
                }
            } else if(state.type === 'bookTypeFive'){
                //Fifth
                if(state.pref === "Combo: Awana Skyway(One way) + Skyworld + Skytropolis Off Peak"){

                    state.adultTotal = state.adultCount *  state.prefrenceOpt.offPeak[0].price.adult

                } else if(state.pref === "Combo: Awana Skyway(One way) + Skyworld + Skytropolis Peak"){

                    state.adultTotal = state.adultCount *  state.prefrenceOpt.Peak[0].price.adult
                }
            }
        },
        childTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "1 Day Pass Off Peak") {
                    
                    state.childTotal = state.childCount *  state.prefrenceOpt.offPeak[0].price.child
                   return 
                } else if(state.pref === "1 Day Pass Peak"){
                    state.childTotal = state.childCount *  state.prefrenceOpt.Peak[0].price.child
                    return 
                } 
                else if(state.pref === "Combo: 1-Day Pass + Two-way Standard Gondola Ride Off Peak"
                ){
                    state.childTotal = state.childCount *  state.prefrenceOpt.offPeak[1].price.child
                   return
                } else if(state.pref === "Combo: 1-Day Pass + Two-way Standard Gondola Ride Peak"
                ){
                    state.childTotal = state.childCount *  state.prefrenceOpt.Peak[1].price.child
                    return
                } 
                // else if(state.pref === "1-Day Pass with Photo"){
                    //     state.adultTotal = state.adultCount *  179
                    //    return 
                    // } 
                    else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak"
                    ) {
                        state.childTotal = state.childCount *  state.prefrenceOpt.offPeak[2].price.child
                   return 
                }
                    else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Peak"
                    ) {
                        state.childTotal = state.childCount *  state.prefrenceOpt.Peak[2].price.child
                   return 
                } //Third
            }  else if(state.type === 'bookTypeThree'){
                if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak"){

                    state.childTotal = state.childCount *  state.prefrenceOpt.offPeak[0].price.child

                } else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Peak"){

                    state.childTotal = state.childCount *  state.prefrenceOpt.Peak[0].price.child
                }
            } else if(state.type === 'bookTypeFour'){
                //Fourth
                if(state.pref === "Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Off Peak"){

                    state.childTotal = state.childCount *  state.prefrenceOpt.offPeak[0].price.child

                } else if(state.pref === "Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Peak"){

                    state.childTotal = state.childCount*  state.prefrenceOpt.Peak[0].price.child
                }
            } else if(state.type === 'bookTypeFive'){
                //Fifth
                if(state.pref === "Combo: Awana Skyway(One way) + Skyworld + Skytropolis Off Peak"){

                    state.childTotal = state.childCount *  state.prefrenceOpt.offPeak[0].price.child

                } else if(state.pref === "Combo: Awana Skyway(One way) + Skyworld + Skytropolis Peak"){

                    state.childTotal = state.childCount *  state.prefrenceOpt.Peak[0].price.child
                }
            }
        },
        seniorTotalAmount: (state) => {
            //First
            if(state.type === 'bookTypeOne'){
                if(state.pref === "1 Day Pass Off Peak") {
                    
                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.offPeak[0].price.senior
                   return 
                } else if(state.pref === "1 Day Pass Peak"){
                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.Peak[0].price.senior
                    return 
                } 
                else if(state.pref === "Combo: 1-Day Pass + Two-way Standard Gondola Ride Off Peak"
                ){
                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.offPeak[1].price.senior
                   return
                } else if(state.pref === "Combo: 1-Day Pass + Two-way Standard Gondola Ride Peak"
                ){
                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.Peak[1].price.senior
                    return
                } 
                // else if(state.pref === "1-Day Pass with Photo"){
                    //     state.adultTotal = state.adultCount *  179
                    //    return 
                    // } 
                    else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak"
                    ) {
                        state.seniorTotal = state.seniorCount *  state.prefrenceOpt.offPeak[2].price.senior
                   return 
                }
                    else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Peak"
                    ) {
                        state.seniorTotal = state.seniorCount *  state.prefrenceOpt.Peak[2].price.senior
                   return 
                } //Third
            }  else if(state.type === 'bookTypeThree'){
                if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Off Peak"){

                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.offPeak[0].price.senior

                } else if(state.pref === "Combo: Skyworlds Themepark + Skytropolis Themepark Peak"){

                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.Peak[0].price.senior
                }
            } else if(state.type === 'bookTypeFour'){
                //Fourth
                if(state.pref === "Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Off Peak"){

                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.offPeak[0].price.senior

                } else if(state.pref === "Combo: Awana Skyway(One-way) + Skyworld Outdoor Themepark Peak"){

                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.Peak[0].price.senior
                }
            } else if(state.type === 'bookTypeFive'){
                //Fifth
                if(state.pref === "Combo: Awana Skyway(One way) + Skyworld + Skytropolis Off Peak"){

                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.offPeak[0].price.senior

                } else if(state.pref === "Combo: Awana Skyway(One way) + Skyworld + Skytropolis Peak"){

                    state.seniorTotal = state.seniorCount *  state.prefrenceOpt.Peak[0].price.senior
                }
            }
        },

        setPreference: (state, action) => {
            state.pref = action.payload.preferenceTitle
        },
        setPreferenceOption: (state, action) => {
            state.prefrenceOpt = action.payload.preference
        },
        countTotalBookingAmount: (state, action) => {
            state.totalAmount = state.adultTotal + state.childTotal + state.seniorTotal + state.generalTotal
            state.bookingResponse = ""
        },
        setBookingDate: (state, action) => {
            state.bookingDate = action.payload.selectedBookingDate
            state.bookingResponse = ""
            state.bookingDay = action.payload.selectedDay.split(' ')[0]
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
            state.pricing = action.payload.pricing
            state.bookingTitle = action.payload.title
            state.pref = action.payload.preference
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
    generalTotalAmount,
    setPreferenceOption
} = bookingSlice.actions

export default bookingSlice.reducer