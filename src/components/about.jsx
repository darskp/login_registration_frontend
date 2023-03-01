import Banner from "./Banner";
const About = () => {
    let title = 'About';
    return (
        <div className="about">
            <Banner data={title} />
        </div>
    );
}

export default About;