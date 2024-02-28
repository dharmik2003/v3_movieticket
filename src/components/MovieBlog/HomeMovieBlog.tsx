// // MovieBlog.tsx
// import React, { useEffect } from 'react';
// import movies from '../Data/poster_movie';
// import './HomeMovieBlog.css'
// import { SlLike } from "react-icons/sl";
// import { useNavigate } from 'react-router-dom';
// import { NavLink} from 'react-router-dom';

// const MovieBlog = () => {



//    useEffect(() => {
//     window.scrollTo(0, 0); // Scrolls to the top when the component mounts
//   }, []);


//   const navigate = useNavigate();
//   const goToBack = () => {
//     navigate(-1);
    
//   };
//   return (
//     <div className='blog-poster-movie-main-con'>
//       <div onClick={goToBack}>
//         <h1 className="back-but">Back</h1>
//       </div>

//       <div>

//         {movies.map((movie, index) => (
//           <NavLink key={index} to={`/movie/${movie.name}`} className='blog-one-con'>
//           <div className='blog-img'>
//             <img src={movie.image} alt={movie.name} />
//           </div>
//           <div className='blog-details'>
//             <span className='blog-tag'>{movie.tag}</span>
//             <h2 className='blog-title'>{movie.name}</h2>
//             <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
//             <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p>
//             <p><span className='blog-date '>{movie.releaseDate}</span></p>
//             <div className="premium-type postions">
//                 <div className="prem-1 pad">{movie.type1}</div>
//                 <div className="prem-2 pad">{movie.type2}</div>
//                 <div className="prem-3 pad">{movie.type3}</div>
//             </div>

//           </div>
//         </NavLink>
//       ))}
//       </div>

//     </div>
//   );
// };

// export default MovieBlog;






/* this code search tag movie name --------------*/


// import React, { useEffect, useState } from 'react';
// import movies from '../Data/poster_movie';
// import './HomeMovieBlog.css';
// import { SlLike } from "react-icons/sl";
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import Navbar from '../Home/Navbar';
// import Footer from '../Home/Footer';
// import { Movie } from './SingleMovieDetails';

// const MovieBlog= () => {

//   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
//   const [selectedKeyword, setSelectedKeyword] = useState('');
//   const [uniqueTags, setUniqueTags] = useState<string[]>([]);

// const movieNamesArray: string[] = movies.map(movie => movie.key.toLowerCase().replace(/\s/g, ''));

//   console.log(movieNamesArray)


//   const handleKeywordClick = (keyword: string) => {
//     const filteredMovies = movies.filter((movie) =>
//       movie.tag === keyword ? true : false
//     );
//     setFilteredMovies(filteredMovies);
//     setSelectedKeyword(keyword);
//   };

//   const clearFilter = () => {
//     setFilteredMovies([]);
//     setSelectedKeyword('');
//   };

  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const tagsSet = new Set(movies.map(movie => movie.tag));
//     setUniqueTags(Array.from(tagsSet));
//   }, []);

//   const navigate = useNavigate();
//   const goToBack = () => {
//     navigate(-1);
//   };

//  const handleSearchInput=()=>{

//  }

 
//   return (
//     <div>
//       <Navbar/>

//       {/* <div className='filter-header-main'>
//         <div><h2 className='home-title-all'>TIX ID News</h2></div>
//         <div  className='home-desc-all'>The latest news about the world of cinema for you!</div>
//         <div></div>
//         <div className='home-keyword-show'>
       

//             {movies.map((movie) => (
//             <div
//               key={movie.id}
//                className={`${selectedKeyword === movie.key ? ' selectedd' : ''}`}
//               onClick={() => handleKeywordClick(movie.key)}
//             >
//               <span
//                 className={`each1-keyword ${selectedKeyword === movie.key ? 'selected' : ''}`}
//                 onClick={() => handleKeywordClick(movie.key)}
//               >
//                 {movie.key}
//               </span>
              
