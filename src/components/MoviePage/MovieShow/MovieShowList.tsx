// // import React from 'react';
// // import movieShows from '../../Data/MovieShow';
// // import './MovieShowList.css'
// // import But2D from './Button/But2D';
// // import But3D from './Button/But3D';




// // const MovieShowList: React.FC = () => {
// //   return (
// //     <div className='moviesshow-card'>

// //         <div className='movie-title-main'>

// //             <div className='img'><img src='./img/Star.png' width={32} height={32}/></div>
// //             <div><h2>Movie Showtimes</h2></div>
// //             <div><But2D/></div>
// //             <div><But3D/></div>

// //         </div>
      
// //       {movieShows.map((show) => (
// //         <div key={show.id}>
// //           <h3>{show.tokisname}</h3>
// //           <p>
// //             Type: {
// //           show.type =="2D"  ? <But2D/>:<But3D/>}<br/>
// //           }</p>
// //           <p>Show Times:</p>
// //           <ul>
// //             {show.showTimes.map((time, index) => (
// //               <li key={index}>{time}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MovieShowList;


// import React from 'react';
// import movieShows from '../../Data/MovieShow';
// import './MovieShowList.css';
// import But2D from './Button/But2D';
// import But3D from './Button/But3D';

// const MovieShowList: React.FC = () => {
//   return (
//     <div className='moviesshow-card'>

//       <div className='movie-title-main'>

//         <div className='img'><img src='./img/Star.png' width={32} height={32}/></div>
//         <div className='movies-show-heading'><h2>Movie Shows</h2></div>
//         <div className='button-d'><But2D/></div>
//         <div  className='button-d'><But3D/></div>

//       </div>
      
//       {movieShows.map((show) => (
//         <div key={show.id}>
//             <div className='movie-title'>
//                     <h3 className='tokisname'>{show.tokisname}</h3>
//                     <p>
//                         {
//                         show.type === "2D" ? <But2D/> : <But3D/>
//                         }
//                     </p>

//             </div>


//           <p className='showtims'>Show Times :</p>
//           <div className='time-slot'>

//             <div >
//             {show.showTimes.map((time, index) => (
//               <div key={index}>{time}</div>
//             ))}
//           </div>

//           </div>

//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieShowList;


// import React from 'react';
// import movieShows from '../../Data/MovieShow';
// import './MovieShowList.css'
// import But2D from './Button/But2D';
// import But3D from './Button/But3D';




// const MovieShowList: React.FC = () => {
//   return (
//     <div className='moviesshow-card'>

//         <div className='movie-title-main'>

//             <div className='img'><img src='./img/Star.png' width={32} height={32}/></div>
//             <div><h2>Movie Showtimes</h2></div>
//             <div><But2D/></div>
//             <div><But3D/></div>

//         </div>
      
//       {movieShows.map((show) => (
//         <div key={show.id}>
//           <h3>{show.tokisname}</h3>
//           <p>
//             Type: {
//           show.type =="2D"  ? <But2D/>:<But3D/>}<br/>
//           }</p>
//           <p>Show Times:</p>
//           <ul>
//             {show.showTimes.map((time, index) => (
//               <li key={index}>{time}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieShowList;







import React, { useEffect, useState } from 'react';
import './MovieShowList.css';
import data, {CityData,} from './../../Data/moviestatevise'; 
import But2D from './Button/But2D';
import But3D from './Button/But3D';
import But4D from './Button/But4D';


