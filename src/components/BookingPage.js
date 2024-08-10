import BookingForm from "./BookingForm";

const BookingPage = (props) => {
    return (
        <main id="bookingMain">
            <h1>Make a Reservation</h1>
            <BookingForm available={props.available} getTimes={props.getTimes}/>
        </main>
    )
}

export default BookingPage;