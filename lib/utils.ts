export function validateString(value: unknown, maxLength: number): string | false {
  if (typeof value !== "string" || value.length > maxLength || value.trim().length === 0) {
    return false;
  }
  return value.trim(); // Return trimmed value if valid
};

export function getErrorMessage(error: unknown): string {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    // Handle cases where the error is a custom object with a message
    message = String((error as { message: unknown }).message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "An unknown error occurred."; // More specific fallback
  }

  return message;
};
