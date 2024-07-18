import React, { useReducer } from 'react';
import introImage from './introImage.png'; // Path to your images
import dish1 from './dish1.png';
import dish2 from './dish2.png';
import dish3 from './dish3.png';
import testimonial1 from './testimonial1.png';
import testimonial2 from './testimonial2.png';
import testimonial3 from './testimonial3.png';
import testimonial4 from './testimonial4.png';
import contactImage from './contactImage.png';



function Main() {
    

    return (
        <main>
            {/* Intro */}
            <section style={{ display: 'flex', alignItems: 'center', margin: '20px 0', backgroundColor: '#495E57' }}>
                <div style={{ flex: 1, padding: '20px' }}>
                    <h1 style={{ color: '#F4CE14' }}>Little Lemon</h1>
                    <h4 style={{ color: '#FFFFFF' }}>Chicago</h4>
                    <p style={{ color: '#FFFFFF' }}>We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist..</p>
                </div>
                <div style={{ flex: 1 }}>
                    <img src={introImage} alt="Introduction" style={{ width: '100%' }} />
                </div>
            </section>

            {/* Special Dishes Section */}
            <section style={{ margin: '20px 0' }}>
                <h2>Special Dishes</h2>
                <button style={{ backgroundColor: '#F4CE14' }}>View Online Menu</button>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={dish1} alt="Dish 1" style={{ width: '100%' }} />
                        <p>Greek salad</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={dish2} alt="Dish 2" style={{ width: '100%' }} />
                        <p>Bruschetta</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={dish3} alt="Dish 3" style={{ width: '100%' }} />
                        <p>lemon dessert </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ margin: '20px 0', textAlign: "center" }}>
                <h1>Testimonials</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={testimonial1} alt="Testimonial 1" style={{ width: '100%' }} />
                        <p>Really enjoyed the atmosphere</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={testimonial2} alt="Testimonial 2" style={{ width: '100%' }} />
                        <p>the greek salad was excellent!</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={testimonial3} alt="Testimonial 3" style={{ width: '100%' }} />
                        <p>You have to try the Greek Salad</p>
                    </div>
                    <div style={{ flex: 1, padding: '10px' }}>
                        <img src={testimonial4} alt="Testimonial 4" style={{ width: '100%' }} />
                        <p>Awesome place peaceful atmosphere with
                            delicious food</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section style={{ display: 'flex', alignItems: 'center', margin: '20px 0', backgroundColor: '#495E57' }}>
                <div style={{ flex: 1, padding: '20px' }}>
                    <h2 style={{ color: '#F4CE14' }}>Little Lemon</h2>
                    <h4 style={{ color: '#FFFFFF' }} >Chicago</h4>
                    <p style={{ color: '#FFFFFF' }} >We are a family owned Mediterranean
                        restaurant,
                        focused on traditional recipes
                        served with a modern twist.
                        We make food with love.</p>
                </div>
                <div style={{ flex: 1 }}>
                    <img src={contactImage} alt="resturant" style={{ width: '100%' }} />
                </div>
            </section>
        </main>
    );
}

export default Main;