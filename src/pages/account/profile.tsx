import React, { ReactElement, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import AccountLayout from '@/components/sheardComponent/AccountLayout';
import Pagetitle from '@/components/sheardComponent/Pagetitle';
import { useSession } from 'next-auth/react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from '@/hooks/useToast';
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { api_routes } from '@/helper/routes';
import { ErrorMessage } from '@hookform/error-message';
import Head from 'next/head';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .required()
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
  })
  .required();

const ProfilePage:NextPageWithLayout = () => {
    const { data } = useSession();
    const [loading, setLoading] = useState(false);
    const {toastSuccess, toastError} = useToast();
    const axiosPrivate = useAxiosPrivate();
    const {
        handleSubmit,
        register,
        setError,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        values:{
            email: data ? data.user.email : '',
            name: data ? data.user.name : '',
            phone: data ? data.user.phone : ''
        }
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
          const response = await axiosPrivate.post(api_routes.profile_update, {...getValues()});
          toastSuccess(response.data.message);
        } catch (error: any) {
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
        } finally {
          setLoading(false);
        }
      };

    return (
        <>
            <Head>
              <title>JAP - Profile</title>
            </Head>
            <h4 className="mb-25">My Profile</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-from-input mb-20">
                        <label htmlFor="Name"> Name</label>
                        <input
                            id="Name"
                            type="text"
                            placeholder="Name"
                            {...register("name")}
                        />
                        <ErrorMessage
                          errors={errors}
                          name='message'
                          as={<div style={{ color: 'red' }} />}
                        />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-from-input mb-20">
                        <label htmlFor="Email">Email</label>
                        <input
                            id="Email"
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                        />
                        <ErrorMessage
                          errors={errors}
                          name='message'
                          as={<div style={{ color: 'red' }} />}
                        />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="contact-from-input mb-20">
                        <label htmlFor="Phone">Phone </label>
                        <input
                            id="Phone"
                            type="text"
                            placeholder="Phone"
                            {...register("phone")}
                        />
                        <ErrorMessage
                          errors={errors}
                          name='message'
                          as={<div style={{ color: 'red' }} />}
                        />
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="cont-btn mb-20  mt-10 text-center">
                            <button type="submit" className="bd-bn__btn-1">
                                {loading ? <div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>:<>Update Profile</>}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>
            <Pagetitle title='Profile' img='/assets/img/banner/page-banner-2.jpg' />
            <AccountLayout>
                {page}
            </AccountLayout>
        </main>
    )
}

export default ProfilePage;