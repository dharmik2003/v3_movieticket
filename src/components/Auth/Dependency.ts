import { PhoneNumber } from "react-phone-number-input";

export interface LoginState {
    phoneNumber: string,
    password: string,
    loginState:boolean,
}
export interface SignUpState {
    name:string
    phoneNumber: string,
    email:string,
    password: string,
    SignupState: boolean,
}


/*login or not data pass in home page*/
export interface NavbarProps {
  loginstate: boolean;
  signupstate: boolean;
}



export interface Details{
great: {
      feedback: string;
      theatername1: {
        theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      theatername2: {
        theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      theatername3: {
        theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      
    };
    best: {
      feedback: string;
      theatername1: {
             theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      theatername2: {
             theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      theatername3: {
             theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      
    };
    good: {
      feedback: string;
      theatername1: {
             theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      theatername2: {
             theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      theatername3: {
             theaterid:number;
        theatername:string;
        time:string[];
        ticketprice: number;
      };
      
    };


}