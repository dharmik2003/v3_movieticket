// import React from 'react'
// import './Advertice.css'
// const Advertice = () => {
//   return (
//     <div>
//          <div className="poster">
//             <div className="poster-in">
//                 <div className="verticals-text">
//                     <div className='vertical-text-1 imgg'>
//                         <img src="./img/tix id 1.png" width={64} height={50}/>
//                          {/* width:"64px", height:"64px" */}
//                     </div>
//                     <div className='vertical-text-1'>
//                         <p>SEWA/BELI FILM dan</p>
//                         <p>SERIAL di TIX ID sekarang!</p>
//                     </div>
//                     <div className="web_intra_link className='vertical-text-1'">
//                         <div className="inline_link">
//                         {/* <!-- website link --> */}
                       
//                             <div><img src="./SVG/earth-svgrepo-com.svg" height="11px" width="11px"/></div>
//                             <div><a href="#">www.tix.id</a></div>
                        
//                         {/* <!-- intragram Id --> */}
                        
//                             <div><img src="./SVG/instagram-logo-thin-svgrepo-com.svg" height="12px" width="12px"/></div>
//                             <div><a href="#">tix_id</a></div>
                        
//                         </div>
//                     </div>
//                 </div>
//                 <div className="Jems-john">
//                     <div  className="jems"><img src="./img/image 7.png" alt="image7" /></div>
//                     <div className="john"><img src="./img/image 3.png" alt="image-3"/></div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Advertice


// import React, { useState, useRef, useEffect } from 'react';
// import adPosters from './../../components/Data/AdPoster'; // Import the advertisement data
// import './Advertice.css'



// const Advertice: React.FC = () => {
//   return (
//     <div className="ad-poster-container">
//       <div className="horizontal-scroll-view1">
//         {adPosters.map((ad, index) => (
//           <div className="ad-card" key={ad.id}>
//             <img src={ad.image} alt={ad.name} className="ad-image" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Advertice;


import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import adPosters from './../../components/Data/AdPoster'; // Import the advertisement data
import './Advertice.css';

const Advertice = () => {
   const [startIndex, setStartIndex] = useState(0);
  const moviesPerPage = 1;

  const handleNext = () => {
    if (startIndex + moviesPerPage < adPosters.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); 
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(adPosters.length - moviesPerPage); 
    }
  };

  return (
   <div>
     <div className="ad-poster-container">
      <div className="horizontal-scroll-view1" >
       {(
            <div className="scroll-circle-small" onClick={handlePrev}><FaChevronLeft /></div>
        )}
        {adPosters.slice(startIndex, startIndex + moviesPerPage).map((movie) => (
          <div className="" key={movie.id}>
           
              <img src={movie.image} className="main-img" alt={movie.name} />           
            
          </div>
        ))}
        { (
          
            <div className="scroll-circle-small" onClick={handleNext}><FaChevronRight /></div>
          
        )}
      </div>
      
    </div>
   </div>
  );
};

export default Advertice;


// ref={scrollRef}