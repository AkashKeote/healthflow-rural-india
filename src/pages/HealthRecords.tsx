
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FileText, Download, Search, Calendar, ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HealthRecords = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const healthRecords = [
    {
      id: 1,
      date: '2024-06-10',
      type: 'सामान्य जांच | General Checkup',
      doctor: 'Dr. Raj Kumar',
      phc: 'PHC Sitapur',
      diagnosis: 'उच्च रक्तचाप | Hypertension',
      prescription: 'Amlodipine 5mg, Daily exercise',
      status: 'completed'
    },
    {
      id: 2,
      date: '2024-06-05',
      type: 'रक्त जांच | Blood Test',
      doctor: 'Lab Technician',
      phc: 'PHC Sitapur',
      diagnosis: 'मधुमेह नियंत्रण | Diabetes under control',
      prescription: 'Continue current medication',
      status: 'completed'
    },
    {
      id: 3,
      date: '2024-05-28',
      type: 'टीकाकरण | Vaccination',
      doctor: 'Nurse Sunita',
      phc: 'PHC Sitapur',
      diagnosis: 'COVID Booster',
      prescription: 'No side effects observed',
      status: 'completed'
    },
    {
      id: 4,
      date: '2024-05-15',
      type: 'फॉलो-अप | Follow-up',
      doctor: 'Dr. Priya Sharma',
      phc: 'PHC Ramnagar',
      diagnosis: 'पेट दर्द सुधार | Stomach pain improved',
      prescription: 'Antacid as needed',
      status: 'completed'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'सभी रिकॉर्ड | All Records' },
    { value: 'consultation', label: 'सलाह | Consultations' },
    { value: 'tests', label: 'जांच | Tests' },
    { value: 'vaccination', label: 'टीकाकरण | Vaccinations' }
  ];

  const filteredRecords = healthRecords.filter(record => {
    const matchesSearch = record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    
    const typeMatch = {
      'consultation': record.type.includes('सामान्य') || record.type.includes('फॉलो'),
      'tests': record.type.includes('जांच') || record.type.includes('Test'),
      'vaccination': record.type.includes('टीकाकरण')
    };
    
    return matchesSearch && typeMatch[selectedFilter as keyof typeof typeMatch];
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">स्वास्थ्य रिकॉर्ड</h1>
            <p className="text-gray-600">Health Records & Medical History</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">कुल रिकॉर्ड | Total Records</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">8</p>
                <p className="text-sm text-gray-600">सलाह | Consultations</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">3</p>
                <p className="text-sm text-gray-600">जांच | Tests</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">2</p>
                <p className="text-sm text-gray-600">टीकाकरण | Vaccinations</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="खोजें... | Search records..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                नया रिकॉर्ड | Add Record
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Records List */}
        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <Card key={record.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileText className="h-5 w-5" />
                      {record.type}
                    </CardTitle>
                    <CardDescription>
                      {record.doctor} - {record.phc}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(record.date).toLocaleDateString('hi-IN')}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">निदान | Diagnosis:</p>
                    <p className="text-sm text-gray-600">{record.diagnosis}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">दवा | Prescription:</p>
                    <p className="text-sm text-gray-600">{record.prescription}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRecords.length === 0 && (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">कोई रिकॉर्ड नहीं मिला | No records found</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HealthRecords;
