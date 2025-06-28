const AIAdvisor = () => {
  return (
    <section id="ai-advisor" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">✨ AI Solution Advisor</h2>
          <p className="mt-4 text-lg text-gray-600">
            Describe your project, and our AI will recommend the best VNETWORK solutions for you.
          </p>
        </div>
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <label htmlFor="project-description" className="block text-sm font-medium text-gray-700">
              Describe your project or business need
            </label>
            <textarea 
              id="project-description" 
              rows={4} 
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
              placeholder="e.g., 'I'm building a large-scale e-commerce app with real-time chat functionality.'"
            />
            <button 
              id="get-recommendation-btn" 
              className="mt-4 w-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-3 rounded-md shadow-lg flex items-center justify-center"
            >
              <span>Get AI Recommendation</span>
            </button>
            <div id="ai-advisor-loading" className="mt-4 text-center hidden">
              <svg className="animate-spin h-6 w-6 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-2 text-sm text-gray-600">AI is analyzing your request...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAdvisor 