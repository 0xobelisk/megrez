export interface Package {
  name: string;
  description: string;
  publisher: string;
  type?: 'favorite' | 'popular';
} 