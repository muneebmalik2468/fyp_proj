import React from 'react'
import './AboutUs.css'
import about_banner from '../Components/Assets/about_banner.jpg'

export const AboutUs = () => {

  return (
    <div className="aboutus-main">
    <div className='Aboutus-banner-image'>
    <img src={about_banner} alt="Banner" />
    <h1>About Us</h1>
    </div>
   

       

        <h2>Who We Are</h2>
        <p>Welcome to <strong>Glamour Hub</strong>, your ultimate online destination for all things fashion and beauty. Whether you're looking to refresh your wardrobe, enhance your makeup collection, or find the perfect accessories to complete your look, Glamour Hub is here to inspire and elevate your style.</p>

        <h2>Our Story</h2>
        <p><strong>Glamour Hub</strong> was born out of a love for fashion and beauty, with a mission to bring the latest trends and timeless essentials right to your doorstep. Our journey began with a vision to create a space where everyone can discover their personal style without limitations. Today, we’re proud to offer a diverse range of clothing, makeup, and accessories that cater to every taste, occasion, and mood.</p>

        <h2>Our Mission</h2>
        <p>At <strong>Glamour Hub</strong>, our mission is to empower you to express your unique style and confidence through our curated collections. We believe that fashion and beauty should be accessible, enjoyable, and a true reflection of who you are. Our commitment is to provide you with high-quality products, exceptional service, and a shopping experience that leaves you feeling inspired and fabulous.</p>

        <h2>Our Values</h2>
        <p><strong>Quality:</strong> We carefully select each item to ensure it meets our high standards, so you can shop with confidence.</p>
        <p><strong>Affordability:</strong> We believe that everyone deserves to look and feel their best, which is why we offer stylish and high-quality products at prices you'll love.</p>
        <p><strong>Customer-Centric:</strong> Your satisfaction is our top priority. From the moment you visit our site to the time your order arrives, we’re here to make sure your experience is nothing short of amazing.</p>

        <h2>What We Offer</h2>
        <p>Explore our extensive collections:</p>
        <ul>
            <li><strong>Clothing:</strong> From chic everyday wear to statement pieces for special occasions, our clothing selection is designed to make you look and feel your best.</li>
            <li><strong>Makeup:</strong> Discover a range of makeup products that enhance your natural beauty and let your personality shine through.</li>
            <li><strong>Accessories:</strong> Add the finishing touch to any outfit with our stylish accessories, including jewelry, handbags, and more.</li>
        </ul>

        <div className="aboutus-team">
            <h2>Meet the Team</h2>
            <p>Behind <strong>Glamour Hub</strong> is a dedicated team of fashion and beauty enthusiasts who are passionate about helping you find your perfect look. Our team works tirelessly to bring you the latest trends and timeless classics, ensuring there’s something for everyone.</p>
        </div>


        <h2>Get in Touch</h2>
        <p>We’d love to hear from you! Whether you have a question, need style advice, or just want to chat, feel free to reach out. Contact us at<b> <a href="mailto:[Email Address]">[Glamorhub@gmail.com]</a></b> or call us at [03218967521].Follow us on [Instagram,Facebook] for the latest trends, exclusive offers, and style tips.</p>

        <p>Thank you for choosing <strong>Glamour Hub</strong> as your style and beauty destination!</p>
    </div>

  )
}
