import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <h1 className='text-center text-5xl font-bold mt-20'>This is About</h1>
        </div>
    );
};

export default About;