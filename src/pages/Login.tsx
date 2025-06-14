
import MockAadhaarLogin from "@/components/onboarding/MockAadhaarLogin";

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100">
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Unified Rural HealthFlow</h2>
      <p className="mb-6 text-sm text-gray-500 text-center">
        Secure Login (Demo) — DigiLocker / Aadhaar / OTP
      </p>
      <MockAadhaarLogin />
    </div>
  </div>
)
export default Login;
