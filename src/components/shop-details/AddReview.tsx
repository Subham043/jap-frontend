import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToast } from "@/hooks/useToast";
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";
import NiceSelectTwo from "../checkout/NiceSelectTwo";
import { ratings } from "../checkout/nice-select-data";

type Props = {
  product_id: number
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    star: yup.string().required(),
    image: yup.mixed().required('An image is required')
    .test('fileRequired', 'Please select an image', (value:any) => {
      return value && value.length>0;
    })
    .test('fileFormat', 'Please select a valid image', (value:any) => {
      return value && value.length>0 && ['image/webp', 'image/png', 'image/jpeg', 'image/jpg'].includes(value[0].type);
    }),
  })
  .required();

const AddReview = ({product_id}:Props) => {
    const {toastError, toastSuccess} = useToast();
    const [loading, setLoading] = useState<boolean>(false);
    const [star, setStar] = useState<string>("5 stars");

    const {
        handleSubmit,
        register,
        reset,
        setError,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        values:{
          name: "",
          message: "",
          email: "",
          star: "5",
          image: ""
        }
    });

    const selectStarHandler = (item: {categoryName: string, value?: number|string}, name: string) => setValue('star', item.value ? item.value.toString() : '');

    const onSubmit = async (data: any) => {
      setLoading(true);
      try {
          const formData = new FormData;
          formData.append('email', data.email);
          formData.append('image', data.image[0]);
          formData.append('message', data.message);
          formData.append('name', data.name);
          formData.append('star', data.star);
          const response = await axiosPublic.post(api_routes.rating+`/${product_id}/create`, formData);
          toastSuccess(response.data.message);
          reset({
            name: "",
            message: "",
            email: "",
            star: "",
            image: ""
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
        if (error?.response?.data?.errors?.star) {
          setError("star", {
            type: "server",
            message: error?.response?.data?.errors?.star[0],
          });
        }
        if (error?.response?.data?.errors?.image) {
          setError("image", {
            type: "server",
            message: error?.response?.data?.errors?.image[0],
          });
        }
        if (error?.response?.data?.errors?.message) {
          setError("message", {
            type: "server",
            message: error?.response?.data?.errors?.message[0],
          });
        }
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
      <div className="product__details-comment ">
        <>
          <div className="comment-title mb-20">
            <h3>Add review & rating</h3>
          </div>
          <div className="comment-input-box mb-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-xxl-6">
                  <div className="bd-postbox__singel-input">
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register('name')}
                    />
                  </div>
                  {errors.name && (
                    <span className="error-message">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="col-xxl-6">
                  <div className="bd-postbox__singel-input">
                    <input
                      type="text"
                      placeholder="Your email"
                      {...register('email')}
                    />
                  </div>
                  {errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="col-xxl-6">
                  <div className="bd-postbox__singel-input">
                    <input
                      type="file"
                      className="form-control form-control-sm"
                      {...register('image')}
                    />
                  </div>
                  {errors.image && (
                    <span className="error-message">
                      {errors.image.message}
                    </span>
                  )}
                </div>
                <div className="col-xxl-6">
                  <div className="country-select">
                    <NiceSelectTwo
                      options={ratings}
                      defaultCurrent={0}
                      onChange={selectStarHandler}
                      name=""
                      setapiEndPoint={setStar}
                      className="gender-select"
                    />
                    {errors.star && (
                      <span className="error-message">
                        {errors.star.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-xxl-12">
                  <div className="bd-single__form-input">
                    <textarea
                      placeholder="Your review"
                      className="comment-input comment-textarea mb-20"
                      {...register('message')}
                    />
                  </div>
                  {errors.message && (
                    <span className="error-message">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="col-xxl-12">
                  <div className="comment-submit">
                    <button type="submit" className="bd-fill__btn" disabled={loading}>
                        {loading ? <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>:<>Submit</>}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      </div>
    </>
  );
};

export default AddReview;
