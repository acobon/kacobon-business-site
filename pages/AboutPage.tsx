
import React, { useEffect } from 'react';
import { OWNER_PROFILES, TESTIMONIALS } from '../constants';
import TestimonialCard from '../components/TestimonialCard';

const AboutPage: React.FC = () => {

    useEffect(() => {
        document.title = 'About Us | KA Cobon Digital Marketing';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Adrian and Kory Cobon, the founders of KA Cobon Digital. An LGBTQ-owned, progressive digital marketing agency in Indianapolis with a global reach.');
        }
    }, []);

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <header className="bg-secondary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
                    <p className="mt-4 text-lg">Two passions, one mission: to build a better digital world.</p>
                </div>
            </header>

            {/* Our Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Mission & Values</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        We founded KA Cobon Digital Marketing on the belief that business can be a force for good. As a progressive, married gay couple, inclusivity, community, and authenticity are at the core of everything we do. Our mission is to provide exceptional digital marketing services that not only deliver results but also reflect our commitment to ethical practices and building genuine relationships.
                    </p>
                    <p className="text-lg text-gray-600">
                        Based in the heart of Indianapolis, we're proud of our local ties and equally proud of our ability to serve a diverse, global clientele.
                    </p>
                </div>
            </section>
            
            {/* Founder Profiles */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <h2 className="text-3xl md:text-4xl font-bold text-dark-gray text-center mb-12">The Team Behind the Vision</h2>
                    {OWNER_PROFILES.map((owner, index) => (
                        <div key={owner.name} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} ${index < OWNER_PROFILES.length - 1 ? 'mb-20' : ''}`}>
                            <div className="md:w-1/3 flex justify-center">
                                <img src={owner.imageUrl} alt={`Professional portrait of ${owner.name}`} className="w-64 h-64 rounded-full object-cover shadow-2xl"/>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="text-3xl font-bold text-primary mb-2">{owner.name}</h3>
                                <p className="text-lg font-semibold text-secondary mb-4">{owner.title}</p>
                                {owner.bio.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-700 mb-4">{paragraph}</p>
                                ))}
                                <h4 className="font-bold text-dark-gray mb-2">Areas of Expertise:</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {owner.expertise.map(skill => (
                                        <li key={skill} className="bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-gray">Trusted by Our Partners</h2>
                        <p className="mt-4 text-lg text-gray-600">We're proud to build relationships that last.</p>
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

export default AboutPage;
