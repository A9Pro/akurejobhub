// DEMO DATA ONLY. Replaced by Supabase queries in the database phase.
export type Job = {
  id: string;
  title: string;
  employer: string;
  location: string;
  category: string;
  type: string;
  salary?: string;
  salaryMin?: number;
  salaryMax?: number;
  postedAgo: string;
  postedDays: number;
};

export const locations = [
  "All Ondo State",
  "Akure",
  "Ondo Town",
  "Owo",
  "Ikare",
  "Ore",
  "Okitipupa",
  "Ile-Oluji",
];

export const categories = [
  "Sales & Marketing",
  "Administration",
  "Education",
  "IT & Tech",
  "Healthcare",
  "Construction",
  "Hospitality",
  "Others",
];

export const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Remote"];

export const salaryRanges = [
  { value: "", label: "Any" },
  { value: "0-50000", label: "Under ₦50,000" },
  { value: "50000-100000", label: "₦50,000 – ₦100,000" },
  { value: "100000-200000", label: "₦100,000 – ₦200,000" },
  { value: "200000-", label: "Above ₦200,000" },
];

export const allJobs: Job[] = [
  {
    id: "sales-representative",
    title: "Sales Representative",
    employer: "BrightStar Ventures",
    location: "Akure, Ondo State",
    category: "Sales & Marketing",
    type: "Full-time",
    salary: "₦60,000 – ₦150,000/month",
    salaryMin: 60000,
    salaryMax: 150000,
    postedAgo: "3 days ago",
    postedDays: 3,
  },
  {
    id: "administrative-officer",
    title: "Administrative Officer",
    employer: "Crown Global Services",
    location: "Alagbaka, Akure",
    category: "Administration",
    type: "Full-time",
    salary: "₦70,000 – ₦120,000/month",
    salaryMin: 70000,
    salaryMax: 120000,
    postedAgo: "4 days ago",
    postedDays: 4,
  },
  {
    id: "primary-school-teacher",
    title: "Primary School Teacher",
    employer: "Future Stars Academy",
    location: "Ondo Town, Ondo State",
    category: "Education",
    type: "Full-time",
    salary: "₦60,000 – ₦90,000/month",
    salaryMin: 60000,
    salaryMax: 90000,
    postedAgo: "3 days ago",
    postedDays: 3,
  },
  {
    id: "it-support-specialist",
    title: "IT Support Specialist",
    employer: "TechBridge Solutions",
    location: "Akure, Ondo State",
    category: "IT & Tech",
    type: "Contract",
    salary: "₦100,000 – ₦180,000/month",
    salaryMin: 100000,
    salaryMax: 180000,
    postedAgo: "5 days ago",
    postedDays: 5,
  },
  {
    id: "customer-service-representative",
    title: "Customer Service Representative",
    employer: "Global Care Ltd",
    location: "Akure, Ondo State",
    category: "Administration",
    type: "Full-time",
    salary: "₦55,000 – ₦80,000/month",
    salaryMin: 55000,
    salaryMax: 80000,
    postedAgo: "1 week ago",
    postedDays: 7,
  },
  {
    id: "registered-nurse",
    title: "Registered Nurse",
    employer: "Ondo Community Clinic",
    location: "Owo, Ondo State",
    category: "Healthcare",
    type: "Full-time",
    salary: "₦90,000 – ₦160,000/month",
    salaryMin: 90000,
    salaryMax: 160000,
    postedAgo: "2 days ago",
    postedDays: 2,
  },
  {
    id: "site-supervisor",
    title: "Site Supervisor",
    employer: "Hilltop Construction",
    location: "Akure, Ondo State",
    category: "Construction",
    type: "Contract",
    salary: "₦120,000 – ₦220,000/month",
    salaryMin: 120000,
    salaryMax: 220000,
    postedAgo: "6 days ago",
    postedDays: 6,
  },
  {
    id: "front-desk-officer",
    title: "Front Desk Officer",
    employer: "Lakeview Hotel",
    location: "Ikare, Ondo State",
    category: "Hospitality",
    type: "Full-time",
    salary: "₦50,000 – ₦75,000/month",
    salaryMin: 50000,
    salaryMax: 75000,
    postedAgo: "1 week ago",
    postedDays: 8,
  },
  {
    id: "graphic-design-intern",
    title: "Graphic Design Intern",
    employer: "Pixel Craft Studio",
    location: "Akure, Ondo State",
    category: "IT & Tech",
    type: "Internship",
    salary: "₦30,000 – ₦50,000/month",
    salaryMin: 30000,
    salaryMax: 50000,
    postedAgo: "2 days ago",
    postedDays: 2,
  },
  {
    id: "mathematics-teacher",
    title: "Secondary School Mathematics Teacher",
    employer: "Royal Heights College",
    location: "Ore, Ondo State",
    category: "Education",
    type: "Full-time",
    salary: "₦70,000 – ₦110,000/month",
    salaryMin: 70000,
    salaryMax: 110000,
    postedAgo: "1 week ago",
    postedDays: 9,
  },
  {
    id: "marketing-executive",
    title: "Marketing Executive",
    employer: "Greenfield Agro",
    location: "Okitipupa, Ondo State",
    category: "Sales & Marketing",
    type: "Full-time",
    salary: "₦80,000 – ₦130,000/month",
    salaryMin: 80000,
    salaryMax: 130000,
    postedAgo: "1 week ago",
    postedDays: 10,
  },
  {
    id: "pharmacy-assistant",
    title: "Pharmacy Assistant",
    employer: "Wellspring Pharmacy",
    location: "Akure, Ondo State",
    category: "Healthcare",
    type: "Part-time",
    salary: "₦40,000 – ₦65,000/month",
    salaryMin: 40000,
    salaryMax: 65000,
    postedAgo: "2 weeks ago",
    postedDays: 11,
  },
];

// Homepage "Latest Job Listings"
export const latestJobs: Job[] = [...allJobs]
  .sort((a, b) => a.postedDays - b.postedDays)
  .slice(0, 3);