const MovieShowList: React.FC = () => {
//   const dat:CityData[]=data;


//   const [selectedCity, setSelectedCity] = useState<string>('');
//   const [theaters, setTheaters] = useState<any[]>([]);

//   const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const city = event.target.value;
//     setSelectedCity(city);

//     const cityData = data.find((cityData) => cityData.cityname === city);
//     if (cityData) {
//       setTheaters([...cityData.prime, ...cityData.good, ...cityData.best]);
//     } else {
//       setTheaters([]);
//     }
//   };


// part - 2

  // const [selectedCity, setSelectedCity] = useState<string>('');
  // const [theaters, setTheaters] = useState<any[]>([]);

  // useEffect(() => {
  //   const defaultCityId = 1;
  //   const defaultCityData = data.find((cityData) => cityData.id === defaultCityId);
  //   if (defaultCityData) {
  //     setTheaters([...defaultCityData.prime, ...defaultCityData.good, ...defaultCityData.best]);
  //   }
  // }, []); // Run this effect only once when the component mounts

  // const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const city = event.target.value;
  //   setSelectedCity(city);

  //   const cityData = data.find((cityData) => cityData.cityname === city);
  //   if (cityData) {
  //     setTheaters([...cityData.prime, ...cityData.good, ...cityData.best]);
  //   } else {
  //     setTheaters([]);
  //   }
  // };


 

  return (
   <div>
       {/* <div>
        <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {data.map((cityData, index) => (
          <option key={index} value={cityData.cityname}>
            {cityData.cityname}
          </option>
        ))}
      </select>

      <div>
        <h2>{selectedCity ? selectedCity : 'Surat'}</h2>
        {theaters.map((theater, index) => (
          <div key={index} className="theater">
           <div>
             <h4>{theater.theatername}</h4>
            </div>
            <p>{theater.time}</p>
            <p>{theater.ticketprice} RS</p>
          </div>
        ))}
      </div>
    </div> */}

    

    
     <div>

      

      

      
  
   {/* <div>
  {detail1.map((item, index) => (
    <div key={index}>{item.great.feedback}</div>
  ))}
</div> */}





{/* // static data code -------------------------------------------------------------*/}


{/* <div className='movieshow-container'>

      <div className='movie-title-main'>

          <div className='movie-title-main heading-right '>
              <div className='img'><img src='./img/Star.png' width={32} height={32}/></div>
              <div className='movies-show-heading'><h2>GRAND INDONESIA CGV</h2></div>
          </div>
       
        <div className='button-d'><But2D/></div>

      </div>

      <div className='heading-after-des '>JL. MH. TAHMRIN NO.1</div>
      

      
      <div>

          <div className='slot-main'>
              <div className='slot-left-part'>
                <div className='slot_description'>REGULAR 2D</div>
                <div className='time_main-con'>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                </div>
              </div>

              <div  className='slot-right-part'>
                Rp. 45.000 - 50.000
              </div>
          </div>

          <div className='slot-main'>
              <div className='slot-left-part'>
                <div className='slot_description'>GOLD CLASS 2D</div>
                <div className='time_main-con'>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                </div>
              </div>

              <div  className='slot-right-part'>
                Rp. 100.000
              </div>
          </div>

          <div className='slot-main'>
              <div className='slot-left-part'>
                <div className='slot_description'>VELVET 2D</div>
                <div className='time_main-con'>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                </div>
              </div>

              <div  className='slot-right-part'>
                Rp. 100.000
              </div>
          </div>

      </div>


  </div> */}



{/* second  */}

      {/* <div className='movie-title-main'>

          <div className='movie-title-main heading-right '>
              <div className='img'><img src='./img/Star.png' width={32} height={32}/></div>
              <div className='movies-show-heading'><h2>MANGGA DUA SQUARE CINÉPOLIS</h2></div>
          </div>
       
        <div className='button-d'><But3D/></div>

      </div>

      <div className='heading-after-des '>JL. MH. TAHMRIN NO.1</div>
      
      <div className='slot-main'>
              <div className='slot-left-part'>
                <div className='slot_description'>2D</div>
                <div className='time_main-con'>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                </div>
              </div>

              <div  className='slot-right-part'>
                Rp. 30.000 
              </div>
      </div> */}

  {/* third */}

  {/* <div className='movie-title-main'>

          <div className='movie-title-main heading-right '>
              <div className='img'><img src='./img/Star.png' width={32} height={32}/></div>
              <div className='movies-show-heading'><h2>PLAZA INDONESIA XXI</h2></div>
          </div>
       
        <div className='button-d'><But4D/></div>

      </div>

      <div className='heading-after-des '>JL. MH. TAHMRIN NO.1</div>
      
      <div className='slot-main'>
              <div className='slot-left-part'>
                <div className='slot_description'>2D</div>
                <div className='time_main-con'>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                  <div className="time">08:00</div>
                </div>
              </div>

              <div  className='slot-right-part'>
                Rp. 30.000 
              </div>
      </div> */}


    </div>
   </div>
  );
};

export default MovieShowList;



