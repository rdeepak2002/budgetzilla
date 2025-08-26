import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-budgetzilla-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <img 
            src="/budgetzilla.svg" 
            alt="Budgetzilla Logo" 
            className="h-32 mx-auto mb-8"
          />
          <h1 className="text-5xl font-bold text-budgetzilla-dark-blue mb-4">
            🦖 Budgetzilla
          </h1>
          <p className="text-xl text-budgetzilla-grey mb-2">
            Track. Save. Dominate.
          </p>
          <p className="text-lg text-budgetzilla-grey mb-12 max-w-2xl mx-auto">
            An AI-powered personal finance tracker that helps you keep your expenses in check, 
            monitor budgets, and visualize your financial health—all in one clean, private web app.
          </p>
          
          <div className="space-y-4 max-w-md mx-auto">
            <Link 
              to="/login"
              className="block w-full bg-budgetzilla-blue hover:bg-budgetzilla-light-blue text-budgetzilla-dark-blue font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Login
            </Link>
            <Link 
              to="/register"
              className="block w-full border-2 border-budgetzilla-blue text-budgetzilla-dark-blue hover:bg-budgetzilla-blue hover:text-budgetzilla-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>
          
          <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-budgetzilla-dark-blue mb-2">Private by Design</h3>
              <p className="text-budgetzilla-grey">Your financial data stays yours</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="text-xl font-semibold text-budgetzilla-dark-blue mb-2">Bank Integration</h3>
              <p className="text-budgetzilla-grey">Automatic transaction syncing via Plaid</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-budgetzilla-dark-blue mb-2">Smart Dashboards</h3>
              <p className="text-budgetzilla-grey">Income, expenses, budgets, and trends</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-budgetzilla-dark-blue mb-2">Custom Categories</h3>
              <p className="text-budgetzilla-grey">Auto-categorize recurring merchants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}