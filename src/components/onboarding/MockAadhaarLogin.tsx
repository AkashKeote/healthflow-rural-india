
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { User } from "lucide-react";

const MockAadhaarLogin = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/phcdashboard"); // Simulate PHC Staff; could branch by user type
    }, 1200);
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin} autoComplete="off">
      <div>
        <label className="block text-gray-700 mb-1">Enter Aadhaar Number</label>
        <input
          type="text"
          value={aadhaar}
          onChange={e => setAadhaar(e.target.value)}
          pattern="[0-9]{12}"
          required
          placeholder="XXXX XXXX XXXX"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center"
        disabled={loading || aadhaar.length < 12}
      >
        {loading ? (
          <span className="animate-spin mr-2"><User className="inline w-5 h-5" /></span>
        ) : (
          <User className="inline w-5 h-5 mr-2" />
        )}
        {loading ? "Logging in..." : "Login"}
      </button>
      <div className="text-xs text-center text-gray-500 mt-2">
        <span className="font-medium">Demo:</span> Any 12-digit Aadhaar. No data sent.
      </div>
    </form>
  );
};

export default MockAadhaarLogin;
