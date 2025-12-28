import { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onLoadComplete, 300);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <img
            src="/favicon.png"
            alt="Loading"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </div>
        <p className="text-muted-foreground text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
