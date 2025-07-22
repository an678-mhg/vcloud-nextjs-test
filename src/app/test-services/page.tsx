'use client';

import { Services } from '../../components/sections/services';

export default function TestServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Services Section Test
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Testing the enhanced Services section with auto-rotate tabs, progress indicators, 
            mobile gestures, and interactive animations.
          </p>
        </div>
        
        <Services />
        
        <div className="mt-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✨ Features Implemented
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-lime-600 mb-3">
                🎮 Interactive Features
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Auto-rotate tabs (5s interval)</li>
                <li>• Progress indicators</li>
                <li>• Pause on hover</li>
                <li>• Play/Pause controls</li>
                <li>• Keyboard navigation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-lime-600 mb-3">
                📱 Mobile Optimized
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Swipe gestures (left/right)</li>
                <li>• Touch-friendly interactions</li>
                <li>• Responsive design</li>
                <li>• Navigation dots</li>
                <li>• Optimized typography</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-lime-600 mb-3">
                🎨 Animations & Effects
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• Smooth slide transitions</li>
                <li>• Micro-animations</li>
                <li>• Hover effects</li>
                <li>• Scroll reveal</li>
                <li>• Loading states</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-lime-600 mb-3">
                ♿ Accessibility
              </h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>• ARIA attributes</li>
                <li>• Focus management</li>
                <li>• Screen reader support</li>
                <li>• Color contrast optimized</li>
                <li>• Semantic HTML</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-lime-50 rounded-lg">
            <h3 className="text-lg font-semibold text-lime-800 mb-3">
              🧪 Test Instructions
            </h3>
            <div className="text-left space-y-2 text-gray-700">
              <p><strong>Desktop:</strong> Hover over tabs to pause auto-rotation, click to switch manually</p>
              <p><strong>Mobile:</strong> Swipe left/right on content area to navigate between services</p>
              <p><strong>Keyboard:</strong> Use Tab key to navigate, Enter/Space to activate</p>
              <p><strong>Performance:</strong> Smooth 60fps animations with optimized DOM manipulation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 