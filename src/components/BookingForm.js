import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {submitAPI} from './api.js';
import {format} from 'date-fns';

const BookingForm = (props) => {
    let currentDate = format(new Date(), 'yyy-mm-dd');
    const [date, setDate] = useState(currentDate);
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const success = submitAPI({date, time, guests, occasion});
        setSubmitted(success);
    }
    useEffect(() => {
        if (submitted) {
            navigate('/confirmation');
        }
    }, [submitted])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                        props.getTimes(e.target.value);
                    }} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time}
                    onChange={(e) => {
                        setTime(e.target.value);
                    }}>
                    {props.available.map((availableTime) => {
                        return (<option key={availableTime} data-testid='timeOption'>{availableTime}</option>)
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"
                    value={guests}
                    onChange={(e) => {
                        setGuests(e.target.value);
                    }} />
                <br />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => {
                    setOccasion(e.target.value);
                }}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" data-testid="submit" value="Make Your Reservation" />
            </form>
        </div>
    )
}

export default BookingForm;