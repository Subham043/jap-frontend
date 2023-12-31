import React, { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import AccountLayout from '@/components/sheardComponent/AccountLayout';
import Pagetitle from '@/components/sheardComponent/Pagetitle';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from '@/hooks/useToast';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { api_routes } from '@/helper/routes';
import Head from 'next/head';

const schema = yup
  .object({
    old_password: yup.string().required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

const SettingsPage:NextPageWithLayout = () => {
    const [loading, setLoading] = useState(false);
    const {toastSuccess, toastError} = useToast();
    const axiosPrivate = useAxiosPrivate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordTwo, setShowPasswordTwo] = useState(false);
    const [showPassword3, setShowPassword3] = useState(false);
    const {
        handleSubmit,
        register,
        setError,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async () => {
        setLoading(true);
        try {
          const response = await axiosPrivate.post(api_routes.password_update, {...getValues()});
          toastSuccess(response.data.message);
          reset({
            old_password: "",
            password: "",
            confirm_password: "",
          });
        } catch (error: any) {
          if (error?.response?.data?.message) {
            toastError(error?.response?.data?.message);
          }
          if (error?.response?.data?.errors?.old_password) {
            setError("old_password", {
              type: "server",
              message: error?.response?.data?.errors?.old_password[0],
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
        <>
            <Head>
              <title>JAP - Settings</title>
            </Head>
            <h4 className="mb-25">Settings</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="bd-password-box d-flex justify-content-between">
                      <input
                        type={showPassword3 ? "text" : "password"}
                        placeholder="Current Password"
                        {...register("old_password")}
                      />
                      <span className="input-icon">
                        <button
                          type="button"
                          onClick={() => setShowPassword3(!showPassword3)}
                          className="password-toggle-btn"
                        >
                          <i
                            className={
                              showPassword3
                                ? "fa-solid fa-eye"
                                : "fa-regular fa-eye-slash"
                            }
                          ></i>
                        </button>
                      </span>
                    </div>
                    {errors.old_password && (
                      <span className='text-danger'>{errors.old_password.message}</span>
                    )}
                  </div>
                  
                  <div className="col-md-4">
                    <div className="bd-password-box d-flex justify-content-between">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                        {...register("password")}
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
                      <span className='text-danger'>{errors.password.message}</span>
                    )}
                  </div>

                  <div className="col-md-4">
                    <div className="bd-password-box d-flex justify-content-between">
                      <input
                        type={showPasswordTwo ? "text" : "password"}
                        placeholder=" Confirm Password"
                        {...register("confirm_password")}
                      />
                      <span className="input-icon">
                        <button
                          type="button"
                          onClick={() =>
                            setShowPasswordTwo(!showPasswordTwo)
                          }
                          className="password-toggle-btn"
                        >
                          <i
                            className={
                              showPasswordTwo
                                ? "fa-solid fa-eye"
                                : "fa-regular fa-eye-slash"
                            }
                          ></i>
                        </button>
                      </span>
                    </div>
                    {errors.confirm_password && (
                      <span className='text-danger'>{errors.confirm_password.message}</span>
                    )}
                  </div>

                    <div className="col-sm-12">
                        <div className="cont-btn mb-20  mt-10 text-center">
                            <button type="submit" className="bd-bn__btn-1">
                                {loading ? <div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>:<>Update Password</>}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

SettingsPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>
            <Pagetitle title='Settings' img='/assets/img/banner/page-banner-2.jpg' />
            <AccountLayout>
                {page}
            </AccountLayout>
        </main>
    )
}

export default SettingsPage;