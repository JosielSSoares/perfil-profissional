export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  color: string;
}

export interface Skill {
  title: string;
  description: string;
  icon: string;
  variant?: 'primary' | 'surface' | 'accent';
}

export interface Certification {
  title: string;
  year: string;
  issuer: string;
  borderColor: string;
}
