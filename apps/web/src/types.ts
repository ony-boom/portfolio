export type WorkExperience = {
  dates: {
    from: Date;
    to: Date;
  };

  company: string;
  companyUrl?: string;
  title: string;
  description: string;
};

export type Education = {
  school: string;
  schoolUrl?: string;
  description: string;
};
