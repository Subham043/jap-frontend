
import EmailIcon from "../sheardComponent/elements/icons/email-icon";
import LocationIcon from "../sheardComponent/elements/icons/location-icon";
import PhoneIcon from "../sheardComponent/elements/icons/phone-icon";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";
import { useToast } from "@/hooks/useToast";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    phone: yup
      .string()
      .required()
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
  })
  .required();

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {toastSuccess, toastError} = useToast();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async() => {
    setLoading(true);
    try {
      const response = await axiosPublic.post(api_routes.contact, {...getValues()});
      toastSuccess(response.data.message);
      reset({
        message: '',
        name: '',
        phone: '',
        email: '',
      })
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
    <section className="bd-Contact__area pt-55">
      <div className="container">
        <div className="row g-0 justify-content-center">
          <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-12">
            <div className="bd-contact__main-wrapper mb-70">
              <div className="bd-section__title-wrapper">
                <h2 className="bd-section__title mb-50">Get in Touch</h2>
              </div>
              <div className="bd-contact__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bd-single__form-input mb-20">
                        <input
                          type="text"
                          placeholder="Name"
                          {...register("name", {
                            required: "name is required",
                          })}
                        />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bd-single__form-input  mb-20">
                        <input type="text" placeholder="Phone" {...register("phone", {
                            required: "phone is required",
                          })} />
                          {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bd-single__form-input  mb-20">
                        <input
                          type="text"
                          placeholder="Email"
                          
                          {...register("email", {
                            required: "Email or UserName is required",
                            pattern: {
                              value:
                                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                              message: "Invalid email format",
                            },
                          })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bd-single__form-input  mb-20">
                        <textarea
                          
                          id="message"
                          placeholder="Messages"
                          {...register("message", {
                            required: "message is required",
                          })}
                        />
                        {errors.message && <span className="text-danger">{errors.message.message}</span>}
                      </div>
                    </div>
                  </div>
                  <div className="contact-btn">
                    <button type="submit" className="bd-fill__btn" disabled={loading}>
                      {loading ? <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>:<>Submit Now</>}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4">
            <div className="bd__sidebar-wrapper mb-70">
              <div className="bd-sidebar__support">
                <div className="bd-sidebar__title">
                  <h4>Support Contact</h4>
                </div>
                <div className="bd-sidebar__content">
                  <div className="bd-contact__list">
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <PhoneIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>Phone</h4>
                          </div>
                          <span>
                            Mobile :
                            <a href="tel:+919620306991">
                              <span>+91-9620306991</span>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <EmailIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>Email</h4>
                          </div>
                          <span>
                            <a href="mailto:operations@jap.bio">
                              operations@jap.bio
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <LocationIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>Regd office</h4>
                          </div>
                          <p>
                            Salivaram PO, Denkanikottai, Tamil Nadu - 635107
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bd-contact__item">
                      <div className="bd-contact__item-list">
                        <div className="bd-contact__icon">
                          <LocationIcon />
                        </div>
                        <div className="bd-contact__content">
                          <div className="bd-contact__title">
                            <h4>Business office</h4>
                          </div>
                          <p>
                          7, 2nd Cross Diagonal Road, Jayanagar 3rd Block, Bengaluru - 560011
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
