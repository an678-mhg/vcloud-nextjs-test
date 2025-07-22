'use client';

import VCloudBackground from '../../components/ui/VCloudBackground';

export default function TestBackgroundPage() {
  return (
    <VCloudBackground className="min-h-screen flex items-center justify-center">
      <div className="text-center text-white max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold mb-6">
          VCloud Background Test
        </h1>
        <p className="text-xl mb-8 opacity-90">
          This is a test page to verify the VCloudBackground component is working correctly.
          Move your mouse around to see the interactive parallax effects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">✨ Features</h3>
            <ul className="text-left space-y-2">
              <li>• Animated gradient orbs</li>
              <li>• Mouse parallax effects</li>
              <li>• Floating dots animation</li>
              <li>• Grid overlay with animation</li>
              <li>• Responsive design</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">🎯 Performance</h3>
            <ul className="text-left space-y-2">
              <li>• RequestAnimationFrame throttling</li>
              <li>• CSS transform optimizations</li>
              <li>• Will-change properties</li>
              <li>• Smooth 60fps animations</li>
              <li>• Mobile optimized</li>
            </ul>
          </div>
        </div>
      </div>
    </VCloudBackground>
  );
} 