"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@/hooks/useToast";
import { signIn } from "next-auth/react";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const LoginMain = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {toastError, toastSuccess} = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/account/profile";

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async() => {
    setLoading(true);
    try {
      const res = await signIn('credentials', {
        redirect: false,
        ...getValues()
      });
      if (!res?.error) {
          toastSuccess('Logged in successfully.');
          reset({
            email: "",
            password: "",
          });
          router.push(callbackUrl);
      } else {
          toastError("Invalid Credentials");
      }
    } catch (error: any) {
      toastError("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bd-login__area pt-55 pb-35">
      <div className="container small-container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="Login-form-wrapper">
              <div className="bd-postbox__contact">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="text"
                          placeholder="Enter Your Email"
                          {...register("email", {
                            required: "Email or UserName is required",
                            pattern: {
                              value:
                                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && (
                          <span className="error-message">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="bd-password-box d-flex justify-content-between">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password (at least 6 characters)"
                          {...register("password", {
                            required: "Password is required",
                            minLength: 6,
                          })}
                        />
                        <span className="input-icon">
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle-btn"
                          >
                            <i
                              className={
                                showPassword
                                  ? "fa-solid fa-eye"
                                  : "fa-regular fa-eye-slash"
                              }
                            ></i>
                          </button>
                        </span>
                      </div>
                      {errors.password && (
                        <span className="error-message">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="bd-sigin__action-button mb-20">
                      <button className="bd-fill__btn w-100" type="submit" disabled={loading}>
                        {loading ? <div className="spinner-border text-success" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>:<>Login now</>}
                      </button>
                    </div>
                    <div className="bd-registered__wrapper">
                      <div className="not-register">
                        <span>Not registered?</span>
                        <span>
                          <Link href="/auth/register">Sign up</Link>
                        </span>
                      </div>
                    </div>
                    <div className="bd-registered__wrapper">
                      <div className="not-register">
                        <span>Forgot your password?</span>
                        <span>
                          <Link href="/auth/forgot-password">Reset Now</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
