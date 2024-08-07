import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Specials from "./Specials";
import About from "./About";

const HomePage = () => {
    return (
        <main>
            <Hero/>
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
    )
}

export default HomePage;