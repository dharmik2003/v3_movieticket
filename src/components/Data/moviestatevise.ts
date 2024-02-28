interface Theater {
  theatername: string;
  time: string[];
  ticketprice: number;
}

export interface CityData {
  id: number;
  cityname: string;
  prime: Theater[];
  good: Theater[];
  best: Theater[];
}

const data = [
  {
    id: 1,
    cityname: "Surat",
    prime: [
      {
        theatername: "PVR, Rahul Raj",
        time: ["08:00", "10:00", "12:00", "14:00", "16:00"],
        ticketprice: 350,
      },
      {
        theatername: "Valentine, Vesu ",
        time: ["09:00", "11:00", "13:00", "15:00", "17:00"],
        ticketprice: 300,
      },
    ],
    good: [
      {
        theatername: "Rajhans Cinemas, Vesu",
        time: ["08:30", "10:30", "12:30", "14:30", "16:30"],
        ticketprice: 250,
      },
      {
        theatername: "INOX Raj Imperial, Varachha Road",
        time: ["09:30", "11:30", "13:30", "15:30", "17:30"],
        ticketprice: 200,
      },
    ],
    best: [
      {
        theatername: "Rajhans Cinemas, Kamrej",
        time: ["08:45", "10:45", "12:45", "14:45", "16:45"],
        ticketprice: 199,
      },
      {
        theatername: "TheFriday cinemas, Mota Varachha",
        time: ["09:45", "11:45", "13:45", "15:45", "17:45"],
        ticketprice: 180,
      },
    ],
  },
   {
    id: 2,
    cityname: "Ahmedabad",
    prime: [
      {
        theatername: "Prime Theater 1",
        time: ["08:00", "10:00", "12:00", "14:00", "16:00"],
        ticketprice: 15,
      },
      {
        theatername: "Prime Theater 2",
        time: ["09:00", "11:00", "13:00", "15:00", "17:00"],
        ticketprice: 20,
      },
    ],
    good: [
      {
        theatername: "Good Theater 1",
        time: ["08:30", "10:30", "12:30", "14:30", "16:30"],
        ticketprice: 10,
      },
      {
        theatername: "Good Theater 2",
        time: ["09:30", "11:30", "13:30", "15:30", "17:30"],
        ticketprice: 12,
      },
    ],
    best: [
      {
        theatername: "Best Theater 1",
        time: ["08:45", "10:45", "12:45", "14:45", "16:45"],
        ticketprice: 25,
      },
      {
        theatername: "Best Theater 2",
        time: ["09:45", "11:45", "13:45", "15:45", "17:45"],
        ticketprice: 30,
      },
    ],
  },
   {
    id: 3,
    cityname: "Vadodara",
    prime: [
      {
        theatername: "PVR",
        time: ["08:00", "10:00", "12:00", "14:00", "16:00"],
        ticketprice: 305,
      },
      {
        theatername: "Prime Theater 2",
        time: ["09:00", "11:00", "13:00", "15:00", "17:00"],
        ticketprice: 20,
      },
    ],
    good: [
      {
        theatername: "Good Theater 1",
        time: ["08:30", "10:30", "12:30", "14:30", "16:30"],
        ticketprice: 10,
      },
      {
        theatername: "Good Theater 2",
        time: ["09:30", "11:30", "13:30", "15:30", "17:30"],
        ticketprice: 12,
      },
    ],
    best: [
      {
        theatername: "Best Theater 1",
        time: ["08:45", "10:45", "12:45", "14:45", "16:45"],
        ticketprice: 25,
      },
      {
        theatername: "Best Theater 2",
        time: ["09:45", "11:45", "13:45", "15:45", "17:45"],
        ticketprice: 30,
      },
    ],
  },
];

export default data;
