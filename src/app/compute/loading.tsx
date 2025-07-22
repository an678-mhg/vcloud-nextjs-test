export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="animate-pulse">
          {/* Hero skeleton */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
              <div className="h-16 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-8"></div>
              <div className="flex gap-4">
                <div className="h-12 bg-gray-200 rounded w-48"></div>
                <div className="h-12 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
              <div className="h-20 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Benefits skeleton */}
          <div className="mb-20">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-16"></div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl mb-6"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Use cases skeleton */}
          <div className="mb-20">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-16"></div>
            <div className="grid gap-8 lg:grid-cols-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-8 bg-gray-200 rounded-2xl h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 