import foodImg from '../images/restaurantfood.jpg';
import Button from './Button';

const Hero = () => {
    return(
        <section id="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas maximus auctor sem vitae tempus.
                    Duis auctor at enim sed bibendum.
                    Nulla feugiat purus ac ultrices mattis.</p>
                <Button>Reserve a Table</Button>
            </div>
            <div>
               <img src={foodImg} alt="Person holding a board with four meals on it"/>
            </div>
        </section>
    )
}

export default Hero;