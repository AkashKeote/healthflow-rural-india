
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Users, Calendar, FileText, Package, BarChart3, LogOut, Activity, AlertTriangle } from 'lucide-react';

const StaffDashboard = () => {
  const { profile, signOut } = useAuth();
  const navigate = useNavigate();

  const statsCards = [
    {
      title: 'आज के मरीज़ | Patients Today',
      value: '24',
      change: '+3 from yesterday',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'अपॉइंटमेंट्स | Appointments',
      value: '18',
      change: '6 pending',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      title: 'कम स्टॉक | Low Stock Items',
      value: '5',
      change: 'Need reorder',
      icon: Package,
      color: 'text-orange-600'
    },
    {
      title: 'क्यू लेंथ | Queue Length',
      value: '7',
      change: 'Avg wait: 15 min',
      icon: BarChart3,
      color: 'text-purple-600'
    }
  ];

  const quickActions = [
    {
      title: 'रोगी प्रबंधन | Patient Management',
      description: 'Manage patient records and appointments',
      icon: Users,
      action: () => navigate('/phcdashboard')
    },
    {
      title: 'क्यू प्रबंधन | Queue Management', 
      description: 'Manage patient queues and wait times',
      icon: BarChart3,
      action: () => navigate('/queuemanager')
    },
    {
      title: 'इन्वेंटरी | Inventory Management',
      description: 'Track medicines and supplies',
      icon: Package,
      action: () => navigate('/inventory')
    },
    {
      title: 'रिपोर्ट्स | Generate Reports',
      description: 'Generate health and administrative reports',
      icon: FileText,
      action: () => navigate('/reports')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">PHC स्टाफ डैशबोर्ड</h1>
            <p className="text-gray-600">नमस्ते, {profile?.name} | {profile?.user_type === 'doctor' ? 'Doctor' : 'PHC Staff'}</p>
          </div>
          <Button variant="outline" onClick={signOut} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Alert Banner */}
        <Card className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-800">ध्यान दें | Attention Required</p>
                <p className="text-sm text-orange-700">5 medicines are running low in stock. Please reorder soon.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={action.action}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <action.icon className="h-5 w-5" />
                  {action.title}
                </CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Open Module
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                आज की गतिविधि | Today's Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span>मरीज़ पंजीकृत | Patients Registered</span>
                  <span className="font-bold">8</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span>अपॉइंटमेंट्स पूरे | Appointments Completed</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span>दवाइयां वितरित | Medicines Dispensed</span>
                  <span className="font-bold">45</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>त्वरित नोट्स | Quick Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Emergency Contact Update</p>
                  <p className="text-xs text-gray-600">Dr. Singh will be on call this weekend</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Vaccination Drive</p>
                  <p className="text-xs text-gray-600">COVID booster camp scheduled for next week</p>
                </div>
                <Button variant="outline" className="w-full">
                  Add Note
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