//             </div>
//           ))}
//           <div>
//              {selectedKeyword && (
//             <div onClick={clearFilter}>
//               <span className="each1-keyword">Clear Filter</span>
//             </div>
//           )}
//           </div>
         
//         </div>
//       </div> */}
//         <div className='filter-header-main'>
//         <div><h2 className='home-title-all'>TIX ID News</h2></div>
//         <div  className='home-desc-all'>The latest news about the world of cinema for you!</div>
//         <div>
//             <input 
//             type='text'
//             name='search'
//             onChange={handleSearchInput}/>
//         </div>


//         <div className='home-keyword-show'>
//          {uniqueTags.map((tag, index) => (
//             <div
//               key={index}
//               className={`${selectedKeyword === tag ? ' selectedd' : ''}`}
//               onClick={() => handleKeywordClick(tag)}
//             >
//               <span
//                 className={`each1-keyword ${selectedKeyword === tag ? 'selected' : ''}`}
//                 onClick={() => handleKeywordClick(tag)}
//               >
//                 {tag}
//               </span>
//             </div>
//           ))}
//           <div>
//             {selectedKeyword && (
//               <div onClick={clearFilter}>
//                 <span className="each1-keyword">Clear Filter</span>
//               </div>
//             )}
//           </div>
         
         
//         </div>
//       </div>

//       <div>
//         <div className='blog-poster-movie-main-con'>
//       <div>
//         {/* {movies.map((movie, index) => (
//           <div key={index} className='blog-one-con'>
//             {index % 2 === 0 ? ( // Alternate display pattern based on index
//               <NavLink to={`/movie/${movie.name}`} className='left-side'>
//                 <div className='blog-img'>
//                   <img src={movie.imgurl} alt={movie.name} />
//                 </div>
//                 <div className='blog-details'>
//                  <div className='bloghead'>
//                     <h2 className='blog-title'>{movie.name}</h2>
//                     <span className='blog-tag'>{movie.tag}</span>
//                   </div>
//                   <p><span className='blog-rele-date'>Description :  </span><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
//                   <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p>
//                   <p><span className='blog-date'>{movie.releaseDate}</span></p>
//                   <div className="premium-type postions">
//                     <div className="prem-1 pad">{movie.type1}</div>
//                     <div className="prem-2 pad">{movie.type2}</div>
//                     <div className="prem-3 pad">{movie.type3}</div>
//                   </div>
//                 </div>
//               </NavLink>
//             ) : (
//               <>
//                 <div className='blog-details'>
//                   <div className='bloghead'>
//                     <h2 className='blog-title'>{movie.name}</h2>
//                     <span className='blog-tag'>{movie.tag}</span>
//                   </div>
                  
//                   <p><span className='blog-desc'>{movie.description.slice(0, 398)}...</span></p>
//                   <p className='blog-like-icon-count'><SlLike className='blog-like-icon' /><span className='blog-like-count'> {movie.like}</span></p>
//                   <p><span className='blog-date'>{movie.releaseDate}</span></p>
//                   <div className="premium-type postions">
//                     <div className="prem-1 pad">{movie.type1}</div>
//                     <div className="prem-2 pad">{movie.type2}</div>
//                     <div className="prem-3 pad">{movie.type3}</div>
//                   </div>
//                 </div>
//                 <NavLink to={`/movie/${movie.name}`} className='blog-img'>
//                   <img src={movie.imgurl} alt={movie.name} />
//                 </NavLink>
//               </>
//             )}
//           </div>
//         ))} */}


