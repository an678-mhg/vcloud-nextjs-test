import React from "react";
import {
  CreditCardIcon,
  DownloadIcon,
  PlusIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CubeTransparentIcon,
} from "@heroicons/react/outline";

const invoices = [
  {
    id: "1",
    amount: 2450.0,
    status: "paid",
    period: "January 2024",
    dueDate: "2024-02-01",
  },
  {
    id: "2",
    amount: 2150.0,
    status: "pending",
    period: "December 2023",
    dueDate: "2024-01-01",
  },
  {
    id: "3",
    amount: 1950.0,
    status: "paid",
    period: "November 2023",
    dueDate: "2023-12-01",
  },
];

const paymentMethods = [
  {
    id: "1",
    type: "visa",
    last4: "4242",
    expiry: "12/24",
    isDefault: true,
  },
  {
    id: "2",
    type: "mastercard",
    last4: "5555",
    expiry: "10/25",
    isDefault: false,
  },
];

const usageStats = [
  { name: "Compute", amount: 1250.0, icon: ServerIcon },
  { name: "Storage", amount: 450.0, icon: DatabaseIcon },
  { name: "Network", amount: 350.0, icon: CloudIcon },
  { name: "Kubernetes", amount: 400.0, icon: CubeTransparentIcon },
];

export default function BillingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Billing
        </h1>
        <p className="text-gray-600">
          Trang billing đang được phát triển
        </p>
      </div>
    </div>
  );
}
