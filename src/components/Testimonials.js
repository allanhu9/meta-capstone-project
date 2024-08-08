import TestimonialCard from "./TestimonialCard";
import personImg from "../images/person.png";

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Razi',
            rating: '5 Stars',
            imgSrc: personImg,
            description: 'description',
        },
        {
            name: 'Jay',
            rating: '5 Stars',
            imgSrc: personImg,
            description: 'description',
        },
        {
            name: 'Anastasia',
            rating: '5 Stars',
            imgSrc: personImg,
            description: 'description',
        },
        {
            name: 'Bill',
            rating: '5 Stars',
            imgSrc: personImg,
            description: 'description',
        }
    ]

    return(
        <section id="testimonials">
            <h1>Testimonials</h1>
            <div>
                {testimonials.map((testimony => {
                    return(
                    <TestimonialCard
                        key={testimony.name}
                        name={testimony.name}
                        rating={testimony.rating}
                        imgSrc={testimony.imgSrc}
                        description={testimony.description}
                    />);
                }))}
            </div>
        </section>
    )
}

export default Testimonials;