import React from 'react';
import styles from './Testimonials.module.css';
import { FaStar } from 'react-icons/fa';
import Testimonials1 from "../../../assets/Project-images/Testimonials1.png";
import Testimonials2 from "../../../assets/Project-images/Testimonials2.png";
import Testimonials3 from "../../../assets/Project-images/Testimonials3.png";

const testimonialsData = [
    {
        name: "Ashley Rosa",
        title: "Managing Director",
        text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 3,
        imageUrl: Testimonials1
    },
    {
        name: "Crystal Waston",
        title: "Customer",
        text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        imageUrl: Testimonials2
    },
    {
        name: "Michael Smith",
        title: "Company CEO",
        text: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
        imageUrl: Testimonials3 
    }
];

const Testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <h2 className={styles.heading}>Our testimonials</h2>
            <div className={styles.testimonialList}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className={styles.testimonial}>
                        <div className={styles.topSection}>
                            <img 
                                src={testimonial.imageUrl} 
                                alt={testimonial.name} 
                                className={styles.image}
                            />
                            <div>
                                <h3 className={styles.name}>{testimonial.name}</h3>
                                <p className={styles.title}>{testimonial.title}</p>
                            </div>
                        </div>
                        <p className={styles.text}>{testimonial.text}</p>
                        <div className={styles.rating}>
                            {Array.from({ length: 5 }, (_, i) => (
                                <FaStar 
                                    key={i} 
                                    color={i < testimonial.rating ? "#ffc107" : "#e4e5e9"} 
                                />
                            ))}
                            <span className={styles.ratingNumber}>{testimonial.rating}.0</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