//         {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie, index) => (
//               <div key={index} className="blog-one-con">
//                 {index % 2 === 0 ? (
//                   <NavLink to={`/movie/${movie.name}`} className="left-side">
//                     <div className="blog-img">
//                       <img src={movie.imgurl} alt={movie.name} />
//                     </div>
//                     <div className="blog-details">
//                       <div className="bloghead">
//                         <h2 className="blog-title">{movie.name}</h2>
//                         <span className="blog-tag">{movie.tag}</span>
//                       </div>
//                       <p>
//                         <span className="blog-rele-date">Description : </span>
//                         <span className="blog-desc">{movie.description.slice(0, 398)}...</span>
//                       </p>
//                       <p className="blog-like-icon-count">
//                         <SlLike className="blog-like-icon" />
//                         <span className="blog-like-count"> {movie.like}</span>
//                       </p>
//                       <p>
//                         <span className="blog-date">{movie.releaseDate}</span>
//                       </p>
//                       <div className="premium-type postions">
//                         <div className="prem-1 pad">{movie.type1}</div>
//                         <div className="prem-2 pad">{movie.type2}</div>
//                         <div className="prem-3 pad">{movie.type3}</div>
//                       </div>
//                     </div>
//                   </NavLink>
//                 ) : (
//                   <>
//                     <div className="blog-details">
//                       <div className="bloghead">
//                         <h2 className="blog-title">{movie.name}</h2>
//                         <span className="blog-tag">{movie.tag}</span>
//                       </div>
//                       <p>
//                         <span className="blog-desc">{movie.description.slice(0, 398)}...</span>
//                       </p>
//                       <p className="blog-like-icon-count">
//                         <SlLike className="blog-like-icon" />
//                         <span className="blog-like-count"> {movie.like}</span>
//                       </p>
//                       <p>
//                         <span className="blog-date">{movie.releaseDate}</span>
//                       </p>
//                       <div className="premium-type postions">
//                         <div className="prem-1 pad">{movie.type1}</div>
//                         <div className="prem-2 pad">{movie.type2}</div>
//                         <div className="prem-3 pad">{movie.type3}</div>
//                       </div>
//                     </div>
//                     <NavLink to={`/movie/${movie.name}`} className="blog-img">
//                       <img src={movie.imgurl} alt={movie.name} />
//                     </NavLink>
//                   </>
//                 )}
//               </div>
//             ))}
//       </div>
//     </div>
//       </div>
//       <hr/>
//       <Footer/>
//     </div>
//   );
// };

// export default MovieBlog;




















// import React, { useEffect, useState } from 'react';
// // import movies from '../Data/poster_movie';
// import './HomeMovieBlog.css';
// import { SlLike } from "react-icons/sl";
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import Navbar from '../Home/Navbar';
// import Footer from '../Home/Footer';
// import { Movie } from './SingleMovieDetails';
// import { useDispatch, useSelector } from 'react-redux';
// import { showMoviesData } from '../Redux/Thunk/MovieThunk';

// const MovieBlog = () => {
  
//   const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
//   const [selectedKeyword, setSelectedKeyword] = useState('');
//   const [uniqueTags, setUniqueTags] = useState<string[]>([]);
//   const [searchInput, setSearchInput] = useState<string>('');
//   console.log("filterMOvie array",filteredMovies)


//   // data fetch (thunk, movieSlice, movieThunk)


//     const dispatch = useDispatch()

//     const {moviesData, loading} =  useSelector((state: any) =>  state.movies)
//     console.log("Movie Data from thunk: " , moviesData)
//     useEffect(() => {
//       dispatch(showMoviesData() as any)
//     },[])

//     const movies = moviesData;

//   /*onclick filter data store setfilteredMovies */
//   const handleKeywordClick = (keyword: string) => {
//     const filteredMovies = movies.filter((movie:any) =>
//       movie.tag === keyword ? true : false
//     );
//     setFilteredMovies(filteredMovies);
//     setSelectedKeyword(keyword);
//   };

//   /*filter value clear*/
//   const clearFilter = () => {
//     setFilteredMovies([]);
//     setSelectedKeyword('');
//     setSearchInput('');
//   };

//   //search using tag
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const tagsSet = new Set(movies.map(movie => movie.tag));
//     setUniqueTags(Array.from(tagsSet) as any);
//   }, []);

//   /*goto home page */
//   const navigate = useNavigate();
//   const goToBack = () => {
//     navigate(-1);
//   };

