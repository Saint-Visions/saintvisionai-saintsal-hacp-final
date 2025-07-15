import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireSubscription = false,
}) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#10161C" }}
      >
        <div className="text-center space-y-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048"
            alt="SAINTSAL Logo"
            className="w-16 h-16 mx-auto animate-pulse"
          />
          <p className="text-amber-400 font-medium">
            Loading your sanctuary...
          </p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
