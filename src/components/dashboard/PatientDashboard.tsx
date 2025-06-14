
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MessageCircle, MapPin, FileText, LogOut, Heart, UserPlus } from 'lucide-react';

const PatientDashboard = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const quickActions = [
    {
      title: 'Book Appointment',
      description: 'Schedule a visit with your doctor',
      icon: Calendar,
      color: 'bg-blue-500',
      action: () => navigate('/appointments')
    },
    {
      title: 'Queue Status',
      description: 'Check your position in queue',
      icon: Clock,
      color: 'bg-green-500',
      action: () => navigate('/queuemanager')
    },
    {
      title: 'Health Bot',
      description: 'Get health advice from AI assistant',
      icon: MessageCircle,
      color: 'bg-purple-500',
      action: () => navigate('/healthbot')
    },
    {
      title: 'Find Resources',
      description: 'Locate nearby health facilities',
      icon: MapPin,
      color: 'bg-orange-500',
      action: () => navigate('/resourcefinder')
    },
    {
      title: 'Health Records',
      description: 'View your medical history',
      icon: FileText,
      color: 'bg-indigo-500',
      action: () => navigate('/health-records')
    },
    {
      title: 'Family Health',
      description: 'Manage family member records',
      icon: UserPlus,
      color: 'bg-pink-500',
      action: () => navigate('/family-health')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">नमस्ते, {profile?.name}</h1>
            <p className="text-gray-600">स्वास्थ्य डैशबोर्ड | Health Dashboard</p>
          </div>
          <Button variant="outline" onClick={signOut} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Health Status Card */}
        <Card className="mb-8 bg-gradient-to-r from-green-100 to-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              आपकी स्वास्थ्य स्थिति | Your Health Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">Good</p>
                <p className="text-sm text-gray-600">Overall Health</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">2</p>
                <p className="text-sm text-gray-600">Pending Appointments</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">1</p>
                <p className="text-sm text-gray-600">Follow-up Required</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={action.action}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className={`p-2 rounded-lg ${action.color}`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  {action.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{action.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                हाल की स्वास्थ्य रिकॉर्ड | Recent Health Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">सामान्य जांच | General Checkup</p>
                      <p className="text-sm text-gray-600">Dr. Sharma - PHC Sitapur</p>
                    </div>
                    <p className="text-sm text-gray-500">2 दिन पहले</p>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">रक्त जांच | Blood Test</p>
                      <p className="text-sm text-gray-600">Lab Report Available</p>
                    </div>
                    <p className="text-sm text-gray-500">1 सप्ताह पहले</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  सभी रिकॉर्ड देखें | View All Records
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                आगामी अपॉइंटमेंट्स | Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Dr. Patel - सामान्य चिकित्सा</p>
                      <p className="text-sm text-gray-600">PHC Ramnagar</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">कल | Tomorrow</p>
                      <p className="text-sm text-gray-500">10:30 AM</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Dr. Kumar - फॉलो-अप</p>
                      <p className="text-sm text-gray-600">PHC Sitapur</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">15 Jan</p>
                      <p className="text-sm text-gray-500">2:00 PM</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  सभी अपॉइंटमेंट्स देखें | View All Appointments
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
