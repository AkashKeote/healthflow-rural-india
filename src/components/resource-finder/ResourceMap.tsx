
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Clock, Star, Search, Filter } from 'lucide-react';

const ResourceMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const healthResources = [
    {
      id: 1,
      name: "जेनेरिक फार्मेसी | Generic Pharmacy",
      type: "Pharmacy",
      category: "pharmacy",
      address: "गांव केंद्र, सीतापुर | Village Centre, Sitapur",
      phone: "9823110001",
      distance: "0.5 km",
      rating: 4.2,
      hours: "8:00 AM - 9:00 PM",
      services: ["दवाइयां | Medicines", "प्राथमिक चिकित्सा | First Aid"],
      verified: true
    },
    {
      id: 2,
      name: "जीवन लैब | Jeevan Lab",
      type: "Diagnostic Lab",
      category: "lab",
      address: "मार्केट रोड, रामनगर | Market Road, Ramnagar",
      phone: "9856000023",
      distance: "1.2 km",
      rating: 4.5,
      hours: "7:00 AM - 7:00 PM",
      services: ["रक्त जांच | Blood Test", "X-Ray", "ECG"],
      verified: true
    },
    {
      id: 3,
      name: "एम्बुलेंस सेवा | Ambulance Service",
      type: "Emergency Transport",
      category: "transport",
      address: "PHC कैंपस | PHC Campus",
      phone: "108",
      distance: "0.8 km",
      rating: 4.8,
      hours: "24/7 Available",
      services: ["आपातकालीन परिवहन | Emergency Transport", "Basic Life Support"],
      verified: true
    },
    {
      id: 4,
      name: "आयुर्वेदिक क्लिनिक | Ayurvedic Clinic",
      type: "Alternative Medicine",
      category: "clinic",
      address: "पुराना बाजार | Old Market",
      phone: "9876543210",
      distance: "2.1 km",
      rating: 4.0,
      hours: "9:00 AM - 6:00 PM",
      services: ["आयुर्वेदिक इलाज | Ayurvedic Treatment", "हर्बल दवाइयां | Herbal Medicines"],
      verified: false
    },
    {
      id: 5,
      name: "मातृत्व केंद्र | Maternity Center",
      type: "Specialized Care",
      category: "clinic",
      address: "मुख्य सड़क | Main Road",
      phone: "9988776655",
      distance: "1.8 km",
      rating: 4.6,
      hours: "24/7 Emergency",
      services: ["प्रसव | Delivery", "प्रसव पूर्व देखभाल | Antenatal Care"],
      verified: true
    },
    {
      id: 6,
      name: "सामुदायिक स्वास्थ्य केंद्र | Community Health Center",
      type: "Government Health Center",
      category: "clinic",
      address: "ब्लॉक कार्यालय के पास | Near Block Office",
      phone: "9112233445",
      distance: "3.5 km",
      rating: 3.8,
      hours: "8:00 AM - 8:00 PM",
      services: ["विशेषज्ञ डॉक्टर | Specialist Doctors", "सर्जरी | Surgery"],
      verified: true
    }
  ];

  const categories = [
    { value: 'all', label: 'सभी | All Resources' },
    { value: 'pharmacy', label: 'फार्मेसी | Pharmacy' },
    { value: 'lab', label: 'लैब | Lab' },
    { value: 'transport', label: 'परिवहन | Transport' },
    { value: 'clinic', label: 'क्लिनिक | Clinic' }
  ];

  const filteredResources = healthResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getTypeColor = (category: string) => {
    switch (category) {
      case 'pharmacy': return 'bg-green-100 text-green-800';
      case 'lab': return 'bg-blue-100 text-blue-800';
      case 'transport': return 'bg-red-100 text-red-800';
      case 'clinic': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">स्वास्थ्य संसाधन खोजें</h1>
        <p className="text-gray-600">Find Local Health Resources</p>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="खोजें... | Search resources, location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                फिल्टर | Filter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    {resource.name}
                    {resource.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getTypeColor(resource.category)}`}>
                      {resource.type}
                    </span>
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{resource.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">{resource.address}</p>
                    <p className="text-xs text-blue-600">{resource.distance} away</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <a href={`tel:${resource.phone}`} className="text-sm text-blue-600 hover:underline">
                    {resource.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <p className="text-sm text-gray-600">{resource.hours}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">सेवाएं | Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {resource.services.map((service, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    दिशा | Directions
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    कॉल करें | Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">कोई संसाधन नहीं मिला | No resources found</p>
              <p className="text-sm text-gray-400 mt-2">
                अपना खोज शब्द बदलें या अलग फिल्टर का उपयोग करें
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add Resource */}
      <Card className="bg-blue-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">नया संसाधन जोड़ें | Add New Resource</h3>
            <p className="text-sm text-gray-600 mb-4">
              अपने क्षेत्र में कोई स्वास्थ्य संसाधन जोड़ने में मदद करें
            </p>
            <Button>
              संसाधन जोड़ें | Add Resource
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceMap;
