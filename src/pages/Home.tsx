

import img1 from '../images/img1.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpg';

type Props = {};

const Home = (props: Props) => {
  return ( 
    <>
    <section >
        
     <div >
        <img src={img1} alt="" className="hero__img-box1" />
        <img src={img3} className="hero__img-box2"/>
        <img src={img2} alt="" className="hero__img-box3" />
      </div>
      <div className="maintext">
        <h1>Let's Travel...</h1>
        <p>To travel is to awaken the senses, to see things anew, to live life at its fullest,
         to experience joy and wonder, and to come back home with a deeper appreciation for what we have.</p>
      </div>
      <div className="form">
       <h4>Where you want to travel?</h4>
        <input type="text" placeholder=""/>
        <input type="submit" value="submit"/>
      </div>            
    </section>
</>
);
};

export default Home;
