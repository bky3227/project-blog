import type { LogInErrors, LogInFormData } from "@/types/blog";

export function validateLogInForm(
  form: LogInFormData
): LogInErrors {
  const errors: LogInErrors = {};

  if (!form.email.trim()) {
    errors.email = "Please enter your email address";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!form.password) {
    errors.password = "Please enter a password";
  } else if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}
