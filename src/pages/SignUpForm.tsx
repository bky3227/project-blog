import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSignUpForm } from "@/hook/useSignUpForm";
import NavBar from "@/components/NavBar";
import { Eye, EyeOff } from "lucide-react";

function SignUp() {
  const {
    signUpForm,
    inputForm,
    handleSubmit,
    errors,
    isSuccess,
    isLoading,
    serverError,
  } = useSignUpForm();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  const baseInput =
    "bg-white p-3 pl-4 text-body-1 text-base-brown-400 outline-none border border-base-brown-300 rounded-lg placeholder:text-base-brown-400 transition-colors focus:border-base-brown-400 focus:ring-1 focus:ring-base-brown-300 focus-within:border-base-brown-500 focus-within:ring-1 focus-within:ring-base-brown-300";

  const errorInput =
    "border border-brand-red focus:border-brand-red focus:ring-1 focus:ring-brand-red/70";

  return (
    <>
      <NavBar />
      <div className="mx-4 mt-10 lg:mt-[60px]">
        <div className="flex flex-col items-center gap-6 px-4 py-10 max-w-[798px] bg-base-brown-200 rounded-2xl mx-auto lg:px-[120px] lg:py-[60px] lg:gap-10">
          <h2 className="text-headline-2 leading-12 text-base-brown-600">
            Sign up
          </h2>

          <form
            className="w-full flex flex-col"
            onSubmit={handleSubmit}
          >

            {/* Name */}
            <label htmlFor="name" className="mb-1">Name</label>
            <input
              id="name"
              name="name"
              value={signUpForm.name}
              onChange={inputForm}
              type="text"
              placeholder="Full name"
              className={`${baseInput} ${errors.name ? errorInput : ""}`}
            />
            {errors.name && (
              <div className="pt-1 text-body-3 text-brand-red">
                {errors.name}
              </div>
            )}

            {/* Username */}
            <label htmlFor="username" className="mb-1 mt-6">Username</label>
            <input
              id="username"
              name="username"
              value={signUpForm.username}
              onChange={inputForm}
              type="text"
              placeholder="Username"
              className={`${baseInput} ${errors.username ? errorInput : ""}`}
            />
            {errors.username && (
              <div className="pt-1 text-body-3 text-brand-red">
                {errors.username}
              </div>
            )}

            {/* Email */}
            <label htmlFor="email" className="mb-1 mt-6">Email</label>
            <input
              id="email"
              name="email"
              value={signUpForm.email}
              onChange={inputForm}
              type="email"
              placeholder="Email"
              className={`${baseInput} ${errors.email ? errorInput : ""}`}
            />
            {errors.email && (
              <div className="pt-1 text-body-3 text-brand-red">
                {errors.email}
              </div>
            )}

            {/* Password */}
            <label htmlFor="password" className="mb-1 mt-6">Password</label>
            <div
              className={`flex items-center ${baseInput} ${errors.password ? errorInput : ""
                }`}
            >
              <input
                id="password"
                name="password"
                value={signUpForm.password}
                onChange={inputForm}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="grow outline-none placeholder:text-base-brown-400"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-base-brown-400 hover:text-base-brown-600 transition"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            {errors.password && (
              <div className="pt-1 text-body-3 text-brand-red">
                {errors.password}
              </div>
            )}

            {/* Server error */}
            {serverError && (
              <div className="mt-4 text-center text-body-3 text-brand-red">
                {serverError}
              </div>
            )}

            <Button
              type="submit"
              variant="outline"
              className="mt-6 self-center md:mt-10"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Sign up"}
            </Button>
          </form>

          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <a href="/login" className="underline font-semibold">
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;

