import Banner from "./Shared/Banner";
import bannerImg from "../assets/img/6.webp"


const Newsletter = () => {
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
           <Banner banner={bannerImg} heading="Each student an share their disount code for friens" subheading={"A simple paragraph is comprised of three major components. the first sentence, which is often a declaratice sentence, is called the topic sentence"} btn1={"I have a code"} />
        </div>
    );
};

export default Newsletter;