// FIX: Import React to make its types available in this file.
import type * as React from 'react';

export interface Service {
  path: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  benefits: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface OwnerProfile {
    name: string;
    title: string;
    imageUrl: string;
    bio: string[];
    expertise: string[];
}
