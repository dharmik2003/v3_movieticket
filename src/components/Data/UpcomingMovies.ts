// Define the Movie interface
export interface upMovie {
  id: string;
  name: string;
  image: string;
  description:string;
  releaseDate: string;
  tag: string;
  type1: string;
  type2: string;
  type3: string;
}

// Define the array of upcoming movies
export const UpcomingMovies: upMovie[] = [
  {
    id: "movie1",
    name: "The Matrix: Resurrections",
    // image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/The%20Matrix%20Resurrections.png?raw=true",
    image: "https://image.tmdb.org/t/p/original/3bmJdYwXIEVa48l5iL5qxpkSDp4.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Action"
  },
  {
    id: "movie2",
    name: "Resident Evil: Welcome to Raccoon City",
    // image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/Picture.png?raw=true",
    image: "https://www.true-gaming.net/home/wp-content/uploads/2021/10/Resident-Evil-Welcome-to-Raccoon-City.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Comedy"
  },
  {
    id: "movie3",
    name: "Sword Art Online: Progressive - Aria of a Starless Night",
    // image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/Sword%20Art%20Online_%20Progressive%20-%20Aria%20of%20a%20Starless%20Night.png?raw=true",
    image: "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002282?referenceScheme=HeadOffice&allowPlaceHolder=true",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Jan 2024 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
  {
    id: "movie4",
    name: "Chhello Divas poster",
    // image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/chhelo_divas.jpg?raw=true",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/dcdeebec57e89fd7cd7e5db9719ddd6f34fd5901471154998196fd8fdfda7be5._V_SX1620_.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "08 Nov 2021 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
  {
    id: "movie5",
    name: "3 akka ",
    // image: "https://github.com/dharmik2003/poster_movie/blob/main/Upcomming_movie/khichdi.jpg?raw=true",
    image: "https://i.ytimg.com/vi/hX1VvCft0D8/maxresdefault.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    releaseDate: "10 Nov 2023 | TIX ID",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
  {
    id: "movie6",
    name: "Chal Jivi Laiye ",
    image: "https://www.filmyfenil.com/wp-content/uploads/2019/09/Chaal-Jeevi-Laiye.jpg",
    releaseDate: "08 Des 2022 | TIX ID",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    tag: "Drama"
  },
];


export default UpcomingMovies;
