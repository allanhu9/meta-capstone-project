import marioadrian1 from '../images/Mario and Adrian A.jpg';
import marioadrian2 from '../images/Mario and Adrian B.jpg';

const About = () => {
    return(
        <section id="about">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus auctor sem vitae tempus. Duis auctor at enim sed bibendum. Nulla feugiat purus ac ultrices mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus auctor sem vitae tempus. Duis auctor at enim sed bibendum. Nulla feugiat purus ac ultrices mattis.</p>
            </div>
            <div>
               <img id="aboutImg1" src={marioadrian2} alt="Adrian and Mario"/>
               <img id="aboutImg2" src={marioadrian1} alt="Adrian and Mario"/>
            </div>
        </section>
    )
}

export default About;