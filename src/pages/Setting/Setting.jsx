import React, { useState } from 'react';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} py-10 px-5`}>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold mb-8">Settings</h1>

        {/* Profile Settings */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </section>

        {/* Password Settings */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Password Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">New Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </section>

        {/* Theme Settings */}
        

        {/* Save Changes Button */}
        <div className="text-right">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
