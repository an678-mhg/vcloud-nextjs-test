import React from 'react'
import {
  CreditCardIcon,
  DownloadIcon,
  PlusIcon,
  CashIcon,
  ChartBarIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CubeTransparentIcon,
} from '@heroicons/react/outline'

const invoices = [
  {
    id: '1',
    amount: 2450.00,
    status: 'paid',
    period: 'January 2024',
    dueDate: '2024-02-01',
  },
  {
    id: '2',
    amount: 2150.00,
    status: 'pending',
    period: 'December 2023',
    dueDate: '2024-01-01',
  },
  {
    id: '3',
    amount: 1950.00,
    status: 'paid',
    period: 'November 2023',
    dueDate: '2023-12-01',
  },
]

const paymentMethods = [
  {
    id: '1',
    type: 'visa',
    last4: '4242',
    expiry: '12/24',
    isDefault: true,
  },
  {
    id: '2',
    type: 'mastercard',
    last4: '5555',
    expiry: '10/25',
    isDefault: false,
  },
]

const usageStats = [
  { name: 'Compute', amount: 1250.00, icon: ServerIcon },
  { name: 'Storage', amount: 450.00, icon: DatabaseIcon },
  { name: 'Network', amount: 350.00, icon: CloudIcon },
  { name: 'Kubernetes', amount: 400.00, icon: CubeTransparentIcon },
]

export default function BillingPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Billing</h1>

        {/* Current Usage */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Current Usage</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {usageStats.map((stat) => (
              <div
                key={stat.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <stat.icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          ${stat.amount.toFixed(2)}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Payment Methods</h2>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Payment Method
            </button>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:border-gray-400"
              >
                <div className="flex-shrink-0">
                  <CreditCardIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="focus:outline-none">
                    <p className="text-sm font-medium text-gray-900">
                      {method.type.toUpperCase()} •••• {method.last4}
                    </p>
                    <p className="truncate text-sm text-gray-500">
                      Expires {method.expiry}
                    </p>
                  </div>
                </div>
                {method.isDefault && (
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    Default
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Invoices */}
        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-lg font-medium text-gray-900">Invoices</h2>
              <p className="mt-2 text-sm text-gray-700">
                A list of all invoices including their status and amount.
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
                          Period
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Due Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {invoices.map((invoice) => (
                        <tr key={invoice.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {invoice.period}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            ${invoice.amount.toFixed(2)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {invoice.dueDate}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                                invoice.status === 'paid'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {invoice.status}
                            </span>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <button
                              type="button"
                              className="text-green-600 hover:text-green-900"
                            >
                              <DownloadIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="sr-only">
                                Download invoice {invoice.id}
                              </span>
                            </button>
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
    </div>
  )
} 