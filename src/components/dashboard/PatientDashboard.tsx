
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, Clock, MessageCircle, MapPin, FileText, LogOut } from 'lucide-react';

const PatientDashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {profile?.name}</h1>
            <p className="text-gray-600">Patient Dashboard</p>
          </div>
          <Button variant="outline" onClick={signOut} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
                Book Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Schedule a visit with your doctor</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-green-600" />
                Queue Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Check your position in queue</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageCircle className="h-5 w-5 text-purple-600" />
                Health Bot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Get health advice from AI assistant</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-orange-600" />
                Find Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Locate nearby health facilities</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Health Records */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Health Records
              </CardTitle>
              <CardDescription>Your recent medical visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">General Checkup</p>
                      <p className="text-sm text-gray-600">Dr. Sharma</p>
                    </div>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Blood Test</p>
                      <p className="text-sm text-gray-600">Lab Report</p>
                    </div>
                    <p className="text-sm text-gray-500">1 week ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled visits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Dr. Patel</p>
                      <p className="text-sm text-gray-600">General Medicine</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Tomorrow</p>
                      <p className="text-sm text-gray-500">10:30 AM</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View All Appointments
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