//   /*search bar logic*/
//   const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = e.target.value.toLowerCase();
//     setSearchInput(inputValue);
//     const filteredMovies = movies.filter((movie:any) =>
//       movie.name.toLowerCase().includes(inputValue)
//     );
//     setFilteredMovies(filteredMovies);
//   };



  
//   return (
//     <div>
//       <Navbar/>
//       <div className='filter-header-main'>
//         <div>
//           <h2 className='home-title-all'>TIX ID News</h2>
//         </div>
//         <div className='home-desc-all'>The latest news about the world of cinema for you!</div>
//         <div className='input-search-main'>
//           <input 
//             type='text'
//             className='searchbar-movie'
//             name='search'
//             value={searchInput}
//             onChange={handleSearchInput}
//             placeholder='Search by movie name...'
//           />
//         </div>
//         <div className='home-keyword-show'>
//           {uniqueTags.map((tag, index) => (
//             <div
//               key={index}
//               className={`${selectedKeyword === tag ? ' selectedd' : ''}`}
//               onClick={() => handleKeywordClick(tag)}
//             >
//               <span
//                 className={`each1-keyword ${selectedKeyword === tag ? 'selected' : ''}`}
//                 onClick={() => handleKeywordClick(tag)}
//               >
//                 {tag}
//               </span>
//             </div>
//           ))}
//           <div>
//             {selectedKeyword && (
//               <div onClick={clearFilter}>
//                 <span className="each1-keyword">Clear Filter</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className='blog-poster-movie-main-con part1'>
//           {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie, index) => (
//             <div key={index} className="blog-one-con">
//               {index % 2 === 0 ? (
//                 <NavLink to={`/movie/${movie.name}`} className="left-side">
//                   <div className="blog-img">
//                     <img src={movie.imgurl} alt={movie.name} />
//                   </div>
//                   <div className="blog-details">
//                     <span className="blog-tag">{movie.tag}</span>
//                     <div className="bloghead">
//                       <h2 className="blog-title">{movie.name}</h2>
                      
//                     </div>
//                     <p className='moviedesc'>
//                        <span className="blog-desc">{movie.description.slice(0, 300)}...</span>
//                     </p>
//                     <p className="blog-like-icon-count">
//                       <SlLike className="blog-like-icon" />
//                       <span className="blog-like-count"> {movie.like}</span>
//                     </p>
//                     <p className='movierelase'>
//                       <span className="blog-date">{movie.releaseDate}</span>
//                     </p>
//                     <div className="premium-type postions">
//                       <div className="prem-1 pad">{movie.type1}</div>
//                       <div className="prem-2 pad">{movie.type2}</div>
//                       <div className="prem-3 pad">{movie.type3}</div>
//                     </div>
//                   </div>
//                 </NavLink>
//               ) : (
//                 <>
//                   <div className='rightside'>
//                     <div className="blog-details">
//                     <span className="blog-tag">{movie.tag}</span>
//                     <div className="bloghead">
//                       <h2 className="blog-title">{movie.name}</h2>
                      
//                     </div>
//                     <p className='moviedesc'>
//                       <span className="blog-desc">{movie.description.slice(0, 300)}...</span>
//                     </p>
//                     <p className="blog-like-icon-count">
//                       <SlLike className="blog-like-icon" />
//                       <span className="blog-like-count"> {movie.like}</span>
//                     </p>
//                     <p  className='movierelase'>
//                       <span className="blog-date">{movie.releaseDate}</span>
//                     </p>
//                     <div className="premium-type postions">
//                       <div className="prem-1 pad">{movie.type1}</div>
//                       <div className="prem-2 pad">{movie.type2}</div>
//                       <div className="prem-3 pad">{movie.type3}</div>
//                     </div>
//                   </div>
//                   </div>
//                   <NavLink to={`/movie/${movie.name}`} className="blog-img">
//                     <img src={movie.imgurl} alt={movie.name} />
//                   </NavLink>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className='blog-poster-movie-main-con part2'>
//           {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie, index) => (
//             <div key={index} className="blog-one-con ">
              
