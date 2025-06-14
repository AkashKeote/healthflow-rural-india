
// Unified Rural HealthFlow – Home

import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-50 py-12">
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-10 space-y-6">
        <h1 className="text-4xl font-extrabold mb-2 text-center text-blue-800">
          Unified Rural HealthFlow
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Bridging the digital healthcare gap for rural India.
        </p>
        <nav className="space-y-4">
          <Link
            to="/login"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-center transition"
          >
            User/PHC Staff Login
          </Link>
          <Link
            to="/phcdashboard"
            className="block w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg text-center transition"
          >
            PHC Staff Demo Dashboard
          </Link>
          <Link
            to="/queuemanager"
            className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-center transition"
          >
            Queue Manager
          </Link>
          <Link
            to="/healthbot"
            className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-center transition"
          >
            HealthBot (AI Assistant)
          </Link>
          <Link
            to="/resourcefinder"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-center transition"
          >
            Resource Finder
          </Link>
        </nav>
        <div className="text-xs text-center text-gray-400 mt-8">
          Hackathon MVP Demo &mdash; All data is mock/test only.
        </div>
      </div>
    </div>
  );
}
