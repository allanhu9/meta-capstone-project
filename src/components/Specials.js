import Button from "./Button";
import SpecialCard from "./SpecialCard";
import Salad from "../images/greeksalad.jpg";

const Specials = () => {
    const specials = [
        {
            name: 'Greek Salad',
            imgSrc: Salad,
            price: '$12.99',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas maximus auctor sem vitae tempus.
            Duis auctor at enim sed bibendum.`
        },
        {
            name: 'Greek Salad',
            imgSrc: Salad,
            price: '$12.99',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas maximus auctor sem vitae tempus.
            Duis auctor at enim sed bibendum.`
        },
        {
            name: 'Greek Salad',
            imgSrc: Salad,
            price: '$12.99',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas maximus auctor sem vitae tempus.
            Duis auctor at enim sed bibendum.`
        },
    ];

    return(
        <section id="specials">
            <div>
                <h1>This week's specials!</h1>
                <Button>Online Menu</Button>
            </div>
            <div className="cards">
                {specials.map(special => {
                    return (
                        <SpecialCard
                            key={special.name}
                            name={special.name}
                            imgSrc={special.imgSrc}
                            price={special.price}
                            description={special.description}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default Specials;