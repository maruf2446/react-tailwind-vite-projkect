import banner from '../assets/img/benar.jpg'
import Banner from './Shared/Banner';

const Home = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
            <Banner banner={banner} heading="Develop your skills without diligence" subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium ad quasi consequuntur dolorum cum aspernatur fugiat eum provident! Sit." btn1={'Get Started'} btn2={'Discount'} />
        </div>
    );
};

export default Home;