
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus, Users, Calendar, ArrowLeft, Heart, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const FamilyHealth = () => {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    dateOfBirth: '',
    gender: '',
    bloodGroup: '',
    phone: ''
  });

  const familyMembers = [
    {
      id: 1,
      name: 'राम कुमार | Ram Kumar',
      relation: 'पति | Husband',
      age: 45,
      gender: 'Male',
      bloodGroup: 'B+',
      lastVisit: '2024-06-05',
      healthStatus: 'Good',
      phone: '+91 9876543210'
    },
    {
      id: 2,
      name: 'प्रिया कुमारी | Priya Kumari',
      relation: 'बेटी | Daughter',
      age: 16,
      gender: 'Female',
      bloodGroup: 'O+',
      lastVisit: '2024-05-20',
      healthStatus: 'Good',
      phone: '+91 9876543211'
    },
    {
      id: 3,
      name: 'अमित कुमार | Amit Kumar',
      relation: 'बेटा | Son',
      age: 12,
      gender: 'Male',
      bloodGroup: 'B+',
      lastVisit: '2024-06-01',
      healthStatus: 'Good',
      phone: 'N/A'
    }
  ];

  const relations = [
    { value: 'spouse', label: 'पति/पत्नी | Spouse' },
    { value: 'child', label: 'बच्चा | Child' },
    { value: 'parent', label: 'माता-पिता | Parent' },
    { value: 'sibling', label: 'भाई-बहन | Sibling' },
    { value: 'other', label: 'अन्य | Other' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('परिवारिक सदस्य जोड़ा गया! | Family member added successfully!');
    setShowAddForm(false);
    setFormData({
      name: '',
      relation: '',
      dateOfBirth: '',
      gender: '',
      bloodGroup: '',
      phone: ''
    });
  };

  const getHealthStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'good': return 'bg-green-100 text-green-800';
      case 'fair': return 'bg-yellow-100 text-yellow-800';
      case 'poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">पारिवारिक स्वास्थ्य</h1>
            <p className="text-gray-600">Family Health Management</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold">{familyMembers.length}</p>
                  <p className="text-sm text-gray-600">कुल सदस्य | Total Members</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Heart className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold">{familyMembers.filter(m => m.healthStatus === 'Good').length}</p>
                  <p className="text-sm text-gray-600">स्वस्थ | Healthy</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm text-gray-600">आगामी चेकअप | Upcoming Checkups</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <UserPlus className="h-8 w-8 text-purple-600" />
                <div>
                  <Button onClick={() => setShowAddForm(true)} size="sm">
                    सदस्य जोड़ें | Add Member
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Family Member Form */}
        {showAddForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>नया परिवारिक सदस्य जोड़ें | Add New Family Member</CardTitle>
              <CardDescription>
                कृपया सभी आवश्यक जानकारी भरें | Please fill all required information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">नाम | Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relation">रिश्ता | Relation</Label>
                    <select
                      id="relation"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.relation}
                      onChange={(e) => setFormData({...formData, relation: e.target.value})}
                      required
                    >
                      <option value="">Select relation</option>
                      {relations.map((relation) => (
                        <option key={relation.value} value={relation.value}>
                          {relation.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">जन्म तिथि | Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">लिंग | Gender</Label>
                    <select
                      id="gender"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.gender}
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="male">पुरुष | Male</option>
                      <option value="female">महिला | Female</option>
                      <option value="other">अन्य | Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodGroup">रक्त समूह | Blood Group</Label>
                    <Input
                      id="bloodGroup"
                      placeholder="e.g., A+, B-, O+"
                      value={formData.bloodGroup}
                      onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">फोन नंबर | Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit">
                    सदस्य जोड़ें | Add Member
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    रद्द करें | Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Family Members List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">परिवारिक सदस्य | Family Members</h2>
          
          {familyMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.relation} • {member.age} वर्ष | years old</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getHealthStatusColor(member.healthStatus)}`}>
                        {member.healthStatus}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700">लिंग | Gender:</p>
                        <p className="text-gray-600">{member.gender}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">रक्त समूह | Blood Group:</p>
                        <p className="text-gray-600">{member.bloodGroup}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">अंतिम विज़िट | Last Visit:</p>
                        <p className="text-gray-600">{new Date(member.lastVisit).toLocaleDateString('hi-IN')}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">फोन | Phone:</p>
                        <p className="text-gray-600">{member.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      अपॉइंटमेंट | Appointment
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      संपादित करें | Edit
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyHealth;
