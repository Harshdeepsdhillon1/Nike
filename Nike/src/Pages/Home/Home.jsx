import Navbar from '../../components/Navbar';
import Header from './Header'
import Hero from './Hero';
import Carousel from '../../components/Carousel';
import MembershipCarousel from './MembershipCarousel';
import Footer from '../../components/Footer';

const homeSlides = [
  { url: "/images/shoes-1.png", title: "Air Max 90" },
  { url: "/images/shoes-2.png", title: "Airforce 1" },
  { url: "/images/shoes-3.png", title: "Jordan Retro" },
  { url: "/images/shoes-4.png", title: "Court Vision" },
  { url: "/images/shoes-5.png", title: "Air Max 90" },
  { url: "/images/shoes-6.png", title: "Airforce 1" },
  { url: "/images/shoes-7.png", title: "Jordan Retro" },
  { url: "/images/shoes-8.png", title: "Jordan Retro" },
  { url: "/images/shoes-9.png", title: "Court Vision" }
];
const heading = "Featured Products";
const CategorySlides = [
  { url: "/images/man.png", title: "Men" },
  { url: "/images/woman.png", title: "Women" },
  { url: "/images/teen.png", title: "Teens" },
  { url: "/images/kid.png", title: "Kids" },
  { url: "/images/baby.png", title: "Baby" }
];
const CategoryHeading = "Shop by Category"

const MembershipSlides = [
    { url: "/images/member-1.jpg", title: "Exclusive Drops" },
    { url: "/images/member-2.jpg", title: "Member Rewards" },
    { url: "/images/member-3.jpg", title: "Early Access" },
    { url: "/images/member-4.jpg", title: "Personalized Styling" },
    { url: "/images/member-5.jpg", title: "Exclusive Sales" },
    { url: "/images/member-6.jpg", title: "Limited Edition Gear" },
  ];
  const MembershipHeading = "Nike Membership";

const Home = () => {
    return (
      <div>
        <Navbar />
        {/* Add more components below */}
        <Header />
        <Carousel slides={homeSlides} heading={heading}/>
        <Hero
          heading="Air Jordan High' 85 is Back."
          para="Step into the future of sneakers—where innovation meets style. Experience the next evolution in footwear today!"
          imageUrl="/images/jordan-1.png"
          altText="Nike Air Max Shoe"
        />
        <Carousel slides={CategorySlides} heading={CategoryHeading}/>
        <Hero
          heading="Experience the Future of Sneakers."
          para="Explore of our Iconic Jordans"
          imageUrl="/images/jordan-2.png"
          altText="Nike Air Max Shoe"
          reverse={true}
        />
        <MembershipCarousel slides={MembershipSlides} heading={MembershipHeading} />
        <Footer />
      </div>
    );
  };

export default Home;