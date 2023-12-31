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
    email: yup.string().email().required(),
  })
  .required();

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const {toastError, toastSuccess} = useToast();

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async() => {
    setLoading(true);
    try {
      const response = await axiosPublic.post(api_routes.forgot_password, {...getValues()});
      toastSuccess(response.data.message);
      reset({
        email: "",
      });
    } catch (error: any) {
      if (error?.response?.data?.message) {
        toastError(error?.response?.data?.message);
      }
      if (error?.response?.data?.errors?.email) {
        setError("email", {
          type: "server",
          message: error?.response?.data?.errors?.email[0],
        });
      }
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
                    <div className="bd-sigin__action-button mb-20">
                      <button className="bd-fill__btn w-100" type="submit" disabled={loading}>
                        {loading ? <div className="spinner-border text-success" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>:<>Reset Now</>}
                      </button>
                    </div>
                    <div className="bd-registered__wrapper">
                      <div className="not-register">
                        <span>Remember your password?</span>
                        <span>
                          <Link href="/auth/login">Sign In</Link>
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

export default ForgotPassword;
