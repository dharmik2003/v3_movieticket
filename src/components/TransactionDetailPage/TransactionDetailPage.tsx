// import React from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import './MymovieHome.css'
// import { RootState } from '../Redux/store/store';

// const TransactionDetailPage = () => {
//     const navigate = useNavigate();
//     const tickets = useSelector((state:RootState)=>state.myTicket.tickets)
//     console.log("tickets",tickets);

//   return (
       
//     <div >
//         <h3 onClick={()=>navigate( '/')}>Home</h3>
//         <div className='mymovies'>
//             <h1>My Ticket</h1>
//         <p>List of tickets and transactions you have made</p>
//         <div >
//             {tickets.map((ticket:any, index:number) => (
//                 <div key={index} className='main-details'>
//                     <div className='my-div-img'>
//                         <img src={ticket.movie.image} className='my-img'/>
//                     </div>
//                     <div>
//                         <h2>Movie: {ticket.movie.name}</h2>
//                         <p><span>{ticket.date}</span>    <span>{ticket.time}</span></p>                   
//                         <p><span>{ticket.theater.name}</span>(<span>{ticket.dimension.dimensionCategory}</span>)</p>
//                         <p>Total Price: {ticket.totalPrice}</p>
//                     </div>
//                     {/* <p>Seats: {ticket.seats.join(', ')}</p> */}
//                 </div>
//                 ))}
//         </div>
//         <hr/>
//         </div>
//     </div>
//   )
// }

// export default TransactionDetailPage
import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import './TransactionDetailPage.css'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../Redux/store/store';
import BookingPDFDocument from './../Pdf/BookingPDFDocument'
import { PDFDownloadLink } from '@react-pdf/renderer';

const TransactionDetailPage = () => {
    const tickets = useSelector((state:RootState)=>state.myTicket.tickets)
    console.log("tickets",tickets);
    
  //  const {tickets} = useSelector((state: any) => state.myTicket);
  //  console.log("ticketsssss",tickets);
    const [data, setData] = useState<any>();
    const location = useLocation();
    console.log("location",location)
    const parthname = location.pathname.split("/").at(-1);
    console.log("randomnumber",parthname);



    useEffect(() => {
        console.log("useEffect inside***********",tickets);
        // const filteredTicket = tickets.filter((ticket: any) => ticket.randomnumber === parthname);
       const filteredTicket = tickets.filter((ticket: any) => ticket.randomnumber== parthname);

        console.log("filteredTicket----",filteredTicket)
        // setData(filteredTicket[0]);
        if (filteredTicket) {
            setData(filteredTicket[0]);
        }
    },  [tickets, parthname])
    console.log("after useEffect")

    const length = data?.seats ? data.seats.length : 0;


    // pdf generate code

const handleDownloadPDF = () => {
    const pdfData = BookingPDFDocument(data);
    console.log('PDF generated:', pdfData);
  };






  return (
    <div>
       <div>
            {/* <Navbar/> */}
              <div className='trx-main'>
                  <div  className='trx-main-con'>
                   <div className='trx-head'>
                Transaction Details
                  </div>
                  {/* MAIN CONTENT  */}
                  <div className='trx-first'>
                      <div className='trx-up'>
                          <p className='movie-hrading'>{data?.movie.name}</p>
                          <div className='trx-divide-three-part'>
                              <div className='trx-part1'>
                                  <div className='flex flex-col my-4'>
                                      <p className='trx-small-text'>Location</p>
                                      <p className='trx-ans-text'>{data?.theater.name}</p>
                                  </div>
                                  <div className='trx-date-time'>
                                      <div>
                                          <p className='trx-small-text'>Date</p>
                                          <p className='trx-ans-text'>{data?.date}</p>
                                      </div>
                                      <div>
                                          <p className='trx-small-text'>Time</p>
                                          <p className='trx-ans-text'>{data?.time}</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='trx-div-hr'>
                                  <hr className='trx-hr'/>
                              </div>
                              <div className='trx-part-2'>
                                  <div className='my-4'>
                                      <p className='trx-small-text'>Class</p>
                                      <p className='trx-ans-text'>{data?.dimension.dimensionCategory}</p>
                                  </div>
                                  <div>
                                      <p className='trx-small-text'>Badge</p>
                                      <p className='trx-ans-text'>Studio - 1</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='trx-second'>
                          <div className='trx-second-inside'>
                              <div className='trx-second-leftsidepart'>
                                  <div className='paddingremove'>Booking Token  </div>
                                  <div className=' colors texts'>Seats </div>
                              </div>
                              <div className='trx-second-leftsidepart '>
                                  <div className='font-medium text-lg'>{data?.randomnumber}</div>
                                  <div className='seats-div'>
                                      {
                                          data?.seats.map((chair:any) => (
                                              <div className='siteeach colors texts'>{chair}</div>
                                          ))
                                      }
                                  </div>
                              </div>
                          </div>
                          {/* <div className='trx-download-div'>
                              <div className='border-2 rounded-lg border-black  p-4'>
                                  <img src={`https://github.com/dharmik2003/poster_movie/blob/main/Payment/Download%20Icon.png?raw=true`}/>
                              </div>
                          </div> */}
                          <div className='trx-download-div'>
                                <PDFDownloadLink document={<BookingPDFDocument data={data} />} fileName="movie_booking.pdf">
                                {({ blob, url, loading, error }) =>
                                    loading ? 'Generating PDF...' :  <img src={`https://github.com/dharmik2003/poster_movie/blob/main/Payment/Download%20Icon.png?raw=true` }className="down-img"/>
                                }
                                </PDFDownloadLink>
                            </div>
                      </div>
                  </div>
                  {/* BILL SECTION  */}
                  <div className='bill-section'>
                      <h3 className='trx-details-part'>Purchase Details</h3>
                      <div className='font-normal text-lg my-4'>
                          <div className='trx-details'>
                              <div>
                                  <p className='trx-head-text'>REGULAR SEATS</p>
                                  <p className='trx-head-text'>SERVICE FEES</p>
                                  <p className='trx-head-text'>Discount</p>
                              </div>
                              <div className='trx-details-right'>
                                  <p className='marginremove'>  <span className='trx-proper'>{data?.dimension.price}</span> x <span className='boldtext trx-proper'>{length}</span> </p>
                                  <p className='marginremove'> <span className='trx-proper'>3</span> x <span className='boldtext trx-proper'>{length}</span></p>
                                 <p className='marginremove'><span className='trx-proper boldtext'>-{data?.discount ? data.discount : 0}</span></p>
                              </div>
                          </div>
                          <hr className='w-full my-4'/>
                          <div className='trx-amounts'>
                              <div  className='trx-head-text'>Final Amount</div>
                              <div><span  className='boldtext'>{data?.finalAmount} RS</span></div>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
              <hr/>
            {/* <Footer/> */}
        </div>
    </div>
  )
}

export default TransactionDetailPage
function generatePDFData(data: any) {
    throw new Error('Function not implemented.');
}

