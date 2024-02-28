// import React from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from '../components/Redux/store/store'
// import { useNavigate } from 'react-router-dom'

// const MymovieHome = () => {

    // const tickets = useSelector((state:RootState)=>state.myTicket.tickets)
//     console.log("tickets",tickets);

//   const navigate = useNavigate();

//     return (
//         <div>
//             <h1 onClick={()=>navigate( '/')}>Home</h1>
//              <h1>My Movie Tickets</h1>
//               {tickets.map((ticket:any, index:number) => (
//                 <div key={index}>
//                     <p>Date: {ticket.date}</p>
//                     <p>Dimension: {ticket.dimension.dimensionCategory}</p>
//                     <p>Time: {ticket.time}</p>
//                     <p>Discount: {ticket.discount}</p>
//                     <p>Final Amount: {ticket.finalAmount}</p>
//                     <p>Movie: {ticket.movie.name}</p>
//                     <p>Theater: {ticket.theater.name}</p>
//                     <p>Total Price: {ticket.totalPrice}</p>
//                     <p>Seats: {ticket.seats.join(', ')}</p>
//                 </div>
                
//         ))}
//         <hr/>

//         </div>
//     )
// }

// export default MymovieHome

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../components/Redux/store/store';
import { useSelector } from 'react-redux';
import './MymovieHome.css'
import Navbar from '../components/Home/Navbar';
import { SlLocationPin } from "react-icons/sl";

const MymovieHome = () => {
    const navigate = useNavigate();
    const tickets = useSelector((state:RootState)=>state.myTicket.tickets)
    console.log("tickets",tickets);

  return (
       
    <div >
        {/* <h3 onClick={()=>navigate( '/')}>Home</h3> */}
        <Navbar/>
        <div className='mamovie-main-div'>
            <div className='mymovies'>
            <h1 className='mytitle'>My Ticket</h1>
        <p className='moviedesc'>List of tickets and transactions you have made</p>
        <div>
            {tickets.map((ticket:any, index:number) => (
                <div key={index}>
                    <Link to={`/MymovieHome/${ticket.randomnumber}`}>
                    <div  className='main-details'>
                        <div className='my-div-img'>
                            <img src={ticket.movie.image} className='my-img'/>
                        </div>
                        <div className='moviedetails-right'>
                            <h2 className='blackcolor moviename '>{ticket.movie.name}</h2>
                            <p  className='blackcolor textsize'><span>{ticket.date}</span>    |  <span className='textsize'>{ticket.time}</span></p>                   
                            <p><SlLocationPin className='lightcolor textsize'/> <span className='lightcolor textsize'>{ticket.theater.name}</span>  ( <span  className='blackcolor textsize'>{ticket.dimension.dimensionCategory}</span> )</p>
                            {/* <p  className='blackcolor'>Total Price: {ticket.totalPrice}</p> */}
                        </div>
                        {/* <p>Seats: {ticket.seats.join(', ')}</p> */}
                    </div>
                    </Link>
                    {index !== tickets.length - 1 && <hr />}
   
                </div>
                ))}
        </div>
        <hr/>
        </div>
        </div>
    </div>
  )
}

export default MymovieHome

