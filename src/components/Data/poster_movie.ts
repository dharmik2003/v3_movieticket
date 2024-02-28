// 

//spider man movie

import { Details } from "../Auth/Dependency"

export interface Movie{
  id: number;
  image: string;
  imgurl: string;
  name: string;
  type1: string;
  type2: string;
  type3: string;
  description: string;
  tag: string;
  like: number;
  duration:string
  director:string;
  agerating:string;
  releaseDate: string;
  trailer: string;
  key: string;
//   details: {
//       great: {
//       feedback: string;
//       theatername1: {
//         theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
//       theatername2: {
//         theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
//       theatername3: {
//         theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
      
//     };
//     best: {
//       feedback: string;
//       theatername1: {
//              theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
//       theatername2: {
//              theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
//       theatername3: {
//              theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
      
//     };
//     good: {
//       feedback: string;
//       theatername1: {
//              theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
//       theatername2: {
//              theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
//       theatername3: {
//              theaterid:number;
//         theatername:string;
//         time:string[];
//         ticketprice: number;
//       };
      
//     };
//   }
}

const movies: Movie[] = [
   {
    id: 1,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/img/spiderman.png?raw=true",
    imgurl: "https://sportshub.cbsistatic.com/i/2022/08/22/466e5e6b-1600-4b7a-a687-6b18e07bed1b/spider-man-no-way-home-rerelease.jpg?width=1200",
    name: "Spider-Man: No Way Home",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag: "Action",
    like: 1000,
    duration:"2 hours 28 Minutes",
    director:" Jon Watts",
    agerating:"U",
    releaseDate: '08 Nov 2021 | TIX ID',
    trailer: "https://www.youtube.com/watch?v=Hi4ktzK9g0I",
    key: "Spiderman",

  },
  {
    id: 2,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/img/YowisBen.png?raw=true",
    imgurl:'https://i.ytimg.com/vi/PbkyO3s4rq8/maxresdefault.jpg',
    name: "Yowis Ben Finale",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag:"Spotlight",
    like: 500,
    duration:"2 hours 28 Minutes",
    director:" Jon Watts",
    agerating:"U/A",
    releaseDate: '08 Nov 2021 | TIX ID',
    trailer:"https://www.youtube.com/watch?v=PbkyO3s4rq8",
    key:"Yowis Ben",

  },
  {
    id: 3,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/img/goshbuster.png?raw=true",
    imgurl:"https://www.hdwallpapers.in/download/ghostbusters_afterlife_the_buzz_hd_ghostbusters_afterlife-1920x1080.jpg",
    name: "Ghostbusters: Afterlife",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag:"News",
    like: 800,
    duration:"2 hours 28 Minutes",
    director:" Jon Watts",
    agerating:" U",
    releaseDate: '08 Nov 2021 | TIX ID',
    trailer:"https://www.youtube.com/watch?v=Lrr4bvwldiM",
    key:"Ghostbusters",

  },
  {
    id: 4,
    image: "https://github.com/dharmik2003/poster_movie/blob/main/img/houseofgucci.png?raw=true",
    imgurl:"https://wallpapers.com/images/hd/house-of-gucci-red-film-poster-eyqh8fgnrap4pkxc.jpg",
    name: "House of Gucci",
    type1: "XXI",
    type2: "CGV",
    type3: "Cinépolis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet quis vitae molestie eleifend in. Proin volutpat id congue diam. Gravida lorem augue senectus nunc et, sagittis in mattis feugiat. Pharetra eleifend eget pellentesque faucibus laoreet. Fames amet hac quis suscipit proin amet. Neque rutrum nam parturient ac. Egestas ut vestibulum ac diam odio malesuada potenti. Donec vitae consequat consequat ornare ante et pulvinar. Diam vitae neque ridiculus diam at posuere volutpat. Donec in pellentesque diam congue.Ultrices malesuada diam condimentum risus. In velit justo eu ac amet fusce lorem urna. Quis sed neque sed duis. Eleifend purus nam at cras nisi, vitae. Eleifend mollis sem odio morbi faucibus. Adipiscing in libero pharetra odio quam. Suspendisse tortor, viverra odio ultrices. Eu arcu odio neque malesuada ut blandit sit. In justo, suspendisse sit faucibus morbi egestas ut facilisis egestas. Turpis non amet massa a, elit, in. Lectus at elementum, a nullam in. Commodo magna senectus malesuada ut rhoncus in. Placerat arcu congue faucibus auctor purus, fringilla praesent maecenas Quis sed lobortis sed amet nec eu, dolor. Elementum in integer sagittis tellus scelerisque imperdiet felis sit mauris. Scelerisque nunc, nullam malesuada leo odio malesuada lobortis egestas. Neque at fringilla morbi nulla facilisi tellus sit lobortis cursus. Venenatis at aliquet auctor ut elit, urna. Consequat quis risus turpis amet.",
    tag:"News",
    duration:"2 hours 28 Minutes",
    director:" Jon Watts",
    agerating:"A",
    like: 100,
    releaseDate: '08 Nov 2021 | TIX ID',
    trailer:"https://www.youtube.com/watch?v=pGi3Bgn7U5U",
    key:"House of Gucci",
    
  },
];

export default movies;

