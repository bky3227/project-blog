import type { SignUpFormData, SignUpErrors } from "@/types/blog";

export function validateSignUpForm(
  form: SignUpFormData
): SignUpErrors {
  const errors: SignUpErrors = {};

  if (!form.name) {
    errors.name = "Please enter your full name";
  }

  if (!form.username) {
    errors.username = "Please enter a username";
  }

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
