export interface UserReviewType {
  _id:string;
  productName:string;
  review: string; 
  name: string;
  email: string;
  date: string;
  productId: string;
  categoryName: string;
  retting: number;
  img?:string | StaticImageData;
}
import imgOne from "../../../public/assets/img/comment-user/course-student.png";
import commentOne from "../../../public/assets/img/comment-user/comments-1.png";
import { StaticImageData } from "next/image";
export const bestReviewData: UserReviewType[] = [
  {
    _id: "review-id-1",
    productName: "Organic Banna",
    review:
      "All the generators on the Internet tend to repeat predefined, making this the true generator human made pesticides and fertilizers genetically",
    name: "ibrahim khalil",
    img: imgOne,
    email: "ibrahim@gmail.com",
    date: "09/28/23 06:22 pm",
    productId: "product-id-1",
    categoryName: "Fresh Fruits",
    retting: 5,
  },
  {
    _id: "review-id-2",
    productName: "Kach Kogozi Labu",
    review:
      "All the generators on the Internet tend to repeat predefined, making this the true generator human made pesticides and fertilizers genetically",
    name: "sagor  omi",
    img: commentOne,
    email: "sagor@gmail.com",
    date: "09/11/23 01:32 pm",
    productId: "product-id-2",
    categoryName: "Staple Foods",
    retting: 5,
  },
  {
    _id: "review-id-3",
    productName: "Chocolate milk",
    review:
      "All the generators on the Internet tend to repeat predefined, making this the true generator human made pesticides and fertilizers genetically",
    name: "Md  Tanzil Mia",
    img: imgOne,
    email: "tanzil@gmail.com",
    date: "09/06/23 03:36 pm",
    productId: "product-id-13",
    categoryName: "fruit & vegetables",
    retting: 5,
  },

  {
    _id: "review-id-4",
    productName: "Organic Banna",
    review:
      "All the generators on the Internet tend to repeat predefined, making this the true generator human made pesticides and fertilizers genetically",
    name: "Manuyel  Macron",
    img: commentOne,
    email: "abc@gmail.com",
    date: "09/28/23 06:38 pm",
    productId: "product-id-1",
    categoryName: "Fresh Fruits",
    retting: 2,
  },
];
