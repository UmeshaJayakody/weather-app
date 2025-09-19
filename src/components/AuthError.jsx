import React from "react";

const AuthError = ({ error }) => {
  if (!error) return null;

  return (
    <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-2">
        <span className="text-red-400 text-xl">⚠️</span>
        <div>
          <h3 className="text-red-400 font-semibold">Authentication Error</h3>
          <p className="text-red-300 text-sm mt-1">
            {error.message || "An error occurred during authentication."}
          </p>
          {error.error_description && (
            <p className="text-red-300 text-xs mt-1 opacity-80">
              {error.error_description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthError;
