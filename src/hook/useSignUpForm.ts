import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { validateSignUpForm } from "@/utils/validateSignUpForm";
import axios from "axios";
import type { SignUpFormData, SignUpErrors } from "@/types/blog";

const initialSignUpForm: SignUpFormData = {
  name: "",
  username: "",
  email: "",
  password: "",
};

export function useSignUpForm() {
  const [signUpForm, setSignUpForm] =
    useState<SignUpFormData>(initialSignUpForm);

  const [errors, setErrors] =
    useState<SignUpErrors>({});

  const [isSuccess, setIsSuccess] =
    useState<boolean>(false);

  const [isLoading, setIsLoading] =
    useState<boolean>(false);

  const [serverError, setServerError] =
    useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  function inputForm(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setServerError(null);
  }

  async function requestRegister(): Promise<void> {
    setIsLoading(true);
    setServerError(null);

    try {
      await axios.post(
        `${API_BASE_URL}/auth/register`,
        signUpForm
      );
      setIsSuccess(true);
    } catch (error: any) {
      if (error.response) {
        setServerError(error.response.data.message);
      } else {
        setServerError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ): void {
    e.preventDefault();

    const validateErrors = validateSignUpForm(signUpForm);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length > 0) return;

    requestRegister();
  }



  return {
    signUpForm,
    inputForm,
    handleSubmit,
    errors,
    isSuccess,
    isLoading,
    serverError,
  };
}
