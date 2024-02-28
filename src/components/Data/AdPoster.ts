
interface AdPoster {
  id: number;
  image: string;
  name: string;
  description: string;
}

// Sample advertisement data
const adPosters: AdPoster[] = [
  {
    id: 1,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/ad-poster/first.png?raw=true",
    name: "Ad 1",
    description: "Description of Ad 1",
  },
  {
    id: 2,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/ad-poster/first1.png?raw=true",
    name: "Ad 2",
    description: "Description of Ad 2",
  },
  {
    id: 3,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/ad-poster/first3.png?raw=true",
    name: "Ad 3",
    description: "Description of Ad 3",
  },
  // Add more advertisement data as needed
];

export default adPosters;
