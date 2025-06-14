
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import PatientDashboard from '@/components/dashboard/PatientDashboard';
import StaffDashboard from '@/components/dashboard/StaffDashboard';

const Dashboard = () => {
  const { profile, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (profile?.user_type === 'phc_staff' || profile?.user_type === 'doctor') {
    return <StaffDashboard />;
  }

  return <PatientDashboard />;
};

export default Dashboard;
