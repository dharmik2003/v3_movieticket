// regular working code----------------------------------------

import { FiSearch } from "react-icons/fi";
import { FcFilmReel } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateSelector from './Date/DateItems';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './MovieDetails.css'
import { resetMovieBooking, selectTime, setDate, setTheaterData, setdimension } from '../Redux/Slice/MovieBookingSlice';

const MovieDetails = () => {

  const dispatch = useDispatch()

  //Fetch data
  const {moviesData, loading, error} = useSelector((state: any) => state.movies);
  console.log("moviesData",moviesData)
  const {theaterData, theaterloading} = useSelector((state: any) => state.theator);
  console.log("theaterData",theaterData)



  //Date Display 

  const [day, setDay] = useState<string>("");
  const [dateOfMonth, setDateOfMonth] = useState<number>();
  const [month, setMonth] = useState<string>("");

  const handleDateSelect = (date: Date) => {
      const formattedDay = date.toLocaleDateString('en-US', { weekday: 'long' });
      const formattedDateOfMonth = date.getDate();
      const formattedMonth = date.toLocaleDateString('en-US', { month: 'long' });
      dispatch(setDate(`${formattedDay} ${formattedDateOfMonth} ${formattedMonth}`));
  }
  

  const [selectedCity, setSelectedCity] = useState("surat");
  const [uniquetheaterNames, setuniquetheaterNames] = useState<string[]>([]);
  const [uniqueDimensionNames, setUniqueDimensionNames] = useState<string[]>([]);
  const [uniquebadgeNames, setuniquebadgeNames] = useState<string[]>([]);


  // Get unique city names
  const uniqueCityNames = [...new Set(theaterData.map((theater: any) => theater.city)) as any];
 
  //searchbar base on city name  : --------------------------------

  useEffect(() => {
      const filtertheaterNames = theaterData.filter((theater:any) => theater.city === selectedCity);
      const theaterNames = [...new Set(filtertheaterNames.flatMap((theater: any) => theater.name)) as any];
      setuniquetheaterNames(theaterNames);
    }, [theaterData, selectedCity]);
  // console.log("uniquetheaterNames--------------",uniquetheaterNames)

  // Get badge name base on city name  : -------------------------------
    useEffect(() => {
      const filteredbadgeNames = theaterData.filter((theater:any) => theater.city === selectedCity);
      const badgeNames = [...new Set(filteredbadgeNames.flatMap((theater: any) => theater.badge)) as any];
      setuniquebadgeNames(badgeNames);
    }, [theaterData, selectedCity]);



  // Get unique dimention names base on city name : --------------------------------

    useEffect(() => {
    const filteredTheaters = theaterData.filter((theater:any) => theater.city === selectedCity);
    const dimensionNames = [...new Set(filteredTheaters.flatMap((theater: any) => theater.dimension.map((dimension: any) => dimension.dimensionCategory))) as any];
    setUniqueDimensionNames(dimensionNames);
    }, [theaterData, selectedCity]);
    // console.log("uniqueDimensionNames",uniqueDimensionNames)

    console.log("uniquetheaterNames",uniquetheaterNames)
    console.log("uniqueDimensionNames",uniqueDimensionNames)
    console.log("uniquebadgeNames",uniquebadgeNames)


  // Filter theater data based on the selected city
  const [selectedtheater, setSelectedtheater] = useState<string>("");
  const [selectedbadge, setSelectedbadge] = useState<string>("");
  const [selectedDimension, setSelectedDimension] = useState<string>("");



const filteredTheaterData = theaterData.filter((theater: any) =>
  (!selectedCity || theater.city === selectedCity) &&
(!selectedtheater || theater.name.toLowerCase().includes(selectedtheater.toLowerCase())) &&
  (!selectedbadge || theater.badge.includes(selectedbadge)) &&
  (!selectedDimension || theater.dimension.some((dimension: any) => dimension.dimensionCategory === selectedDimension))
);

  //movie details fetch using ID
  const [searchParams] = useSearchParams();
  const urlId = searchParams.get('id');
  console.log(urlId);

  console.log(moviesData)
 
  const filteredMovies = moviesData.filter((movie: any) => movie.id == urlId);
  console.log(filteredMovies);

  const { search } = useLocation()
  console.log(search)


 
  //selected Data display moviebookingslice
  
  const {selecteddimension,selectedTime,selectedDate,selectedTheater} =useSelector((state : any)=>state.movieBooking)
  console.log("datas from moviesbooking slice",selecteddimension,selectedTime,selectedDate,selectedTheater)
  console.log(selecteddimension.time)

  
  const handleDimensionClick = (theater :any, dimension:any) => {
    dispatch(setTheaterData({ theater}));
    console.log(theater);
    dispatch(setdimension(dimension));
  };

   const clearSelectedValues = () => {
    setSelectedbadge("");
    setSelectedDimension("");
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedtheater(e.target.value);
  };

  const handleTimeSlotClick = (time: string) => {
    // Check if the clicked time slot is already selected
    if (selectedTime !== time) {
      dispatch(selectTime(time)); // Dispatch the action to select the time slot
    }
  };

// const checkTimeSlotMatch = (selectedTime: string) => {
//   const isSelected = selectedDimension.time.map((t:any) => t === selectedTime ? "selected" : "");
//   if (isSelected.includes("selected")) {
//     dispatch(selectTime(selectedTime));
//   } else {
//     alert("This time slot is not available in the selected dimension.");
//   }
// };


  return (
   <div>
      
       <div className='main-con'>

     <div className='left-con'>
       <div className='se-container'>
        <h2 className='se-scheduletitle'>Schedule</h2> 
        <p className='se-decs'>Select the schedule of the cinema you want to watch</p>
      </div>
      {/* Your DateSelector component */}
      <div className="datepartseaction"><DateSelector onDateSelect={handleDateSelect}/></div>
      <hr className='hrcsstry'/>

      {/* Badge dropdown menu */}
      <div className="locationcity">
            <div className="locationicon "><CiLocationOn className="fontsizeset" /></div>
            <div className="loactiondropdown">
              <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}  className="sizeoodropdown" >
                {uniqueCityNames.map((city: string, index: number) => (
                  <option key={index} value={city}>
                   {city.charAt(0).toUpperCase() + city.slice(1)}
                  </option>
                ))}
              </select>
            </div>
      </div>
      

      <div className="all-filter-container">
          {/* searchbar theater menu */}
          <div className="main-con-div-search">
              <div className="searchbar-div">
                  <input
                  className="searchbar"
                  type="text"
                  placeholder="Search..."
                  // value={selectedtheater} 
                  onChange={handleSearchChange}
                />
            </div>
            <div className="searchicon-div">
                <FiSearch className="searchicon"/>
            </div>
         </div>

         <div className="threefilter">
                    <div>
            <select value={selectedbadge} onChange={(e) => setSelectedbadge(e.target.value)}  className="borderremove dropdown-colorset">
              <option value="">Badge</option>
              {uniquebadgeNames.map((city: string, index: number) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select value={selectedDimension} onChange={(e) => setSelectedDimension(e.target.value)}  className="borderremove dropdown-colorset">
              <option value="">Dimension</option>
              {uniqueDimensionNames.map((city: string, index: number) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
        </div>
           

          {/* clear button */}
           <div onClick={clearSelectedValues} className="clearfilter">Clear Filter
           </div>
         </div>

      </div>


          


          
      {/* Display theaters based on the selected city */}
      <div className="main-con-slot">
        {filteredTheaterData.map((theater: any) => (
        <div key={theater.id}  className="semimain-con">
          <div className="se-theatername">
            <div className="se-theater">
              <div className="filmeicon-div" >
                <FcFilmReel className="fimeicon"/>
              </div>
              <div>
                <p className="theatername">{theater.name}</p>
              </div>
            </div>
            {/* <div>
              <p>{theater.badge}</p>
            </div> */}
            <div>
              <p className={theater.badge === 'CGV' ? 'CGV' : theater.badge === 'XXI' ? 'XXI' : theater.badge === 'CINEPOLIS' ? 'CINEPOLIS' : ''}>{theater.badge}</p>
            </div>

          </div>
          <p className="theateraddress">{theater.address}</p>          
          <div>
            <div>
              {theater.dimension.map((dimension: any, index: number) => (
                // <li key={index}  onClick={()=> dispatch(setdimension(dimension))} >
                <div key={index}   onClick={() => handleDimensionClick(theater, dimension)} >
                  <p className="dimentiontitile">{dimension.dimensionCategory}</p>
                    <div className="se-timeslot-div">
                      {dimension.time.map((time: string, idx: number) => (
                        <div key={idx} onClick={() => dispatch(selectTime(time))}   className={`timeslot-border ${selectedTime === time ? 'selected' : ''}`}>
                          <p className="timenumber">{time}</p>
                        </div>
                      ))}
                    </div>
                    


                </div>
                // <div key={index}   onClick={() => handleDimensionClick(theater, dimension)} >
                //   <p className="dimentiontitile">{dimension.dimensionCategory}</p>
                //     <div className="se-timeslot-div">
                //       {dimension.time.map((time: string, idx: number) => (
                //         <div key={idx} onClick={() => dispatch(selectTime(time))}   className={`timeslot-border ${selectedDimension && !selectedTime && selectedDimension.id === dimension.id ? 'selected' : 'notselected'}`}>
                //           <p className="timenumber">{time}</p>
                //         </div>
                //       ))}
                //     </div>
                    
                // </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      </div>

          
      </div>


    

    <div className='right-con'>
      <div>
        {filteredMovies.map((movie: any) => (
         <div className="splitdatatwopart">
                     <div><img src={movie.image} className='se-movieimg'></img></div>
                     <div>
                        <h2 className='se-movietitle'>{movie.name}</h2>
                     <div className="movie-details">
                                         <div className="category">
                                             <ul>
                                                <li className="">Tag</li>
                                                <li>Duration</li>
                                                <li>Director</li>
                                                <li>Age Rating</li>
                                             </ul>
                                         </div>
                                        <div className="info">
                                              <ul>
                                                <li> {movie.tag}</li>
                                                <li> {movie.duration}</li>
                                                <li> {movie.director}</li>
                                                <li> {movie.agerating}</li>
                                              </ul>
                                        </div>
                    </div>
                     </div>
          </div>
        ))
      }
      </div>
     
      {/* selected item display */}


    

     <div className="rightsidepart00">
       <div className='se-butcon'>
       {/* {!selectedDate && !selectedTime && <h2 className='centertext'>Select Date & Time</h2>}
       {!selectedDate && selectedTime && <h2 className='centertext'>Select Date</h2>}
      {selectedDate && !selectedTime && <h2 className='centertext'>Select Time</h2> } */}
       {!selectedDate && !selectedTime && <div className="imageflexset"><h3>Please Select Time And Date</h3><img src="https://github.com/dharmik2003/poster_movie/blob/main/moviepage/datetime.png?raw=true" className="imgclass"/></div>}
       {!selectedDate && selectedTime &&<div  className="imageflexset"><h2>Please Select Date</h2><img src="https://c.ststat.net/content/sites/KnittingAndStitchingShowSpecial/images/icon-date.png" className="imgclass"/></div>}
      {selectedDate && !selectedTime && <div  className="imageflexset"><h2>Please Select Time</h2><img src="https://cdn2.iconfinder.com/data/icons/business-office-4/256/Office_Clock-1024.png" className="imgclass"/></div> }
      {selectedDate && selectedTime && 

                <div>
                  <h2 className='seatedtheatername'>{selectedTheater.name}</h2>
                  <p className='selecteddate'>{selectedDate}</p>
                  <div className="dimention-and-date">
                    <p>{selecteddimension.dimensionCategory}</p>
                    <p>{selectedTime}</p>
                  </div> 
                  <small className='se-but-condition'>*Seat selection can be done after this</small>
                 
                <div className='se-but-div'>
                  <button className='se-but-booknow'>
                  <Link to={`/movie/${encodeURIComponent(urlId as any)}/sitehomepage`}className="se-Booknow-but">Book Now</Link>
                </button>
                </div>
              </div>
      }
      
    </div>
     </div>
     
     </div>  

     </div>
   </div>
  )
}

export default MovieDetails;




