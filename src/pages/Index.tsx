
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-300 via-green-100 to-yellow-50">
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute -top-20 -left-16 md:left-24 w-80 h-80 bg-green-400/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl" />
      {/* Glassmorphic Card */}
      <div className="relative z-10 max-w-2xl w-full mx-auto p-1 rounded-3xl bg-gradient-to-tr from-[#e0f7fa80] via-[#fffde47b] to-[#edfaf5ab] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-sm">
        <div className="rounded-[1.4rem] bg-white/70 px-8 py-12 md:p-16 space-y-7 shadow-lg backdrop-blur-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#175a7b] text-center tracking-tight leading-tight drop-shadow-md">
            Unified Rural HealthFlow
          </h1>
          <p className="text-lg text-center text-[#25643a] font-medium">
            A One-Stop Digital Platform for Rural Healthcare Empowerment
          </p>
          <ul className="flex flex-wrap justify-center gap-3 items-center text-sm text-gray-700/85 font-semibold my-3">
            <li className="bg-green-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Aadhaar Login</li>
            <li className="bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Realtime Queue</li>
            <li className="bg-yellow-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">AI HealthBot</li>
            <li className="bg-purple-100 px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Offline Ready</li>
          </ul>
          <nav className="space-y-3 flex flex-col">
            <Link
              to="/login"
              className="block w-full text-lg font-bold bg-blue-600 hover:-translate-y-[2px] hover:shadow-xl hover:bg-blue-700/90 transition-all duration-200 text-white py-3 px-6 rounded-xl text-center shadow-md"
            >
              User/PHC Staff Login
            </Link>
            <Link
              to="/phcdashboard"
              className="block w-full text-lg font-bold bg-teal-600 hover:-translate-y-[2px] hover:shadow-xl hover:bg-teal-700/90 transition-all duration-200 text-white py-3 px-6 rounded-xl text-center shadow-md"
            >
              PHC Staff Dashboard Demo
            </Link>
            <Link
              to="/queuemanager"
              className="block w-full text-lg font-bold bg-yellow-500 hover:-translate-y-[2px] hover:shadow-xl hover:bg-yellow-600/90 transition-all duration-200 text-white py-3 px-6 rounded-xl text-center shadow-md"
            >
              Queue Manager
            </Link>
            <Link
              to="/healthbot"
              className="block w-full text-lg font-bold bg-green-600 hover:-translate-y-[2px] hover:shadow-xl hover:bg-green-700/90 transition-all duration-200 text-white py-3 px-6 rounded-xl text-center shadow-md"
            >
              HealthBot (AI Assistant)
            </Link>
            <Link
              to="/resourcefinder"
              className="block w-full text-lg font-bold bg-purple-600 hover:-translate-y-[2px] hover:shadow-xl hover:bg-purple-700/90 transition-all duration-200 text-white py-3 px-6 rounded-xl text-center shadow-md"
            >
              Resource Finder
            </Link>
          </nav>
          <div className="text-xs text-center text-gray-400 mt-8 font-mono">
            Hackathon MVP Demo &mdash; All data is mock/test only.
          </div>
        </div>
      </div>
    </div>
  );
}
