"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@/hooks/useToast";
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";

const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup
      .string()
      .required()
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    email: yup.string().email().required(),
    acceptTerms: yup.bool().oneOf([true], 'Please accept the terms & conditions').required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

const RegistarMain = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {toastError, toastSuccess} = useToast();
  const {
    handleSubmit,
    register,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axiosPublic.post(api_routes.register, data);
      toastSuccess(response.data.message);
      reset({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.message) {
        toastError(error?.response?.data?.message);
      }
      if (error?.response?.data?.errors?.name) {
        setError("name", {
          type: "server",
          message: error?.response?.data?.errors?.name[0],
        });
      }
      if (error?.response?.data?.errors?.email) {
        setError("email", {
          type: "server",
          message: error?.response?.data?.errors?.email[0],
        });
      }
      if (error?.response?.data?.errors?.phone) {
        setError("phone", {
          type: "server",
          message: error?.response?.data?.errors?.phone[0],
        });
      }
      if (error?.response?.data?.errors?.password) {
        setError("password", {
          type: "server",
          message: error?.response?.data?.errors?.password[0],
        });
      }
      if (error?.response?.data?.errors?.confirm_password) {
        setError("confirm_password", {
          type: "server",
          message: error?.response?.data?.errors?.confirm_password[0],
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bd-register__area pt-55 pb-35">
      <div className="container small-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="signup-form-wrapper">
              <div className="bd-postbox__contact">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="bd-postbox__singel-input">
                        <input
                          type="text"
                          placeholder="Name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <span className="error-message">{errors.name.message}</span>
                        )}
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="bd-postbox__singel-input">
                        <input
                          id="userEmail"
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && <span className="error-message">{errors.email.message}</span>}
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="bd-postbox__singel-input">
                        <input
                          id="userPhone"
                          type="text"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "phone is required",
                            minLength: 10,
                          })}
                        />
                        {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                      </div>
                    </div>

                    <div className="col-xxl-6 col-xl-6 col-lg-6">
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
                        <span className="error-message">{errors.password.message}</span>
                      )}
                    </div>
                    
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="bd-password-box d-flex justify-content-between">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password (at least 6 characters)"
                          {...register("confirm_password", {
                            required: "Password is required",
                            minLength: 6,
                          })}
                        />
                        <span className="input-icon">
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="password-toggle-btn"
                          >
                            <i
                              className={
                                showConfirmPassword
                                  ? "fa-solid fa-eye"
                                  : "fa-regular fa-eye-slash"
                              }
                            ></i>
                          </button>
                        </span>
                      </div>
                      {errors.password && (
                        <span className="error-message">{errors.password.message}</span>
                      )}
                    </div>

                    <div className="signup-action">
                      <div className="signup-action-check">
                        <input
                          className="e-check-input"
                          type="checkbox"
                          id="sing-up"
                          {...register("acceptTerms")}
                        />
                        <label className="sign-check" htmlFor="sing-up">
                          <span>
                            Accept the terms and
                            <Link href="/privacy-policy">Privacy Policy</Link>
                          </span>
                        </label>
                      </div>
                      {errors.acceptTerms && (
                        <span className="error-message">{errors.acceptTerms.message}</span>
                      )}
                    </div>

                    <div className="bd-sigin__action-button mb-20">
                      <button
                        className="bd-fill__btn w-100"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? <div className="spinner-border text-success" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>:<>Register now</>}
                      </button>
                    </div>
                    <div className="bd-registered__wrapper">
                      <div className="not-register">
                        <span>Already Have an Account? </span>
                        <span>
                          <Link href="/auth/login">Log In</Link>
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

export default RegistarMain;
