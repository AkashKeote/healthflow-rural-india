
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'hindi' | 'english' | 'marathi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hindi: {
    // Navigation
    dashboard: 'डैशबोर्ड',
    appointments: 'अपॉइंटमेंट्स',
    healthRecords: 'स्वास्थ्य रिकॉर्ड',
    familyHealth: 'पारिवारिक स्वास्थ्य',
    healthBot: 'स्वास्थ्य बॉट',
    resourceFinder: 'संसाधन खोजक',
    queueManager: 'क्यू प्रबंधन',
    logout: 'लॉगआउट',
    
    // Common
    welcome: 'नमस्ते',
    hello: 'नमस्कार',
    loading: 'लोड हो रहा है...',
    save: 'सेव करें',
    cancel: 'रद्द करें',
    submit: 'जमा करें',
    close: 'बंद करें',
    
    // Dashboard
    healthDashboard: 'स्वास्थ्य डैशबोर्ड',
    yourHealthStatus: 'आपकी स्वास्थ्य स्थिति',
    overallHealth: 'समग्र स्वास्थ्य',
    pendingAppointments: 'लंबित अपॉइंटमेंट्स',
    followupRequired: 'फॉलो-अप आवश्यक',
    bookAppointment: 'अपॉइंटमेंट बुक करें',
    scheduleVisit: 'डॉक्टर के साथ मुलाकात का समय निर्धारित करें',
    queueStatus: 'क्यू स्थिति',
    checkPosition: 'क्यू में अपनी स्थिति जांचें',
    getHealthAdvice: 'AI सहायक से स्वास्थ्य सलाह लें',
    findResources: 'नजदीकी स्वास्थ्य सुविधाओं का पता लगाएं',
    viewMedicalHistory: 'अपना चिकित्सा इतिहास देखें',
    manageFamilyRecords: 'परिवारिक सदस्यों के रिकॉर्ड प्रबंधित करें',
    recentHealthRecords: 'हाल की स्वास्थ्य रिकॉर्ड',
    upcomingAppointments: 'आगामी अपॉइंटमेंट्स',
    viewAllRecords: 'सभी रिकॉर्ड देखें',
    viewAllAppointments: 'सभी अपॉइंटमेंट्स देखें'
  },
  english: {
    // Navigation
    dashboard: 'Dashboard',
    appointments: 'Appointments',
    healthRecords: 'Health Records',
    familyHealth: 'Family Health',
    healthBot: 'Health Bot',
    resourceFinder: 'Resource Finder',
    queueManager: 'Queue Manager',
    logout: 'Logout',
    
    // Common
    welcome: 'Welcome',
    hello: 'Hello',
    loading: 'Loading...',
    save: 'Save',
    cancel: 'Cancel',
    submit: 'Submit',
    close: 'Close',
    
    // Dashboard
    healthDashboard: 'Health Dashboard',
    yourHealthStatus: 'Your Health Status',
    overallHealth: 'Overall Health',
    pendingAppointments: 'Pending Appointments',
    followupRequired: 'Follow-up Required',
    bookAppointment: 'Book Appointment',
    scheduleVisit: 'Schedule a visit with your doctor',
    queueStatus: 'Queue Status',
    checkPosition: 'Check your position in queue',
    getHealthAdvice: 'Get health advice from AI assistant',
    findResources: 'Locate nearby health facilities',
    viewMedicalHistory: 'View your medical history',
    manageFamilyRecords: 'Manage family member records',
    recentHealthRecords: 'Recent Health Records',
    upcomingAppointments: 'Upcoming Appointments',
    viewAllRecords: 'View All Records',
    viewAllAppointments: 'View All Appointments'
  },
  marathi: {
    // Navigation
    dashboard: 'डॅशबोर्ड',
    appointments: 'भेटीचा वेळ',
    healthRecords: 'आरोग्य नोंदी',
    familyHealth: 'कौटुंबिक आरोग्य',
    healthBot: 'आरोग्य बॉट',
    resourceFinder: 'संसाधन शोधक',
    queueManager: 'रांग व्यवस्थापन',
    logout: 'लॉगआउट',
    
    // Common
    welcome: 'स्वागत',
    hello: 'नमस्कार',
    loading: 'लोड होत आहे...',
    save: 'जतन करा',
    cancel: 'रद्द करा',
    submit: 'सबमिट करा',
    close: 'बंद करा',
    
    // Dashboard
    healthDashboard: 'आरोग्य डॅशबोर्ड',
    yourHealthStatus: 'तुमची आरोग्य स्थिती',
    overallHealth: 'एकूण आरोग्य',
    pendingAppointments: 'प्रलंबित भेटी',
    followupRequired: 'पुढील तपासणी आवश्यक',
    bookAppointment: 'भेट बुक करा',
    scheduleVisit: 'डॉक्टरांसोबत भेटीचा वेळ ठरवा',
    queueStatus: 'रांग स्थिती',
    checkPosition: 'रांगेत तुमची स्थिती तपासा',
    getHealthAdvice: 'AI सहाय्यकाकडून आरोग्य सल्ला घ्या',
    findResources: 'जवळील आरोग्य सुविधा शोधा',
    viewMedicalHistory: 'तुमचा वैद्यकीय इतिहास पहा',
    manageFamilyRecords: 'कुटुंबातील सदस्यांच्या नोंदी व्यवस्थापित करा',
    recentHealthRecords: 'अलीकडील आरोग्य नोंदी',
    upcomingAppointments: 'येणाऱ्या भेटी',
    viewAllRecords: 'सर्व नोंदी पहा',
    viewAllAppointments: 'सर्व भेटी पहा'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
