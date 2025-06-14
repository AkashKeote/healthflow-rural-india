
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

const QueueStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const queueData = [
    { id: 1, name: "सीता देवी | Sita Devi", tokenNumber: "T001", status: "waiting", estimatedTime: "15 min", type: "सामान्य जांच" },
    { id: 2, name: "राम कुमार | Ram Kumar", tokenNumber: "T002", status: "called", estimatedTime: "Now", type: "फॉलो-अप" },
    { id: 3, name: "रीना पटेल | Rina Patel", tokenNumber: "T003", status: "waiting", estimatedTime: "25 min", type: "टीकाकरण" },
    { id: 4, name: "सुरेश शर्मा | Suresh Sharma", tokenNumber: "T004", status: "waiting", estimatedTime: "35 min", type: "सामान्य जांच" },
    { id: 5, name: "प्रिया यादव | Priya Yadav", tokenNumber: "T005", status: "waiting", estimatedTime: "45 min", type: "रक्त जांच" },
  ];

  const stats = {
    totalInQueue: queueData.filter(p => p.status === 'waiting').length,
    currentlyServing: queueData.filter(p => p.status === 'called').length,
    averageWaitTime: "20 मिनट",
    nextAvailableSlot: "2:30 PM"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'called': return 'bg-green-100 text-green-700 border-green-200';
      case 'waiting': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'called': return <CheckCircle className="h-4 w-4" />;
      case 'waiting': return <Clock className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'called': return 'बुलाया गया | Called';
      case 'waiting': return 'प्रतीक्षा में | Waiting';
      case 'completed': return 'पूर्ण | Completed';
      default: return status;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">क्यू स्थिति | Queue Status</h1>
        <p className="text-gray-600">वर्तमान समय | Current Time: {currentTime.toLocaleTimeString('hi-IN')}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{stats.totalInQueue}</p>
                <p className="text-sm text-gray-600">प्रतीक्षा में | In Queue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{stats.currentlyServing}</p>
                <p className="text-sm text-gray-600">वर्तमान में | Currently Serving</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">{stats.averageWaitTime}</p>
                <p className="text-sm text-gray-600">औसत प्रतीक्षा | Avg Wait</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-lg font-bold">{stats.nextAvailableSlot}</p>
                <p className="text-sm text-gray-600">अगला स्लॉट | Next Slot</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Queue List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            आज की क्यू | Today's Queue
          </CardTitle>
          <CardDescription>
            वर्तमान में प्रतीक्षा कर रहे मरीज़ | Patients currently waiting
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {queueData.map((patient, index) => (
              <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{patient.name}</p>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {patient.tokenNumber}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{patient.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">अनुमानित समय | Est. Time</p>
                    <p className="text-sm text-gray-600">{patient.estimatedTime}</p>
                  </div>
                  
                  <div className={`flex items-center gap-1 px-3 py-2 rounded-full border ${getStatusColor(patient.status)}`}>
                    {getStatusIcon(patient.status)}
                    <span className="text-sm font-medium">{getStatusText(patient.status)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex justify-center gap-4">
              <Button className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                नया टोकन लें | Get New Token
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                समय अपडेट करें | Update Time
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QueueStatus;
