// import React from 'react'

// const ConfirmPayment = () => {
//   return (
//     <div>
//         <div className="pay-heading">
//             <div>KONFIRMASI PEMBAYARAN</div>
//             <div>Konfirmasi pembayaran dari kursi yang anda pesan</div>
//         </div>
//         <div className='pay-details'>
//             <div className="pay-left-part">

//         </div>
//         <div className="pay-right-part">
            
//         </div>
//         </div>
//     </div>
//   )
// }

// export default ConfirmPayment


import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Home/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setdiscount,resetsetdiscount, setfinalprice, resetMovieBooking } from '../Redux/Slice/MovieBookingSlice';
import { addTicket, reset } from '../Redux/Slice/MyTicketSlice';
import './ConfirmPayment.css'
import { IoArrowBack } from "react-icons/io5";

const Con_Pay_HomePage = () => {

  // url value find
  const location = useLocation();
  const url=location.pathname;
  console.log(location.pathname)

  //date fetch from slice
  const {selectedMovie, selectedDate, selecteddimension, selectedTime, selectsite,selectedtotal,selectdiscount ,selectfinalprice} = useSelector((state: any) => state.movieBooking);
  console.log("seletedmovie",selectedMovie)
  console.log("price",selectedtotal)
  const length:number=selectsite.length
  console.log("length:number",length)
  console.log("selectdiscount:", selectdiscount);



  // promocode & Discount
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState<string>('');
   const [discount, setDiscount] = useState<number | null>(null);
  const [showFinalPrice, setShowFinalPrice] = useState(false);
  const applyPromo = () => {
      const upperCasePromoCode = promoCode.toUpperCase(); 

      let appliedDiscount: number | null = null;
      switch (upperCasePromoCode) {
        case 'MOVIE100':
          appliedDiscount = 100;
          break;
        case 'MOVIE200':
          appliedDiscount = 200;
          break;
        default:
          alert("Invalid promo code!")
          console.log('Invalid promo code!');
          break;
      }

      dispatch(setdiscount(appliedDiscount));
      setDiscount(appliedDiscount);     
  };

  //Tax value defined



   let firstPrice = selectedtotal + (3 * length) - (selectdiscount !== null ? selectdiscount : 0);
   console.log(firstPrice);

   if(firstPrice<0){ 
      dispatch(setfinalprice(0))
   }
   else{
     dispatch(setfinalprice(firstPrice))
   }

   //back page go

   const navigator =useNavigate()
   const gotobackpage=()=>{
     navigator(-1)
   }

  //Discount calculate

  
  // let serivetax:number=3;
  // console.log("length",serivetax*length);
 
  // let finalPrice;
  // let finalPrice1;
  
  // console.log("before if ")
  // if (selectdiscount !== null && selectdiscount >= 100) {
  //     console.log("before if ")
  //   finalPrice = selectedtotal + (serivetax * length) - selectdiscount;
  //   console.log("finalPrice",finalPrice)
  //     console.log("before if ")
  //   dispatch(setfinalprice(finalPrice));    

  // } else if (selectdiscount === null) {
  //    finalPrice1= selectedtotal + serivetax * length;
  //   console.log("finalPrice1",finalPrice1)
  //   dispatch(setfinalprice(finalPrice1));
  //     console.log("before if ")
  // }
  //   console.log("before if ")

  //   console.log("selectdiscount:", selectdiscount);



// useEffect(() => {
//   let finalPrice;

//   if (selectdiscount !== null && selectdiscount >= 100) {
//     finalPrice = selectedtotal + (serivetax * length) - selectdiscount;
//     dispatch(setfinalprice(finalPrice)); 
//   } else if (selectdiscount === null) {
//     finalPrice = selectedtotal + (serivetax * length);
//     console.log("finalPrice",finalPrice);
//     console.log("selectedtotal",selectedtotal);
//     console.log("serivetax*length",serivetax*length);
//     dispatch(setfinalprice(finalPrice)); 
//   }

//   // setShowFinalPrice(finalPrice !== undefined && finalPrice !== null);
// }, [selectdiscount, selectedtotal, serivetax, length]);



// const removePromoCode = () => {
//   // Reset the discount value when promo code is removed
//   dispatch(resetsetdiscount());
// };

//  const {selectedMovie,selectedTheater,selectedDate,selectedTime, selecteddimension,selectedtotal, selectsite,selectdiscount ,selectfinalprice} = useSelector((state: any) => state.movieBooking);


// const clickHandler =() => {
//   if (selectedMovie && selectedDate && selectedTime && selecteddimension  && selectsite  ) 
//     {
//         dispatch(addTicket({
//           movie: selectedMovie,
//           // theater: selectedTheater,
//           date:selectedDate,
//           time:selectedTime,
//           dimension:selecteddimension,
//           // totalPrice:selectedtotal,
//           seats:selectsite,
//           // discount:selectdiscount,
//           // finalAmount:selectfinalprice,
//         }));
//         dispatch(resetMovieBooking());
//     }
//     else{
//       console.log(selectedMovie)
//       console.log(selectedDate)
//       console.log(selectedTime)
//       console.log(selecteddimension)
//       console.log(selectedtotal)
//       console.log(selectsite)
//       console.log(selectdiscount)
//       console.log(selectfinalprice)
//     }
// }

   

  return (
    <div>
      <div>
         <div><h3 className='backfunction' onClick={gotobackpage}><IoArrowBack/>Back</h3></div>
            {/* <h2>PAYMENT CONFIRMATION</h2>
            <small>Confirm payment for the seats you ordered</small> */}
            <div className='confirm-main-con'>
                <div className='confirm-left'>
                    <h3 className='confirmtitle'>Schedule Details</h3>

                    <p className='alltitle'>Movie Title</p>
                    <h4 className='allans'>{selectedMovie.name}</h4>
                    <hr className='hrcss'/>
                    <p className='alltitle'>Date</p>
                    <h4 className='allans'>{selectedDate}</h4>
                    <hr className='hrcss'/>
                    <div className='datetimepart'>
                      <div>
                        <p className='alltitle mar'>Class</p>
                        <h4 className='allans mar'>{selecteddimension.dimensionCategory}</h4>
                      </div>
                     <div className='classtime'>
                       <p className='alltitle mar'>Time</p>
                      <h4 className='allans mar'>{selectedTime}</h4>
                     </div>
                    </div>
                    <hr className='hrcss'/>
                    <p className='alltitle'>Tickets({selectsite.length})</p>
                    <h4 className='allans'>{selectsite.join(', ')}</h4>
                    <hr className='hrcss'/>

                </div>
                <div className='confirm-left rightsidepart'>
                  <h1 className='confirmtitle'>Order Summary</h1>
                  <h4 className='margremove'>Transaction Details</h4>
                  <div className='ticketprice '>
                    <p className='mar alltitle'>REGULAR SEAT</p>
                    <h3 className='mar'>₹{selecteddimension.price} <span>X</span> {length}</h3>
                  </div>
                  <div className='ticketprice' >
                    <p className='alltitle mar'>SERVICE FEES</p>
                    <h3 className='mar'>₹{3} <span>X</span> {length}</h3>
                  </div>
                  <hr className='hrcss center'/>
                  

                  <div className='rightsidesecond-part'>
                        <p className='alltitle'>Promos & Vouchers</p>
                       
                        {selectdiscount ? (
                            // If selectdiscount has a value, display its details in a text field
                            <input
                                type='text'
                                value={selectdiscount}
                                disabled
                                className='inputfield'
                            />
                        ) : (
                            // If selectdiscount is null or undefined, allow the user to enter a new promo code
                            <input
                                type='text'
                                placeholder='Enter Promos Code'
                                value={promoCode}
                                className='inputfield'
                                onChange={(e) => setPromoCode(e.target.value)}
                            />
                        )}
                        {/* <button onClick={applyPromo} className='applybut'>Apply</button> */}
                            {selectdiscount !== null && selectdiscount > 0 ? (
                                <button onClick={() => {dispatch(resetsetdiscount())} }  className='applybut'>Remove Promo</button>
                              ) : (
                                <button onClick={applyPromo} className='applybut'>Apply</button>
                            )}
                            {selectdiscount !== null && selectdiscount > 0 && (
                                <div>
                                    <p className='applydiscount'>Applied {selectdiscount}rs discount!</p>
                                    <div className='ticketprice hightset'>
                                        <p>Discount</p>
                                        <h3>₹ {selectdiscount}</h3>
                                    </div>
                                </div>
                            )}

                            
                            
                        </div>
                        <hr className='hrcss center'/>

                        <div className='lastpayment-div ticketprice'>
                            <h2 className='totalpay'>Total Pay </h2>
                            <h3>₹ {selectfinalprice}</h3>
                        </div>
                        
                             <div className='but-main-con'>
                                <div className='butnowbutton'>
                                  <NavLink to={`${url}/PaymentPage`} className="buynow" >BUY TICKETS</NavLink>
                              </div>
                             </div>
                      </div>


                {/* <div onClick={() => dispatch(reset())}>
                  RESET MYTICKET
                </div> */}

                              

                

               
                {/* <NavLink to={`${url}/PaymentPage`} onClick={clickHandler}>BUY TICKETS</NavLink> */}
            </div>
        </div>
    </div>
  );
};

export default Con_Pay_HomePage;
