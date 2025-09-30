
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, OWNER_PROFILES } from '../constants';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-primary text-white pt-24 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">Digital Marketing for a Modern World</h1>
                    <p className="mt-4 text-lg md:text-xl text-secondary">
                        A progressive digital marketing agency in Indianapolis with 15+ years of collective experience serving local and global clients.
                    </p>
                    <div className="mt-8">
                        <Link to="/services/digital-marketing" className="bg-accent hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">Our Core Services</h2>
                        <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for your digital success.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {SERVICES.map((service) => (
                            <Link to={service.path} key={service.title} className="group block bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <service.icon className="h-12 w-12 text-accent mb-4" />
                                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.tagline}</p>
                                <span className="text-accent font-semibold mt-4 inline-block group-hover:underline">Learn More</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">Meet Our Founders</h2>
                         <p className="mt-4 text-lg text-gray-600">Driven by passion, expertise, and progressive values.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {OWNER_PROFILES.map((owner) => (
                            <div key={owner.name} className="flex flex-col sm:flex-row items-center text-center sm:text-left bg-light-gray p-8 rounded-lg shadow-sm">
                                <img src={owner.imageUrl} alt={`Profile of ${owner.name}`} className="w-32 h-32 rounded-full mb-4 sm:mb-0 sm:mr-8 object-cover"/>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary">{owner.name}</h3>
                                    <p className="text-md font-semibold text-secondary mb-2">{owner.title}</p>
                                    <p className="text-gray-600">{owner.bio[0]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/about" className="text-accent hover:underline font-semibold">Learn more about our story &rarr;</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">What Our Clients Say</h2>
                        <p className="mt-4 text-lg text-gray-600">Building trust with Indianapolis businesses and partners worldwide.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial) => (
                            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
