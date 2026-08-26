import type { ReactNode } from "react";

export interface FeatureCardData {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StepData {
  number: number;
  title: string;
  description?: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface VentureNode {
  key: string;
  name: string;
  color: string;
  description: string;
  logo?: string;
}

export interface PricingPlan {
  name: string;
  originalPrice: string;
  price: string;
  discountLabel: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ArticleCard {
  image: string;
  title: string;
  excerpt: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
}

export interface CaseStudyCard {
  image: string;
  label: string;
  title: string;
  description: string;
}
