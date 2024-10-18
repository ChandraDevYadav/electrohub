import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-800 transition-colors"
            >
              Login
            </button>
            <p className="text-sm text-center mt-2">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-red-600 hover:underline"
                onClick={toggleForm}
              >
                Register
              </button>
            </p>
          </form>
        ) : (
          // Register Form
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-800 transition-colors"
            >
              Register
            </button>
            <p className="text-sm text-center mt-2">
              Already have an account?{' '}
              <button
                type="button"
                className="text-red-600 hover:underline"
                onClick={toggleForm}
              >
                Login
              </button>
            </p>
          </form>
        )}

        {/* Links to Other Routes */}
        <div className="mt-4 text-center">
          <Link to="/" className="text-red-600 hover:underline">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
