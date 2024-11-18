import React from 'react';
import { ArrowRight, Building, Building2, Users } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 text-blue-600 mb-4">
              <Building className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-wide uppercase">For Private Hospitals & Clinics</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Philippines' Premier AI Medical Assistant
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Transform your healthcare practice with advanced AI technology. Streamline operations, enhance patient care, and improve outcomes in your hospital or clinic.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetStarted}
                className="group flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { icon: Building2, label: '100+ Clinics', sublabel: 'Trust Us' },
                { icon: Building, label: '25+ Hospitals', sublabel: 'Partnered' },
                { icon: Users, label: '50,000+', sublabel: 'Patients Served' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 mx-auto text-blue-600 mb-2" />
                  <p className="font-bold text-gray-900">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Modern Medical Facility with AI Technology"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}