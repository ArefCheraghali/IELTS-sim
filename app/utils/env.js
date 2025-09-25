// Environment validation utility
export const validateEnv = () => {
  const requiredEnvVars = {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  };

  const missing = [];
  
  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`
    );
  }

  // Validate URL format
  try {
    new URL(requiredEnvVars.NEXT_PUBLIC_BACKEND_URL);
  } catch (error) {
    throw new Error("NEXT_PUBLIC_BACKEND_URL must be a valid URL");
  }

  return requiredEnvVars;
};

// Get validated environment variables
export const getEnv = () => {
  return validateEnv();
};
