import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../error/customError.js"
import Booking from "../models/booking.js"
import nodemailer from 'nodemailer'
import stripePackage from 'stripe';
import dotenv from 'dotenv'
dotenv.config()

const stripe = stripePackage(`${process.env.STRIPE_SK}`);

export const createBooking = async (req, res) => {
    const {
        name,
        email,
        mobileNumber,
        bookingDate,
        adultCount,
        childCount,
        generalCount,
        seniorCount,
        totalAmount,
        bookingType,
        bookingTitle,
        responseClientUrl
    } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'myr',
                        product_data: {
                            name: bookingTitle,
                        },
                        unit_amount: totalAmount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `https://skyworlds-theme-pak.onrender.com/${responseClientUrl}`,
            cancel_url: 'https://skyworlds-theme-pak.onrender.com//',
            payment_intent_data: {
                setup_future_usage: 'off_session',
                description: 'Booking payment',
                shipping: {
                    name,
                    phone: mobileNumber,
                    address: {
                        line1: '...',
                        postal_code: '...',
                        city: '...',
                        country: '...',
                    },
                },
                receipt_email: email,  // Include user's email as receipt_email
                metadata: {
                    bookingDate,
                    adultCount,
                    childCount,
                    generalCount,
                    seniorCount,
                    totalAmount,
                },
            },
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

   
}