//                 <NavLink to={`/movie/${movie.name}`} className="left-side allpart">
//                   <div className="blog-img ">
//                     <img src={movie.imgurl} alt={movie.name} />
//                   </div>
//                   <div className="blog-details">
//                     <span className="blog-tag">{movie.tag}</span>
//                     <div className="bloghead">
//                       <h2 className="blog-title">{movie.name}</h2>
                      
//                     </div>
//                     <p className='moviedesc'>
//                        <span className="blog-desc">{movie.description.slice(0, 300)}...</span>
//                     </p>
//                     <p className="blog-like-icon-count">
//                       <SlLike className="blog-like-icon" />
//                       <span className="blog-like-count"> {movie.like}</span>
//                     </p>
//                     <p className='movierelase'>
//                       <span className="blog-date">{movie.releaseDate}</span>
//                     </p>
//                     <div className="premium-type postions">
//                       <div className="prem-1 pad">{movie.type1}</div>
//                       <div className="prem-2 pad">{movie.type2}</div>
//                       <div className="prem-3 pad">{movie.type3}</div>
//                     </div>
//                   </div>
//                 </NavLink>
              
//             </div>
//           ))}
//         </div>
//       </div>
//       <hr/>
//       <Footer/>
//     </div>
//   );
// };

// export default MovieBlog;


import React, { useEffect, useState } from 'react';
import './HomeMovieBlog.css';
import { SlLike } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Movie } from './SingleMovieDetails';
import { useDispatch, useSelector } from 'react-redux';
import { showMoviesData } from '../Redux/Thunk/MovieThunk';

