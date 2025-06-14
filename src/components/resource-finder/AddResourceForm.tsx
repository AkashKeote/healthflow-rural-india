
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, X } from 'lucide-react';
import { toast } from 'sonner';

interface AddResourceFormProps {
  onClose: () => void;
}

const AddResourceForm = ({ onClose }: AddResourceFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'pharmacy',
    address: '',
    phone: '',
    hours: '',
    services: ''
  });

  const resourceTypes = [
    { value: 'pharmacy', label: 'फार्मेसी | Pharmacy' },
    { value: 'lab', label: 'लैब | Diagnostic Lab' },
    { value: 'clinic', label: 'क्लिनिक | Clinic' },
    { value: 'transport', label: 'परिवहन | Transport' },
    { value: 'hospital', label: 'अस्पताल | Hospital' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      toast.error('कृपया सभी आवश्यक फील्ड भरें | Please fill all required fields');
      return;
    }
    
    toast.success('संसाधन सफलतापूर्वक जोड़ा गया | Resource added successfully');
    onClose();
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              नया संसाधन जोड़ें | Add New Resource
            </CardTitle>
            <CardDescription>
              अपने क्षेत्र में स्वास्थ्य संसाधन जोड़ें | Add a health resource in your area
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">नाम | Name *</Label>
              <Input
                id="name"
                placeholder="संसाधन का नाम | Resource name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">प्रकार | Type</Label>
              <select
                id="type"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                {resourceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">पता | Address *</Label>
            <Input
              id="address"
              placeholder="पूरा पता | Complete address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">फोन नंबर | Phone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hours">समय | Hours</Label>
              <Input
                id="hours"
                placeholder="9:00 AM - 9:00 PM"
                value={formData.hours}
                onChange={(e) => setFormData({...formData, hours: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="services">सेवाएं | Services</Label>
            <textarea
              id="services"
              placeholder="उपलब्ध सेवाओं की सूची | List of available services"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              value={formData.services}
              onChange={(e) => setFormData({...formData, services: e.target.value})}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              संसाधन जोड़ें | Add Resource
            </Button>
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              रद्द करें | Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddResourceForm;
