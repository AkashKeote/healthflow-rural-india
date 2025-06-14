
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: 'consultation',
    chiefComplaint: ''
  });

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const appointmentTypes = [
    { value: 'consultation', label: 'सामान्य सलाह | General Consultation' },
    { value: 'followup', label: 'फॉलो-अप | Follow-up' },
    { value: 'emergency', label: 'आपातकाल | Emergency' },
    { value: 'vaccination', label: 'टीकाकरण | Vaccination' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to Supabase
    toast.success('अपॉइंटमेंट बुक हो गई! | Appointment booked successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">अपॉइंटमेंट बुक करें</h1>
            <p className="text-gray-600">Book Your Appointment</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  अपॉइंटमेंट विवरण | Appointment Details
                </CardTitle>
                <CardDescription>
                  कृपया सभी आवश्यक जानकारी भरें | Please fill all required information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">मरीज़ का नाम | Patient Name</Label>
                      <Input
                        id="patientName"
                        placeholder="Enter patient name"
                        value={formData.patientName}
                        onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">फोन नंबर | Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="appointmentDate">तारीख | Date</Label>
                      <Input
                        id="appointmentDate"
                        type="date"
                        value={formData.appointmentDate}
                        onChange={(e) => setFormData({...formData, appointmentDate: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentType">प्रकार | Type</Label>
                      <select
                        id="appointmentType"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.appointmentType}
                        onChange={(e) => setFormData({...formData, appointmentType: e.target.value})}
                      >
                        {appointmentTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>समय चुनें | Select Time</Label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={formData.appointmentTime === time ? "default" : "outline"}
                          onClick={() => setFormData({...formData, appointmentTime: time})}
                          className="text-sm"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chiefComplaint">मुख्य समस्या | Chief Complaint</Label>
                    <textarea
                      id="chiefComplaint"
                      placeholder="Describe your main health concern..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                      value={formData.chiefComplaint}
                      onChange={(e) => setFormData({...formData, chiefComplaint: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    अपॉइंटमेंट बुक करें | Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  PHC समय | PHC Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>सोमवार - शुक्रवार</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>शनिवार</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>रविवार</span>
                    <span>बंद | Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  उपलब्ध डॉक्टर | Available Doctors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Dr. Raj Kumar</p>
                    <p className="text-sm text-gray-600">सामान्य चिकित्सा | General Medicine</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Dr. Priya Sharma</p>
                    <p className="text-sm text-gray-600">स्त्री रोग | Gynecology</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="font-medium">Dr. Suresh Patel</p>
                    <p className="text-sm text-gray-600">बाल रोग | Pediatrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
