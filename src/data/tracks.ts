import AgricultureImg from '../assets/Agriculture.jpg';
import HealthcareImg from '../assets/HealthCare.jpg';
import EducationImg from '../assets/Education.jpg';
import SmartCityImg from '../assets/SmartCity.jpg';
import FintechImg from '../assets/Fintech.jpg';
import type { Track } from '../types';

export const TRACKS_DATA: Track[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    label: 'agriculture',
    image: AgricultureImg,
    description: 'Empowering Myanmar farming communities with AI crop diagnostics, yield prediction, climate resilience modeling, and smart market access tools.',
    prizes: ['$1,500 First Place', 'AgriTech Seed Incubation', 'Cloud Compute Credits'],
    mentors: ['Dr. Aung Kyaw (AgriAI Lead)', 'Daw May Thu (Smart Farming Specialist)']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    label: 'healthcare',
    image: HealthcareImg,
    description: 'Developing affordable AI triage systems, medical imaging diagnostics, tele-health chatbots in native languages, and maternal health monitoring.',
    prizes: ['$1,500 First Place', 'HealthTech Innovation Grant', 'Direct Mentorship'],
    mentors: ['Dr. Tin Win (Digital Health Director)', 'U Than Htoo (AI BioMedical Researcher)']
  },
  {
    id: 'education',
    name: 'Education',
    label: 'education',
    image: EducationImg,
    description: 'Creating localized AI tutors, accessible learning tools for remote schools, adaptive curricula, and automated grading for regional dialects.',
    prizes: ['$1,500 First Place', 'EdTech Fellowship', 'UCSM Lab Access'],
    mentors: ['Prof. Khin San (Dean of CS)', 'U Kyaw Zwa (EdTech Pioneer)']
  },
  {
    id: 'smart-city',
    name: 'Smart City',
    label: 'smart city',
    image: SmartCityImg,
    description: 'Smart urban planning AI, real-time traffic management for Mandalay, automated waste processing visual recognition, and energy grid optimization.',
    prizes: ['$1,500 First Place', 'Mandalay Smart City Partnership', 'Hardware Grants'],
    mentors: ['U Min Lwin (Urban AI Engineer)', 'Daw Thida Soe (IoT & Smart Cities)']
  },
  {
    id: 'fintech',
    name: 'FinTech',
    label: 'fintech',
    image: FintechImg,
    description: 'AI-driven microfinance scoring for rural entrepreneurs, fraud prevention algorithms, native OCR document verification, and peer-to-peer security.',
    prizes: ['$1,500 First Place', 'FinTech Incubator Entry', 'Bank API Sandbox Access'],
    mentors: ['U Aung Naing (FinTech Architect)', 'Daw Nilar Myint (Risk AI Lead)']
  }
];
