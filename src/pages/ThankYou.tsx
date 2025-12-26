import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.08)_25%,rgba(68,68,68,0.08)_50%,transparent_50%,transparent_75%,rgba(68,68,68,0.08)_75%)] bg-[length:7px_7px] opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(12,14,18,0.9)_85%,rgba(12,14,18,1)_100%)] pointer-events-none"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-600/20 rounded-full blur-[100px] animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/15 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Content Card */}
      <div className="relative z-10 max-w-lg w-full">
        <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative group"
             style={{
                 background: 'rgba(18, 20, 26, 0.4)',
                 backdropFilter: 'blur(24px)',
                 border: '1px solid rgba(255, 255, 255, 0.05)'
             }}
        >
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Icon */}
            <div className="relative animate-float">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600/20 to-green-600/5 rounded-full flex items-center justify-center border border-green-600/20 shadow-[0_0_30px_-5px_hsla(142,76%,36%,0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-grotesk text-xs sm:text-sm tracking-[0.2em] text-green-500 uppercase font-medium bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                  Submission Received
                </span>
              </div>

              <h1 className="font-clash font-bold text-4xl sm:text-5xl text-white">
                Thank You!
              </h1>

              <p className="text-gray-400 font-satoshi text-base sm:text-lg leading-relaxed max-w-xs mx-auto">
                I've received your message and will get back to you shortly.
              </p>

              <p className="text-xs text-gray-600 font-grotesk mt-4">
                Redirecting to home in{" "}
                <span
                  id="countdown"
                  className="font-bold text-green-500 transition-all duration-300"
                >
                  {timeLeft}
                </span>{" "}
                seconds...
              </p>
            </div>

            <div className="w-full">
              <Link to="/" className="block w-full">
                <button className="w-full h-14 font-grotesk text-base bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white shadow-lg transition-all duration-300 rounded-xl flex items-center justify-center gap-2 group">
                  Back to Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
