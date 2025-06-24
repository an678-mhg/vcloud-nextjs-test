import React from 'react'
import {
  ServerIcon,
  PlayIcon,
  StopIcon,
  TrashIcon,
  RefreshIcon,
} from '@heroicons/react/outline'

const instances = [
  {
    id: '1',
    name: 'web-server-1',
    type: 't2.micro',
    status: 'running',
    ip: '10.0.0.1',
    created: '2024-01-01',
  },
  {
    id: '2',
    name: 'db-server-1',
    type: 't2.small',
    status: 'stopped',
    ip: '10.0.0.2',
    created: '2024-01-02',
  },
  {
    id: '3',
    name: 'app-server-1',
    type: 't2.medium',
    status: 'running',
    ip: '10.0.0.3',
    created: '2024-01-03',
  },
]

export default function InstancesPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Instances</h1>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <ServerIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Launch Instance
          </button>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        IP Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {instances.map((instance) => (
                      <tr key={instance.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ServerIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {instance.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {instance.type}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              instance.status === 'running'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {instance.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {instance.ip}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {instance.created}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex space-x-2 justify-end">
                            {instance.status === 'running' ? (
                              <button
                                type="button"
                                className="text-red-600 hover:text-red-900"
                              >
                                <StopIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="text-green-600 hover:text-green-900"
                              >
                                <PlayIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            )}
                            <button
                              type="button"
                              className="text-blue-600 hover:text-blue-900"
                            >
                              <RefreshIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </button>
                            <button
                              type="button"
                              className="text-red-600 hover:text-red-900"
                            >
                              <TrashIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 