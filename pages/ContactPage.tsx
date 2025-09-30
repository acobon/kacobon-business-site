
import React, { useEffect } from 'react';

const ContactPage: React.FC = () => {

    useEffect(() => {
        document.title = 'Contact Us | KA Cobon Digital Marketing';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Get in touch with KA Cobon Digital Marketing in Indianapolis. Schedule a free consultation for expert digital marketing, web design, and CRM services.');
        }
    }, []);

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <header className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
                    <p className="mt-4 text-lg">We're here to help you grow. Let's start the conversation.</p>
                </div>
            </header>

            {/* Contact Info and Map Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-dark-gray mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <svg className="h-8 w-8 text-accent flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Address</h3>
                                        <address className="not-italic text-gray-600">
                                            3223 Summersong Drive<br/>Indianapolis, IN 46241
                                        </address>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <svg className="h-8 w-8 text-accent flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Phone</h3>
                                        <a href="tel:+13175004946" className="text-gray-600 hover:text-accent transition-colors">317-500-4946</a>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                   <svg className="h-8 w-8 text-accent flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Email</h3>
                                        <a href="mailto:contact@kacobon.cc" className="text-gray-600 hover:text-accent transition-colors">contact@kacobon.cc</a>
                                    </div>
                                </div>
                                {/* Hours */}
                                <div className="flex items-start space-x-4">
                                    <svg className="h-8 w-8 text-accent flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <div>
                                        <h3 className="text-xl font-semibold text-primary">Hours of Operation</h3>
                                        <p className="text-gray-600">Monday - Friday<br/>9:00 AM - 5:00 PM (EST)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Map */}
                        <div>
                            <h2 className="text-3xl font-bold text-dark-gray mb-6">Our Location</h2>
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                                <iframe 
                                    src="https://maps.google.com/maps?q=3223%20Summersong%20Drive%20Indianapolis%2C%20IN%2046241&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="KA Cobon Digital Marketing Location"
                                    aria-label="Map showing business location at 3223 Summersong Drive, Indianapolis, IN 46241">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-20 bg-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <h2 className="text-3xl font-bold text-dark-gray mb-4">Schedule a Free Consultation</h2>
                     <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Ready to discuss your project? We offer a no-obligation consultation to understand your needs and see how we can help you succeed.</p>
                     <a href="mailto:contact@kacobon.cc?subject=Free%20Consultation%20Request" className="bg-accent hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 inline-block">
                        Email Us to Schedule
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