export const successBooking = async (req, res, next) => {

    try {
        const isBookingIdExist = await Booking.find({bookingId: req.body.bookingId})
        if(isBookingIdExist.length > 1){
            throw BadRequestError("Order Already Placed")
        }
        const booking = await Booking.create(req.body)
        if (!booking) {
            throw BadRequestError("Something Went Wrong")
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.MAIL_PASS
            }
        })

        const mailOptions = {
            from: process.env.EMAIL,
            to: `${req.body.email},
        ${process.env.EMAIL}`,
            subject: `Booking Successfully`,
            html: `
            <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body>
    <div dir="ltr" class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#ffffff"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://skyworlds-theme-pak.onrender.com/"><img src="https://i.postimg.cc/J4DR0BZG/logo.png" alt style="display: block;" width="250"></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://skyworlds-theme-pak.onrender.com/"><img src="https://i.postimg.cc/FRRVHmgF/homeMain.jpg" alt style="display: block;" width="390"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-content" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text" bgcolor="#ffffff">
                                                                                        <h2 style="line-height: 150%; color: #f26823;">BOOKING ID&nbsp;&nbsp;#${req.body.bookingId}</h2>
                                                                                        <p><br></p>
                                                                                        <p style="line-height: 150%; color: #f26823; font-size: 16px;"><strong>Date of Reservation&nbsp;&nbsp;${req.body.bookingDate}</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text es-m-txt-c es-p20t" bgcolor="#ffffff">
                                                                                        <p style="color: #f26823; font-size: 18px;"><strong>Order Summary</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p10b es-p20r es-p20l esdev-adapt-off" align="left">
                                                        <table width="560" cellpadding="0" cellspacing="0" class="esdev-mso-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esdev-mso-td" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="161" class="esd-container-frame" align="left">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" class="esd-block-image es-m-p5" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://i.postimg.cc/KjpV8Jgw/genting-Awanasky-Way-Img-Six.jpg" alt style="display: block;" width="115"></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                    <td width="20"></td>
                                                                    <td class="esdev-mso-td" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td width="379" align="left" class="esd-container-frame">
                                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" class="esd-block-text">
                                                                                                        <p style="color: #f26823;"><br></p>
                                                                                                        <h3 style="font-size: 14px; color: #f26823;"><strong>${req.body.bookingTitle}</strong></h3>
                                                                                                        <p style="font-size: 14px; color: #f26823;"><br></p>
                                                                                                        ${req.body.prefrence && `<p style="font-size: 14px; color: #f26823;"><strong>${req.body.prefrence}</strong></p>`}
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text">
                                                                                        <p style="font-size: 22px; color: #f26823;"><strong>Payment Summary</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                ${req.body.adultCount ? `
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p style="font-size: 16px; color: #f26823;"><em><strong>&nbsp; &nbsp; &nbsp; &nbsp;Adult X ${req.body.adultCount} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;MYR ${req.body.adultTotal}</strong></em></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    
                                                    ` : ""

                                                }

                                                ${req.body.childCount ? `
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p style="font-size: 16px; color: #f26823;"><em><strong>&nbsp; &nbsp; &nbsp; &nbsp;Child X ${req.body.childCount} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;MYR ${req.body.childTotal}</strong></em></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    
                                                    ` : ""

                                                }

                                                ${req.body.seniorCount ? `
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p style="font-size: 16px; color: #f26823;"><em><strong>&nbsp; &nbsp; &nbsp; &nbsp;Senior X ${req.body.seniorCount} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;MYR ${req.body.seniorTotal}</strong></em></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    
                                                    ` : ""
                                                }

                                                ${req.body.generalCount ? `
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p style="font-size: 16px; color: #f26823;"><em><strong>&nbsp; &nbsp; &nbsp; &nbsp;Senior X ${req.body.generalCount} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;MYR ${req.body.generalTotal}</strong></em></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                            <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    
                                                    ` : ""

                                                }
                                                
                                                <tr>
                                                    <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-text">
                                                                                        <p style="font-size: 16px; color: #000000;"><strong>Total Amount&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MYR ${req.body.totalAmount}</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="esd-structure es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text" bgcolor="#ffffff">
                                                                                        <p style="color: #666666; line-height: 100%;"><strong>Customer Details</strong></p>
                                                                                        <p style="color: #666666; line-height: 100%;"><br></p>
                                                                                        <p style="color: #666666; line-height: 100%;"><strong>Name: ${req.body.name}</strong></p>
                                                                                        <p style="color: #666666; line-height: 100%;"><br><strong>Email: ${req.body.email}</strong></p>
                                                                                        <p style="color: #666666; line-height: 100%;"><br><strong>Phone Number: ${req.body.mobileNumber}</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-spacer es-p5t es-p5b" style="font-size:0">
                                                                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td style="border-bottom: 1px solid #a0937d; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p20t es-p25b es-p20r es-p20l" bgcolor="#ffffff">
                                                                                        <p style="font-size: 14px; color: #000000; line-height: 200%;">We're delighted to confirm your booking! Your official e-ticket is on its way to your email shortly. In case you don't receive it, please don't hesitate to get in touch with us.</p>
                                                                                        <p style="font-size: 14px; color: #000000; line-height: 200%;">Contact details:<br>Tel: +60 17-201 8194<br>Email: support@malaysia-experience.com</p>
                                                                                        <p style="font-size: 14px; color: #000000; line-height: 200%;">Thank you for choosing Malaysia Experience. We look forward to serving you.</p>
                                                                                        <p style="font-size: 14px; color: #000000; line-height: 200%;">Best regards,<br>Support Team<br>Malaysia Experience</p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text" bgcolor="#ffffff">
                                                                                        <p><br></p>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table cellpadding="0" cellspacing="0" class="es-footer esd-footer-popover" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center" esd-custom-block-id="343277" bgcolor="#ffffff" style="background-color: #ffffff;">
                                        <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff;" bgcolor="#ffffff">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="560" class="esd-container-frame" align="left">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-social es-p10t es-p10b" style="font-size:0">
                                                                                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td align="center" valign="top" class="es-p20r" esd-tmp-icon-type="facebook"><a target="_blank" href="https://viewstripo.email"><img title="Facebook" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p20r" esd-tmp-icon-type="twitter"><a target="_blank" href="https://viewstripo.email"><img title="Twitter" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png" alt="Tw" width="32"></a></td>
                                                                                                    <td align="center" valign="top" class="es-p20r" esd-tmp-icon-type="instagram"><a target="_blank" href="https://viewstripo.email"><img title="Instagram" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png" alt="Inst" width="32"></a></td>
                                                                                                    <td align="center" valign="top" esd-tmp-icon-type="youtube"><a target="_blank" href="https://viewstripo.email"><img title="Youtube" src="https://tlr.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png" alt="Yt" width="32"></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
            `
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {

                console.log(info.response, " Email sent");
            }
        })
        res.status(StatusCodes.CREATED).json({ message: "Your Order is Booked Successfully"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }

}


export const getAllBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find().sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ allBookings: booking })
    } catch (error) {
        next(error)
    }
}

export const getTotalBookingCount = async (req, res, next) => {
    try {
        const booking = await Booking.countDocuments()
        res.status(StatusCodes.OK).json({ totalCount: booking })
    } catch (error) {
        next(error)
    }
}

export const getConfirmedBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'confirmed' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ confirmedBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const getPendingBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'pending' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ pendingBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const getCompletedBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'completed' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ completedBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const getCancelledBooking = async (req, res, next) => {
    try {
        const booking = await Booking.find({ bookingStatus: 'cancelled' }).sort({ createdAt: -1 })
        res.status(StatusCodes.OK).json({ cancelledBookings: booking })
    } catch (error) {
        next(error)
    }
}


export const updateBooking = async (req, res, next) => {
    const { bookingStatus } = req.body
    const { id } = req.params
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, { bookingStatus })
        res.status(200).json({ message: "Booking Updated Successfully" })
    } catch (error) {
        next(error)
    }
}