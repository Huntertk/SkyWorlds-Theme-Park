import React from 'react'
import '../styles/homeVisitors.scss'

const HomeVisitorTips = () => {
  return (
    <section className="homeVisitorTipsMainContainer">
        <h1>Visitor Tips & Guidelines</h1>
        <ul>
            <li><span>Guest Service : </span> &nbsp;For ticket assistance, information, and reporting lost items, utilize the Guest Services available at Studio Plaza and SkyAvenue Gateway.</li>
            <li>
              <span>
                Cashless Payment : 
              </span>
             &nbsp;Genting SkyWorlds operates on a cashless payment system. In addition to credit/debit cards and QR payments, the theme park accepts GeMCash and Genting Points.
            </li>
            <li>
              <span>
                Book Online :  
              </span>
              &nbsp;Enjoy a hassle-free ticket booking experience by securing your tickets online
            </li>
            <li>
              <span>
                Readmission : 
              </span>
              &nbsp;Guests who register with biometric details at the turnstile have the option to re-enter the park within the validity period of their ticket.
            </li>
        </ul>
    </section>
  )
}

export default HomeVisitorTips