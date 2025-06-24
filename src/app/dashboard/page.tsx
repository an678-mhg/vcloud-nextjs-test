import React from 'react'
import {
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CubeTransparentIcon,
  ChartBarIcon,
  CreditCardIcon,
} from '@heroicons/react/outline'

const stats = [
  { name: 'Active Instances', value: '12', icon: ServerIcon },
  { name: 'Storage Used', value: '256 GB', icon: DatabaseIcon },
  { name: 'Network Usage', value: '1.2 TB', icon: CloudIcon },
  { name: 'K8s Clusters', value: '3', icon: CubeTransparentIcon },
  { name: 'Monthly Cost', value: '$2,450', icon: CreditCardIcon },
  { name: 'Uptime', value: '99.99%', icon: ChartBarIcon },
]

export default function DashboardPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <item.icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.name}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {item.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <button
              type="button"
              className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <ServerIcon
                className="mx-auto h-12 w-12 text-gray-400"
                aria-hidden="true"
              />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Launch New Instance
              </span>
            </button>
            <button
              type="button"
              className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <DatabaseIcon
                className="mx-auto h-12 w-12 text-gray-400"
                aria-hidden="true"
              />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Create Storage Volume
              </span>
            </button>
            <button
              type="button"
              className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <CubeTransparentIcon
                className="mx-auto h-12 w-12 text-gray-400"
                aria-hidden="true"
              />
              <span className="mt-2 block text-sm font-medium text-gray-900">
                Deploy K8s Cluster
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 