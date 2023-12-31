import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { countries, payment_modes } from "./nice-select-data";
import NiceSelectTwo from "./NiceSelectTwo";
import { useCart } from "@/context/CartProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@/hooks/useToast";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { api_routes } from "@/helper/routes";
import useRazorpay from "react-razorpay";
import { Order } from "@/helper/types";
import { useRouter } from "next/router";

const schema = yup
  .object({
    billing_first_name: yup.string().required(),
    billing_last_name: yup.string().required(),
    billing_email: yup.string().email().required(),
    billing_phone: yup
      .string()
      .required()
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    billing_country: yup.string().required(),
    billing_state: yup.string().required(),
    billing_city: yup.string().required(),
    billing_pin: yup.string().required(),
    billing_address_1: yup.string().required(),
    mode_of_payment: yup.string().required(),
  })
  .required();

const CheckOutMain = () => {
  const {cart, cartLoading, updateCart} = useCart();
  const [country, setCountry] = useState<string>("");
  const [payment, setPayment] = useState<string>("Online");
  const {toastSuccess, toastError} = useToast();
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [Razorpay] = useRazorpay();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values:{
      mode_of_payment:'Online',
      billing_country: 'India',
      billing_state: "",
      billing_city: "",
      billing_pin: "",
      billing_address_1: "",
      billing_first_name: "",
      billing_last_name: "",
      billing_email: "",
      billing_phone: "",
    }
  });

  const onSubmit = async () => {
    setLoadingCheckout(true);
    try {
      const response = await axiosPrivate.post(api_routes.place_order, {...getValues(), order: cart?.products.map(item => {return {product_id:item.id, quantity: item.quantity}})});
      if(payment==='Cash On Delivery'){
        toastSuccess(response.data.message);
        reset({
          billing_first_name: "",
          billing_last_name: "",
          billing_email: "",
          billing_phone: "",
          billing_country: "",
          billing_state: "",
          billing_city: "",
          billing_pin: "",
          billing_address_1: "",
          mode_of_payment: "",
        });
        await updateCart([]);
        router.push(`/account/orders/${response.data.order.receipt}`)
      }else{
        loadRazorpay(response.data.order as Order);
      }
    } catch (error: any) {
      
      if (error?.response?.data?.message) {
        toastError(error?.response?.data?.message);
      }
      if (error?.response?.data?.errors?.billing_first_name) {
        setError("billing_first_name", {
          type: "server",
          message: error?.response?.data?.errors?.billing_first_name[0],
        });
      }
      if (error?.response?.data?.errors?.billing_last_name) {
        setError("billing_last_name", {
          type: "server",
          message: error?.response?.data?.errors?.billing_last_name[0],
        });
      }
      if (error?.response?.data?.errors?.billing_email) {
        setError("billing_email", {
          type: "server",
          message: error?.response?.data?.errors?.billing_email[0],
        });
      }
      if (error?.response?.data?.errors?.billing_phone) {
        setError("billing_phone", {
          type: "server",
          message: error?.response?.data?.errors?.billing_phone[0],
        });
      }
      if (error?.response?.data?.errors?.billing_country) {
        setError("billing_country", {
          type: "server",
          message: error?.response?.data?.errors?.billing_country[0],
        });
      }
      if (error?.response?.data?.errors?.billing_state) {
        setError("billing_state", {
          type: "server",
          message: error?.response?.data?.errors?.billing_state[0],
        });
      }
      if (error?.response?.data?.errors?.billing_city) {
        setError("billing_city", {
          type: "server",
          message: error?.response?.data?.errors?.billing_city[0],
        });
      }
      if (error?.response?.data?.errors?.billing_pin) {
        setError("billing_pin", {
          type: "server",
          message: error?.response?.data?.errors?.billing_pin[0],
        });
      }
      if (error?.response?.data?.errors?.billing_address_1) {
        setError("billing_address_1", {
          type: "server",
          message: error?.response?.data?.errors?.billing_address_1[0],
        });
      }
      if (error?.response?.data?.errors?.mode_of_payment) {
        setError("mode_of_payment", {
          type: "server",
          message: error?.response?.data?.errors?.mode_of_payment[0],
        });
      }
    } finally {
      setLoadingCheckout(false);
    }
  };

  const loadRazorpay = (order:Order) => {
    const options = {
      key: 'rzp_test_C6y0UqyRMkEWqB', // Enter the Key ID generated from the Dashboard
      amount: (order.total_price_with_coupon_dicount * 100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "JAP",
      description: "Payment For Order Reciept: " + order.receipt,
      image: "https://jap.bio/assets/img/logo/new-logo.png",
      order_id: order.razorpay_order_id ? order.razorpay_order_id : '', //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response:any) {
        verifyOnlinePayment({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        })
      },
      prefill: {
        name: order.billing_first_name + ' ' + order.billing_last_name,
        email: order.billing_email,
        contact: (order.billing_phone).toString(),
      },
      theme: {
        color: "#699c47",
      },
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  }

  const verifyOnlinePayment = async(data:{razorpay_order_id:string, razorpay_payment_id:string, razorpay_signature:string}) => {
    setLoadingCheckout(true);
    try {
      const response = await axiosPrivate.post(api_routes.place_order_payment_verify, {...data});
      toastSuccess(response.data.message);
      reset({
        billing_first_name: "",
        billing_last_name: "",
        billing_email: "",
        billing_phone: "",
        billing_country: "",
        billing_state: "",
        billing_city: "",
        billing_pin: "",
        billing_address_1: "",
        mode_of_payment: "",
      });
      await updateCart([]);
      router.push(`/account/orders/${response.data.order.receipt}`)
    } catch (error: any) {
      if (error?.response?.data?.message) {
        toastError(error?.response?.data?.message);
      }
    } finally {
      setLoadingCheckout(false);
    }
  }

  const selectCountryHandler = (item: {categoryName: string}, name: string) => setValue('billing_country', item.categoryName);
  const selectPaymentModeHandler = (item: {categoryName: string}, name: string) => setValue('mode_of_payment', item.categoryName);

  return (
    <>
      <section className="checkout-area pt-50 pb-30">
        <div className="container small-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* billing info */}
              <div className="col-lg-7">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your First Name"
                          {...register("billing_first_name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.billing_first_name && (
                          <span className="error-message">
                            {errors.billing_first_name.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Last Name"
                          {...register("billing_last_name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.billing_last_name && (
                          <span className="error-message">
                            {errors.billing_last_name.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email Address"
                          {...register("billing_email", {
                            required: "Email is required",
                          })}
                        />
                        {errors.billing_email && (
                          <span className="error-message">
                            {errors.billing_email.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          {...register("billing_phone", {
                            required: "Phone is required",
                          })}
                        />
                        {errors.billing_phone && (
                          <span className="error-message">
                            {errors.billing_phone.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <NiceSelectTwo
                          options={countries}
                          defaultCurrent={0}
                          onChange={selectCountryHandler}
                          name=""
                          setapiEndPoint={setCountry}
                          className="gender-select"
                        />
                        {errors.billing_country && (
                          <span className="error-message">
                            {errors.billing_country.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="State"
                          {...register("billing_state")}
                        />
                        {errors.billing_state && (
                          <span className="error-message">
                            {errors.billing_state.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="City"
                          {...register("billing_city")}
                        />
                        {errors.billing_city && (
                          <span className="error-message">
                            {errors.billing_city.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Pincode <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Pincode"
                          {...register("billing_pin", {
                            required: "Pincode is required",
                          })}
                        />
                        {errors.billing_pin && (
                          <span className="error-message">
                            {errors.billing_pin.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Address"
                          {...register("billing_address_1", {
                            required: "Address is required",
                          })}
                        />
                        {errors.billing_address_1 && (
                          <span className="error-message">
                            {errors.billing_address_1.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>
                          Mode Of Payment <span className="required">*</span>
                        </label>
                        <NiceSelectTwo
                          options={payment_modes}
                          defaultCurrent={0}
                          onChange={selectPaymentModeHandler}
                          name=""
                          setapiEndPoint={setPayment}
                          className="gender-select"
                        />
                        {errors.mode_of_payment && (
                          <span className="error-message">
                            {errors.mode_of_payment.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* order info */}
              <div className="col-lg-5">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart && cart.products.map((item, index) => {
                          return (
                            <tr className="cart_item" key={index}>
                              <td className="product-name">
                                {item.name}&nbsp;
                                <strong className="product-quantity">
                                  ({item.quantity} pcs. × &#8377;{item?.discounted_price})
                                </strong>
                              </td>
                              <td className="product-total">
                                <span className="amount">&#8377;{item.total_quantity_price}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      {cart && <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td>
                            <span className="amount">&#8377;{cart.sub_total}</span>
                          </td>
                        </tr>
                        <tr className="cart-subtotal">
                          <th>Total Discount</th>
                          <td>
                            <span className="amount">- &#8377;{cart.total_discount}</span>
                          </td>
                        </tr>
                        <tr className="cart-subtotal">
                          <th>Delivery Charge</th>
                          <td>
                            <span className="amount">+ &#8377;{cart.delivery_charge}</span>
                          </td>
                        </tr>
                        <tr className="cart-subtotal">
                          <th>GST</th>
                          <td>
                            <span className="amount">+ &#8377;{cart.gst_charge}</span>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td>
                            <strong>
                              <span className="amount">&#8377;{cart.total_price_with_coupon_dicount}</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>}
                    </table>
                  </div>

                  <div className="payment-method">
                    <div className="order-button-payment mt-20">
                        <button type="submit" className="bd-fill__btn" disabled={loadingCheckout}>
                          {loadingCheckout ? <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>:<>Place Order</>}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckOutMain;
