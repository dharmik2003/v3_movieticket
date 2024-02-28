
// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div >
//       <div className="site-page" >
//         <div className="movie-screen">
//         <h2>Movie Screen</h2>
//         </div>
//         <div className="seat-map">
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(20)].map((_, colIndex) => {
//               const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//               console.log("seat------",seat)
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//         </div>
//       </div>
//       <div>
            

//       </div>
//     </div>
//   );
// };

// export default SitePage;



// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
//   const [totalPrice, setTotalPrice] = useState<number>(0); // State to store the total price

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   // Calculate total price based on the number of selected seats and price per seat
//   const calculateTotalPrice = () => {
//     const pricePerSeat = 50; // Price per seat (50 Rp)
//     const totalPrice = selectedSeats.length * pricePerSeat;
//     return totalPrice;
//   };

//   // Update total price whenever selected seats change
//   React.useEffect(() => {
//     const newTotalPrice = calculateTotalPrice();
//     setTotalPrice(newTotalPrice);
//   }, [selectedSeats]);

//   return (
//     <div>
//       <div className="site-page">
//         <div className="movie-screen">
//           <h2>Movie Screen</h2>
//         </div>
//         <div className="seat-map">
//           {[...Array(8)].map((_, rowIndex) => (
//             <div key={rowIndex} className="seat-row">
//               {/* Display seat numbers in a row */}
//               <span className="seat-number">Row {String.fromCharCode(65 + rowIndex)}</span>
//               {[...Array(20)].map((_, colIndex) => {
//                 const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//                 const isSelected = isSeatSelected(seat);
//                 return (
//                   <div
//                     key={colIndex}
//                     className={`seat ${isSelected ? 'selected' : ''}`}
//                     onClick={() => handleSeatClick(seat)}
//                   >
//                     {seat}
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className='sitepage-layout-text'>
//              <h2>Layar Bioskop Disini</h2>
//       </div>
//       <div className='totalprice-button-section'>
//         <div>
//               <div>Total </div>
//               <div> {totalPrice}</div>
//         </div>
//         <div>
//               <div>Total Sets </div>
//               <div> {totalPrice}</div>

//         </div>
//         <div>

//         </div>
//         <div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SitePage;



import React, { useState } from 'react';
import './SitePage.css';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { selectTime, setTheaterData, setdimension, setsite, settotal } from '../Redux/Slice/MovieBookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TicketEntry } from '../Redux/Slice/MyTicketSlice';
import {toast} from 'react-hot-toast'

const SitePage: React.FC = () => {

  const {selecteddimension,selectedTime,selectedDate,selectedTheater,selectedtotal,selectsite, selectedSeat} =useSelector((state : any)=>state.movieBooking)
  console.log("datas from moviesbooking slice",selecteddimension,selectedTime,selectedDate,selectedTheater,selectedtotal,selectsite, selectedSeat)
  
  const {tickets} =useSelector((state:any)=>state.myTicket)
  console.log("ticket",tickets)

  const ticketDetails: [string, string, string][] = [];

  // Loop through each ticket and extract required details
  tickets.forEach((ticket: TicketEntry) => {
    const details:any = [
      ticket.time,
      ticket.dimension.dimensionCategory,
      ticket.date,
    ];
    ticketDetails.push(details);
  });

  console.log('Ticket Details:', ticketDetails);


  const dispatch =useDispatch();


  //url value find
  const location = useLocation();
  const url=location.pathname;
  console.log(location.pathname)
  


  
  // const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0)

 

const handleSeatClick = (seat: string) => {
  if (selectsite.includes(seat)) {
    // If the seat is already selected, remove it from the selected seats
    const updatedSeats = selectsite.filter((s: string) => s !== seat);
    dispatch(setsite(updatedSeats));
  } else if (selectsite.length < 5) {
    // If the seat is not selected and the maximum number of seats is not reached, add it to the selected seats
    const updatedSeats = [...selectsite, seat];
    dispatch(setsite(updatedSeats));
  } else {
    // If the maximum number of seats is reached, remove the first selected seat and add the new one
    const updatedSeats = [...selectsite.slice(1), seat];
    dispatch(setsite(updatedSeats));
  }
};


// on submit button press

const navigator=useNavigate()
const checksiteseleted=()=>{
  if(selectsite.length===0){
    toast.error("Please Select Seat");
    return;
    }else{
      toast.success("The seat has been selected");
      navigator(`${url}/confirm_payment`)
    }
}



const isSeatSelected = (seat: string) => {
    return selectsite.includes(seat);
};



  // Calculate total price based on the number of selected seats and price per seat
  const calculateTotalPrice = () => {
    const pricePerSeat = selecteddimension.price; // Price per seat (50 Rp)
    const totalPrice = selectsite.length * pricePerSeat;
    return totalPrice;
  };

  // Update total price whenever selected seats change
  React.useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  }, [selectsite]);


  dispatch(settotal(totalPrice))
  // dispatch(setsite(selectedSeats))

  /*time selected */
  const [selectedValue, setSelectedValue] = useState<string>('');
   const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
    dispatch(selectTime(selectedOption));
  };

 const options = selecteddimension.time;


  return (
    <div>
      <div >
         <div className='sitepage-heading'>
           <div><h2 className='sitepage-h-h'>SELECT A SEAT</h2></div>
           <div><p className='sitepage-h-p'>Choose the seat you will occupy during the film screening</p></div>
          </div>
      </div> 
      <div className='selecttime'>
        <select value={selectedValue} onChange={handleDropdownChange} className='selectt'>
              {options.map((option: string, index: number) => (
            <option key={index} value={option} className='each-time-box'>{option}</option>
          ))}
        </select>
      </div>

      <div className="site-page">
        {/* <div className="movie-screen">
          <h2>Movie Screen</h2>
        </div> */}

         <div>
      {/* <select value={selectedValue} onChange={handleDropdownChange}>
        {options.map((option:string, index:number) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select> */}
      
    </div>

        <div className="seat-map">
          {[...Array(8)].map((_, rowIndex) => (
            <div key={rowIndex} className="seat-row">
              {[...Array(20)].map((_, colIndex) => {
                const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
                const isSelected = isSeatSelected(seat);
                return (
                  <div
                    key={colIndex}
                    className={`seat ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='sitepage-main-screen'>
          <div className='sitepage-layout-text'>
             <h2>Cinema Screen Here</h2>
          </div>
      </div>

      <div className='totalprice-button-section'>
        <div className='totalprice-sets'>
            <div className='totalprice'>
                <div className='total'><h4 className='marginremove'>Total : </h4></div>
                <div className='totalprice '><h3 className='marginremove'>₹{selectedtotal}</h3></div>
            </div>
           
        </div>
          <div className='seatsection'>
            <div className='total'><h4 className='marginremove'>Total Sets : </h4> </div>
            <div className='totalprice'><h3 className='marginremove'>{selectsite} </h3></div>
        </div>

        <div className='button-book'>
            {/* <div  >Kembali</div> */}
            <div onClick={()=>navigator(-1)} className='but but-1'>Back</div>
            {/* <NavLink to={""} className='but but-2'>CONFIRMATION</NavLink> */}
             {/* <NavLink to={`${url}/confirm_payment`} onClick={checksiteseleted} className='but but-1'>CONFIRMATION</NavLink> */}
             <div onClick={checksiteseleted} className='but but-1'>CONFIRMATION</div>

            {/* <div className='but but-2'>KONFIRMASI</div> */}
        </div>
       

        
      </div>

    </div>
  );
};

export default SitePage;






























// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       // User has already selected 5 seats, unselect the first seat and select the new one
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div className="seat-map">
//       {[...Array(8)].map((_, rowIndex) => (
//         <div key={rowIndex} className="seat-row">
//           {[...Array(20)].map((_, colIndex) => {
//             const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//             const isSelected = isSeatSelected(seat);
//             return (
//               <div
//                 key={colIndex}
//                 className={`seat ${isSelected ? 'selected' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SitePage;


// selected sit display react page------------

// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   return (
//     <div>
//       <div className="seat-map">
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(10)].map((_, colIndex) => {
//               const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//         <div className="gap" />
//         {[...Array(8)].map((_, rowIndex) => (
//           <div key={rowIndex} className="seat-row">
//             {[...Array(10)].map((_, colIndex) => {
//               const seatNumber = colIndex + 11;
//               const seat = `${String.fromCharCode(65 + rowIndex)}${seatNumber}`;
//               const isSelected = isSeatSelected(seat);
//               return (
//                 <div
//                   key={colIndex}
//                   className={`seat ${isSelected ? 'selected' : ''}`}
//                   onClick={() => handleSeatClick(seat)}
//                 >
//                   {seat}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//       <div >
//         <h2>Selected Seats:</h2>
//         <ul>
//           {selectedSeats.map(seat => (
//             <li key={seat}>{seat}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SitePage;



//selected site display in console ----------------

// import React, { useState } from 'react';
// import './SitePage.css';

// const SitePage: React.FC = () => {
//   const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

//   const handleSeatClick = (seat: string) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     } else if (selectedSeats.length < 5) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       const newSelectedSeats = [...selectedSeats.slice(1), seat];
//       setSelectedSeats(newSelectedSeats);
//     }
//   };

//   const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

//   // Output selected seats to the console
//   console.log('Selected Seats:', selectedSeats);

//   return (
//     <div className="seat-map">
//       {[...Array(8)].map((_, rowIndex) => (
//         <div key={rowIndex} className="seat-row">
//           {[...Array(20)].map((_, colIndex) => {
//             const seat = `${String.fromCharCode(65 + rowIndex)}${colIndex + 1}`;
//             const isSelected = isSeatSelected(seat);
//             return (
//               <div
//                 key={colIndex}
//                 className={`seat ${isSelected ? 'selected' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat}
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SitePage;

