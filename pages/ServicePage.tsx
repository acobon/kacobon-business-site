
import React, { useEffect } from 'react';
import type { Service } from '../types';
import { TESTIMONIALS } from '../constants';
import TestimonialCard from '../components/TestimonialCard';
import { Link } from 'react-router-dom';

interface ServicePageProps {
  service: Service;
}

const ServicePage: React.FC<ServicePageProps> = ({ service }) => {
    
    useEffect(() => {
        document.title = service.metaTitle;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', service.metaDescription);
        }
    }, [service]);

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <header className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <div className="flex justify-center items-center mb-4">
                        <service.icon className="h-16 w-16 text-accent"/>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                    <p className="mt-4 text-lg md:text-xl text-secondary max-w-3xl mx-auto">
                        {service.tagline}
                    </p>
                </div>
            </header>

            {/* Service Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose lg:prose-lg text-gray-700">
                        <h2 className="text-3xl font-bold text-dark-gray">What We Offer</h2>
                        <p>{service.description}</p>
                        <p>We combine local expertise of the Indianapolis market with global best practices to deliver solutions that are both relevant and world-class. Your success is our primary goal.</p>
                    </div>
                    <div>
                        <img src={`https://picsum.photos/seed/${service.path}/600/400`} alt={`${service.title} service in action`} className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-dark-gray">Key Benefits of Our Service</h2>
                        <p className="mt-4 text-lg text-gray-600">How we drive tangible results for your business.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <svg className="h-8 w-8 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Trust Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">Client Trust Signals</h2>
                        <p className="mt-4 text-lg text-gray-600">See why businesses in Indianapolis and globally trust KA Cobon Digital.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                     <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
                     <p className="text-lg mb-8 max-w-2xl mx-auto">Let's discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.</p>
                     <Link to="/#contact" className="bg-accent hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