const MovieBlog = () => {
  
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState('');
  const [uniqueTags, setUniqueTags] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  console.log("filterMOvie array",filteredMovies)


  // data fetch (thunk, movieSlice, movieThunk)


    const dispatch = useDispatch()

    const {moviesData, loading} =  useSelector((state: any) =>  state.movies)
    console.log("Movie Data from thunk: " , moviesData)
    useEffect(() => {
      dispatch(showMoviesData() as any)
    },[])

    const movies = moviesData;

  /*onclick filter data store setfilteredMovies */
  const handleKeywordClick = (keyword: string) => {
    const filteredMovies = movies.filter((movie:any) =>
      movie.tag === keyword ? true : false
    );
    setFilteredMovies(filteredMovies);
    setSelectedKeyword(keyword);
  };

  /*filter value clear*/
  const clearFilter = () => {
    setFilteredMovies([]);
    setSelectedKeyword('');
    setSearchInput('');
  };

  //search using tag
  useEffect(() => {
    window.scrollTo(0, 0);
    const tagsSet = new Set(movies.map((movie: any) => movie.tag));
    setUniqueTags(Array.from(tagsSet) as any);
  }, [movies]);

  /*goto home page */
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };

  /*search bar logic*/
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchInput(inputValue);
    const filteredMovies = movies.filter((movie: any) =>
      movie.name.toLowerCase().includes(inputValue)
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <div>
      <Navbar/>
      <div className='filter-header-main'>
        <div>
          <h2 className='home-title-all'>TIX ID News</h2>
        </div>
        <div className='home-desc-all'>The latest news about the world of cinema for you!</div>
        <div className='input-search-main'>
          <input 
            type='text'
            className='searchbar-movie'
            name='search'
            value={searchInput}
            onChange={handleSearchInput}
            placeholder='Search by movie name...'
          />
        </div>
        <div className='home-keyword-show'>
          {uniqueTags.map((tag, index) => (
            <div
              key={index}
              className={`${selectedKeyword === tag ? ' selectedd' : ''}`}
              onClick={() => handleKeywordClick(tag)}
            >
              <span
                className={`each1-keyword ${selectedKeyword === tag ? 'selected' : ''}`}
                onClick={() => handleKeywordClick(tag)}
              >
                {tag}
              </span>
            </div>
          ))}
          <div>
            {selectedKeyword && (
              <div onClick={clearFilter}>
                <span className="each1-keyword">Clear Filter</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div className='blog-poster-movie-main-con1 part1'>
          {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie: any, index: number) => (
            <div key={index} className="blog-one-con1">
              {index % 2 === 0 ? (
                <NavLink to={`/movie/${movie.name}`} className="left-side">
                  <div className="blog-img1">
                    <img src={movie.imgurl} alt={movie.name} className='movieblogimg' />
                  </div>
                  <div className="blog-details1">
                    <span className="blog-tag1">{movie.tag}</span>
                    <div className="bloghead1">
                      <h2 className="blog-title1">{movie.name}</h2>
                      
                    </div>
                    <p className='moviedesc1'>
                       <span className="blog-desc1">{movie.description.slice(0, 300)}...</span>
                    </p>
                    <p className="blog-like-icon-count1">
                      <SlLike className="blog-like-icon1" />
                      <span className="blog-like-count1"> {movie.like}</span>
                    </p>
                    <p className='movierelase1'>
                      <span className="blog-date1">{movie.releaseDate}</span>
                    </p>
                    <div className="premium-type postions">
                      <div className="prem-1 pad">{movie.type1}</div>
                      <div className="prem-2 pad">{movie.type2}</div>
                      <div className="prem-3 pad">{movie.type3}</div>
                    </div>
                  </div>
                </NavLink>
              ) : (
                <>
                  <div className='rightside1'>
                    <div className="blog-details1">
                    <span className="blog-tag1">{movie.tag}</span>
                    <div className="bloghead1">
                      <h2 className="blog-title1">{movie.name}</h2>
                      
                    </div>
                    <p className='moviedesc1'>
                      <span className="blog-desc1">{movie.description.slice(0, 300)}...</span>
                    </p>
                    <p className="blog-like-icon-count1">
                      <SlLike className="blog-like-icon1" />
                      <span className="blog-like-count1"> {movie.like}</span>
                    </p>
                    <p  className='movierelase1'>
                      <span className="blog-date1">{movie.releaseDate}</span>
                    </p>
                    <div className="premium-type postions">
                      <div className="prem-1 pad">{movie.type1}</div>
                      <div className="prem-2 pad">{movie.type2}</div>
                      <div className="prem-3 pad">{movie.type3}</div>
                    </div>
                  </div>
                  </div>
                  <NavLink to={`/movie/${movie.name}`} className="blog-img1">
                    <img src={movie.imgurl} alt={movie.name} className='movieblogimg' />
                  </NavLink>
                </>
              )}
            </div>
          ))}
        </div>
        <div className='blog-poster-movie-main-con1 part2'>
          {(filteredMovies.length > 0 ? filteredMovies : movies).map((movie: any, index: number) => (
            <div key={index} className="blog-one-con1 ">
              
                <NavLink to={`/movie/${movie.name}`} className="left-side allpart">
                  <div className="blog-img1">
                    <img src={movie.imgurl} alt={movie.name}  className='movieblogimg' />
                  </div>
                  <div className="blog-details1">
                    <span className="blog-tag1">{movie.tag}</span>
                    <div className="bloghead1">
                      <h2 className="blog-title1">{movie.name}</h2>
                      
                    </div>
                    <p className='moviedesc1'>
                       <span className="blog-desc1">{movie.description.slice(0, 200)}...</span>
                    </p>
                    <p className="blog-like-icon-count1">
                      <SlLike className="blog-like-icon1" />
                      <span className="blog-like-count1"> {movie.like}</span>
                    </p>
                    <p className='movierelase1'>
                      <span className="blog-date1">{movie.releaseDate}</span>
                    </p>
                    <div className="premium-type postions1">
                      <div className="prem-1 pad">{movie.type1}</div>
                      <div className="prem-2 pad">{movie.type2}</div>
                      <div className="prem-3 pad">{movie.type3}</div>
                    </div>
                  </div>
                </NavLink>
              
            </div>
          ))}
        </div>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
};

export default MovieBlog;
