
// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import './DateItems.css'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface DateSelectorProps {
//     onDateSelect: (date: Date) => void;
// }

// const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
//     const settings = {
//         dots: false,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//     };

//     const slider = useRef<Slider>(null);
//     const [datesOfMonth, setDatesOfMonth] = useState<{ date: Date; day: string }[]>([]);
//     const [selectedDate, setSelectedDate] = useState<Date | null>(null);


//     useEffect(() => {
//         const currentDate = new Date();
//         const endDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000); // Today + 15 days

//         const dates: { date: Date; day: string }[] = [];

//         // Loop through dates from today to 15 days ahead and populate the dates array
//         for (let date = new Date(currentDate); date <= endDate; date.setDate(date.getDate() + 1)) {
//             const day = date.toLocaleDateString('en-US', { weekday: 'short' });
//             dates.push({ date: new Date(date), day });
//         }

//         setDatesOfMonth(dates);
//     }, []);

//     const handleDateClick = (date: Date) => {
//         setSelectedDate(date);
//         onDateSelect(date);
//     };

//     return (
//         <div className='maincondate'>
//             <div className="semidiv">
//                     <div {...settings} className='sliderpart'>
//                         {datesOfMonth.map((dateObj, index) => (
//                            <div key={index}
//                                 className={`eachdate ${dateObj.date === selectedDate ? 'selected' : ''}`}
//                                 onClick={() => handleDateClick(dateObj.date)}>
//                                 <div className='monthdate'>
//                                     {dateObj.date.getDate()} {dateObj.date.toLocaleDateString('en-US', { month: 'short' })}
//                                 </div>
//                                 <div className='dateday'>
//                                     {dateObj.day}
//                                 </div>
//                             </div>

//                         ))}
//                     </div>
//                 </div>
//         </div>
//     );
// };

// export default DateSelector;

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './DateItems.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { setDate } from '../../Redux/Slice/MovieBookingSlice';
import { useDispatch } from 'react-redux';

interface DateSelectorProps {
    onDateSelect: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const slider = useRef<Slider>(null);
    const [datesOfMonth, setDatesOfMonth] = useState<{ date: Date; day: string }[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);


    const dispatch = useDispatch()
    useEffect(() => {
        const currentDate = new Date();
        const endDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000); // Today + 15 days

        const dates: { date: Date; day: string }[] = [];

        // Loop through dates from today to 15 days ahead and populate the dates array
        for (let date = new Date(currentDate); date <= endDate; date.setDate(date.getDate() + 1)) {
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            dates.push({ date: new Date(date), day });
        }

        setDatesOfMonth(dates);
        console.log("dates",dates)
        
        // Set today's date as the default selected date
        setSelectedDate(currentDate);
        onDateSelect(currentDate);

        const formattedDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        const formattedDateOfMonth = currentDate.getDate();
        const formattedMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });
        const formattedDate = `${formattedDay} ${formattedDateOfMonth} ${formattedMonth}`;
        
        dispatch(setDate(formattedDate));

        // Print the default selected date to the console
        console.log('Default selected date:',formattedDate );
    }, []);


    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
        onDateSelect(date);
    };

    return (
        <div className='maincondate'>
            <div className="semidiv">
                <div {...settings} className='sliderpart'>
                    {datesOfMonth.map((dateObj, index) => (
                        <div
                            key={index}
                            className={`eachdate ${dateObj.date.getTime() === selectedDate?.getTime() ? 'selected' : ''}`}
                            onClick={() => handleDateClick(dateObj.date)}
                        >
                            <div className='monthdate'>
                                {dateObj.date.getDate()} {dateObj.date.toLocaleDateString('en-US', { month: 'short' })}
                            </div>
                            <div className='dateday'>
                                {dateObj.day}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default DateSelector;
