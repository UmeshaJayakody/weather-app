import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
        <span className="text-sm">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 text-red-400">
        <span className="text-sm">❌ Auth Error</span>
      </div>
    );
  }

  return (
    <div className="text-center">
          <button
            onClick={() => loginWithRedirect()}
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-md transition-colors font-semibold"
          >
            Log In or Sign Up
          </button>
        </div>
  );
};

export default AuthButtons;
