
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Users, Calendar, FileText, Package, BarChart3, LogOut } from 'lucide-react';

const StaffDashboard = () => {
  const { profile, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">PHC Staff Dashboard</h1>
            <p className="text-gray-600">Welcome, {profile?.name}</p>
          </div>
          <Button variant="outline" onClick={signOut} className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-blue-600" />
                Patients Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm text-gray-600">+3 from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-green-600" />
                Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">18</p>
              <p className="text-sm text-gray-600">6 pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="h-5 w-5 text-orange-600" />
                Low Stock Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-gray-600">Need reorder</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                Queue Length
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">7</p>
              <p className="text-sm text-gray-600">Avg wait: 15 min</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patient Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Patient Management
              </CardTitle>
              <CardDescription>Manage patient records and appointments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                View All Patients
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Manage Appointments
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Add Health Record
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Package className="h-4 w-4 mr-2" />
                Inventory Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Queue Management
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
