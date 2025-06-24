import React from 'react'
import {
  QuestionMarkCircleIcon,
  PlusIcon,
  ChatIcon,
  DocumentTextIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/outline'

const tickets = [
  {
    id: '1',
    title: 'Instance not starting',
    description: 'My web server instance is not starting after reboot.',
    status: 'open',
    priority: 'high',
    created: '2024-01-15',
  },
  {
    id: '2',
    title: 'Billing inquiry',
    description: 'Question about last month\'s invoice.',
    status: 'in_progress',
    priority: 'medium',
    created: '2024-01-14',
  },
  {
    id: '3',
    title: 'Storage volume performance',
    description: 'Experiencing slow I/O on SSD volume.',
    status: 'resolved',
    priority: 'high',
    created: '2024-01-13',
  },
]

const articles = [
  {
    id: '1',
    title: 'Getting Started with VCLOUD',
    category: 'Basics',
    views: 1250,
  },
  {
    id: '2',
    title: 'Instance Types and Pricing',
    category: 'Compute',
    views: 980,
  },
  {
    id: '3',
    title: 'Storage Volume Management',
    category: 'Storage',
    views: 750,
  },
  {
    id: '4',
    title: 'Kubernetes Cluster Setup',
    category: 'Kubernetes',
    views: 1100,
  },
]

export default function SupportPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Support</h1>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
            <div className="flex-shrink-0">
              <PlusIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  Create New Ticket
                </p>
                <p className="text-sm text-gray-500">
                  Get help from our support team
                </p>
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
            <div className="flex-shrink-0">
              <ChatIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Live Chat</p>
                <p className="text-sm text-gray-500">
                  Chat with support instantly
                </p>
              </a>
            </div>
          </div>

          <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400">
            <div className="flex-shrink-0">
              <DocumentTextIcon
                className="h-6 w-6 text-purple-600"
                aria-hidden="true"
              />
            </div>
            <div className="flex-1 min-w-0">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">Documentation</p>
                <p className="text-sm text-gray-500">
                  Browse our documentation
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Support Tickets */}
        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-lg font-medium text-gray-900">
                Support Tickets
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                View and manage your support tickets
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Priority
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Created
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {tickets.map((ticket) => (
                        <tr key={ticket.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {ticket.title}
                                </div>
                                <div className="text-gray-500">
                                  {ticket.description}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                ticket.status === 'open'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : ticket.status === 'in_progress'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-green-100 text-green-800'
                              }`}
                            >
                              {ticket.status}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                ticket.priority === 'high'
                                  ? 'bg-red-100 text-red-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {ticket.priority}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {ticket.created}
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

        {/* Knowledge Base */}
        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-lg font-medium text-gray-900">
                Knowledge Base
              </h2>
              <p className="mt-2 text-sm text-gray-700">
                Popular articles and tutorials
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {articles.map((article) => (
              <div
                key={article.id}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  <QuestionMarkCircleIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {article.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {article.category} • {article.views} views
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 