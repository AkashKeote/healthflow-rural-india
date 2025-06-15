
import { useEffect } from 'react';

const StandaloneHealthBot = () => {
  useEffect(() => {
    // Redirect to the static HTML file
    window.location.href = '/healthbot.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p>Redirecting to HealthBot...</p>
      </div>
    </div>
  );
};

export default StandaloneHealthBot;
