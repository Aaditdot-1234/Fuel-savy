'use client'
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';   
import milestone from '../public/milestone.svg';   
import tyre from '../public/tyre.png';
import { useEffect, useRef, useState} from 'react'; 
import { useInView } from 'react-intersection-observer';  

<link rel="stylesheet" href="" />

const inter = Inter({ subsets: ['latin'] })

export default function Home() {  
  const { data: session } = useSession();
  const [containerVisible, setContainerVisible] = useState(true);
  const [ref, inView] = useInView();
  const div2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1, // Fully visible
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setContainerVisible(false); // Hide container when div2 is fully visible
      }
    }, options);

    if (div2Ref.current) {
      observer.observe(div2Ref.current);
    }

    return () => {
      if (div2Ref.current) {
        observer.unobserve(div2Ref.current);
      }
    };
  }, []); 

    return (
    <main className={styles.main}>
      <div className={styles.container} ref={ref}>
        <div className={styles.road}>
          {/* <Image src={road} alt="not found" /> */}
        </div>
        <div className={`${styles.header} ${inView ? styles.showheader : ''}`}>
          <h2>MileS</h2>
          <Image src={milestone} alt="not found" />
          <Image src={tyre} alt="not found" className={styles.rotation} />
          <h2>NE</h2>
        </div>
      </div>
      <div className={styles.overlay1}>
        <div className={styles.practice1}></div>
        <div className={styles.vision}>
          <div>
            <h2>Our Vision:</h2>
            <p>
              Our vision is to revolutionize transportation logistics by delivering the most efficient routes for our
              clients, optimizing cost, and minimizing time while championing environmental sustainability. We are
              committed to reducing carbon emissions, preserving our planet, and fostering a greener, healthier future
              for generations to come. Through innovative solutions and a dedication to excellence, we aim to redefine
              industry standards and inspire positive change worldwide.
            </p>
          </div>
          <div>
            <video className={styles.video} autoPlay loop muted>
              <source src="/map.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className={styles.services}> 
      <div className={styles.service}> 
        <h2>Our Services:</h2> 
        <p>
        We offer a wide variety of services.
        </p> 
      </div> 
      <div className={styles.servicesinner}> 
        <div>
          <h3>Mileage-Based Cost Calculation</h3>
          <p>Offer a primary tool that calculates various costs associated with car ownership based on mileage, such as fuel expenses, maintenance, insurance, and depreciation.</p>
        </div>
        <div>
          <h3>Fuel Efficiency Tips</h3>
          <p>Offer advice on improving fuel efficiency. This could include driving habits, tire pressure maintenance, and regular vehicle check-ups.</p>
        </div>
        <div>
          <h3>Cost Comparison Tool</h3>
          <p>Allow users to compare the costs of owning different types of vehicles based on their mileage. This can help prospective buyers make informed decisions.</p>
        </div>
        <div>
          <h3>Fuel Cost Calculator</h3>
          <p>Offer a calculator that estimates fuel costs over different periods (monthly, annually) based on the car's fuel efficiency and the average mileage driven.</p>
        </div> 
        <div>
          <h3>Total distance travelled</h3>
          <p>Keeps track of the all the places you have visited in the past month and gives a monthly record of how much distance was covered.</p>
        </div> 
        <div>
          <h3>Interactive Forums and Advice</h3>
          <p>Create a community forum where users can share experiences, advice, and tips related to vehicle maintenance, fuel efficiency, and other topics related to mileage.</p>
        </div> 
      </div>  
    </div>
      <div className={styles.footprint}>
        <div className={styles.overlay}>
          <h2>Environmet Friendly:</h2>
          <p>
          Our website plays a pivotal role in fostering environmental consciousness and sustainability by offering a vital service aimed at calculating carbon footprints and emissions associated with travel. By empowering users with the ability to accurately assess the environmental impact of their journeys, we encourage informed decision-making and promote eco-friendly transportation practices.
          </p>
        </div>
        <video className={styles.backgroundVideo} autoPlay loop muted>
          <source src="/footprint.mp4" type="video/mp4" />
        </video>
      </div> 
      <div className={styles.feedback_sec}>
        <div className={styles.Feedback}> 
            <div><p>Feedback</p></div> 
            <div className={styles.input1}>
                <input type="text" placeholder="First Name"/> 
                <input type="text" placeholder="Last Name"/>
            </div>
            <div>
                <input type="text" placeholder="E-mail"/>
            </div>
            <div>
                <input type="text" placeholder="Feedback"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
        <div className={styles.connections_upper}>   {/*delete this */}
        <div className='text-white'>{session?.user?.email }</div>
      <button className='text-white' onClick={() => signOut()}>Logout</button>
        </div>
      </div>
    </main>
  );
}