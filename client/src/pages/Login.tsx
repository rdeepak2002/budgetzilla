import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just navigate to home - later you'll add actual authentication
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-budgetzilla-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <Link to="/">
            <img 
              src="/budgetzilla.svg" 
              alt="Budgetzilla Logo" 
              className="h-20 mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-budgetzilla-dark-blue mb-2">
            Welcome Back
          </h1>
          <p className="text-budgetzilla-grey">
            Login to your Budgetzilla account
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-budgetzilla-dark-blue mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-budgetzilla-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-budgetzilla-blue focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-budgetzilla-dark-blue mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-budgetzilla-grey/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-budgetzilla-blue focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-budgetzilla-blue hover:bg-budgetzilla-light-blue text-budgetzilla-dark-blue font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-budgetzilla-grey">
              Don't have an account?{' '}
              <Link to="/register" className="text-budgetzilla-blue hover:text-budgetzilla-dark-blue font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}