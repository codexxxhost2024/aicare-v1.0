import React from 'react';
import { Brain, Clock, Shield, MessageSquare, BarChart, FileText, Users, Building } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description: "Advanced machine learning algorithms help identify potential health issues with high accuracy, supporting Filipino healthcare professionals."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Provide round-the-clock medical assistance to your patients through our platform, perfect for busy Metro Manila hospitals."
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Enterprise-grade security compliant with Philippine healthcare data protection standards and global best practices."
  },
  {
    icon: MessageSquare,
    title: "Real-time Consultation",
    description: "Connect patients instantly with healthcare professionals, reducing wait times in your clinic or hospital."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Gain insights into your hospital's performance with comprehensive analytics and reporting tools."
  },
  {
    icon: FileText,
    title: "Digital Records",
    description: "Streamline patient record management with our secure, cloud-based system designed for Philippine healthcare."
  },
  {
    icon: Users,
    title: "Multi-Provider Support",
    description: "Perfect for large hospitals with multiple departments and healthcare providers."
  },
  {
    icon: Building,
    title: "Clinic Management",
    description: "Comprehensive tools for managing your private clinic or hospital operations efficiently."
  }
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Advanced Features for Philippine Healthcare</h2>
          <p className="mt-4 text-xl text-gray-600">
            Cutting-edge technology tailored for private hospitals and clinics
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 left-6">
                <div className="inline-flex p-3 bg-blue-600 rounded-lg text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}