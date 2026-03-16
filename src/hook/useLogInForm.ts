import { useState } from "react";
import axios, { AxiosError } from "axios";
import { validateLogInForm } from "@/utils/validateLogInForm";
import { useAuth } from "@/context/auth";
import type { LogInFormData, LogInErrors } from "@/types/blog";


export function useLogInForm() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const { login } = useAuth();

  const [loginForm, setForm] = useState<LogInFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<LogInErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string | null>(null);

  function inputForm(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function requestLogin(): Promise<void> {
    setIsLoading(true);
    setServerError(null);

    try {
      const res = await axios.post<{ token: string }>(
        `${API_BASE_URL}/auth/login`,
        loginForm
      );

      login(res.data.token);
      setIsSuccess(true);
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;

      setServerError(
        err.response?.data?.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): void {
    e.preventDefault();

    const validateErrors = validateLogInForm(loginForm);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length > 0) return;

    requestLogin();
  }

  return {
    loginForm,
    inputForm,
    handleSubmit,
    errors,
    isLoading,
    isSuccess,
    serverError,
  };
}
