export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  visual: {
    type: 'iaas' | 'paas' | 'management';
    items: ServiceItem[];
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
} 