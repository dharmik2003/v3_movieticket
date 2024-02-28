import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Movie {
  id: number;
  name: string;
  image: string;
}
interface Theater {
  id: string;
  name: string;
  dimensionCategory: string;
  time: string;
  price: number;
}
interface Date {
  date: string;
}
interface Time {
  time: string;
}
interface Seat {
  seat: string[];
}
interface Dimension {
  dimensionCategory: any;
  Dimension: string[];
}
export interface TicketEntry {
  movie: Movie;
  theater: Theater;
  date: Date;
  time: Time;
  dimension:Dimension;
  seats: Seat[] | null;
  totalPrice: number;
  discount: number;
  finalAmount: number;
  randomnumber:number;
}
interface MyTicketState {
  tickets: TicketEntry[];
}
const initialState: MyTicketState = {
  tickets: [],
};
const MyTicketSlice = createSlice({
  name: 'myTicket',
  initialState,
  reducers: {
    addTicket: (state, action) => {
      // state.tickets = [];
      state.tickets.unshift(action.payload);
    },
    reset(state) {
      state.tickets = [];
    },
  },
});
export const { addTicket, reset } = MyTicketSlice.actions;
export default MyTicketSlice.reducer;