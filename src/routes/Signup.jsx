import  { useState } from 'react';
import { CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      setPasswordError(value.length < 6 ? 'Password must be at least 6 characters' : '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }
    // Handle sign-up logic
    console.log('Sign-up attempt with:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-16 xl:px-24">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <CircleDot className="w-8 h-8 text-teal-500" />
            <span className="text-xl font-semibold">
              <span className="text-gray-900">Quick</span>
              <span className="text-teal-500">Pipe</span>
              <span className="text-gray-900">.Ai</span>
            </span>
          </div>

          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Create a new account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-lg border ${
                  passwordError ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition`}
                required
              />
              {passwordError && (
                <p className="mt-1 text-sm text-red-500">{passwordError}</p>
              )}
            </div>

            <div className="flex items-start space-x-2 mt-4">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <label className="text-sm text-gray-600">
                I agree to the QuickPipe{' '}
                <a href="#" className="text-teal-500 hover:text-teal-600">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-teal-500 hover:text-teal-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition mt-6"
            >
              Join Now
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{' '}
           <span className="text-teal-500 hover:text-teal-600 font-medium"><Link to="/login"> Log in</Link>
           </span> 
          </p>
        </div>
      </div>

      {/* Right side - Welcome Message */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80')] opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="relative w-full flex items-center justify-center p-16">
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-6">10,000+ clients are getting more replies!</h2>
            <p className="text-lg text-teal-50">
              Unlock the power of effective outreach with our cutting-edge platform, 
              and experience a surge in responses and engagement rates like never before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


