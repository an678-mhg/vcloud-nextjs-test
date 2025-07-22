export interface Benefit {
  id: string;
  title: string;
  description: string;
  metric: string;
  iconName: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  features: string[];
  gradientClass: string;
}

export interface UXHighlight {
  id: string;
  title: string;
  description: string;
}

export interface FinalCta {
  title: string;
  subtitle: string;
  primaryButton: string;
  secondaryButton: string;
  trustSignals: string[];
}

export interface TechSpec {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ComputePageData {
  hero: {
    badge: string;
    title: string;
    highlightText: string;
    titleEnd: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  whatIs: {
    title: string;
    description: string;
  };
  benefits: Benefit[];
  userExperience: UXHighlight[];
  features: Feature[];
  useCases: UseCase[];
  finalCTA: FinalCta;
} 