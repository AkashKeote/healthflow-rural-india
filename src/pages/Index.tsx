
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Calendar, Bot, MapPin, Shield } from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Heart,
      title: "Digital Health Records",
      description: "Secure, Aadhaar-linked health records accessible anywhere"
    },
    {
      icon: Calendar,
      title: "Smart Appointments",
      description: "Real-time queue management and appointment booking"
    },
    {
      icon: Bot,
      title: "AI Health Assistant",
      description: "24/7 multilingual health guidance and triage support"
    },
    {
      icon: MapPin,
      title: "Resource Finder",
      description: "Find nearby hospitals, pharmacies, and healthcare services"
    },
    {
      icon: Users,
      title: "Family Health",
      description: "Manage health records for your entire family"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Government-grade security with offline capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">HealthFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Unified Rural
            <span className="text-blue-600"> HealthFlow</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive digital platform empowering rural healthcare with secure health records, 
            smart appointments, AI assistance, and seamless access to healthcare resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Patient Portal
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50">
                PHC Staff Login
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Aadhaar Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Offline Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for modern healthcare management in rural areas, 
            designed for both patients and healthcare providers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
            <p className="text-lg text-gray-600">Jump directly to the features you need</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link to="/auth" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Queue Manager</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/auth" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <Bot className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">AI HealthBot</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/auth" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Resource Finder</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/auth" className="block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-blue-200">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Health Records</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Unified Rural HealthFlow</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering rural healthcare through digital innovation
            </p>
            <p className="text-sm text-gray-500">
              Hackathon MVP Demo • All data is for demonstration purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
