import { StaticImageData } from "next/image";
interface CategoryType {
  _id:string;
  categoryName: string;
  categoryclass: string;
  categoryThumb: string | StaticImageData;
}
import img2 from "../../../public/assets/img/category/img/cateegory-img-02.png";
import img4 from "../../../public/assets/img/category/img/cateegory-img-04.png";
import img5 from "../../../public/assets/img/category/img/cateegory-img-05.png";
import img1 from "../../../public/assets/img/category/img/cateegory-img-01.png";
import img3 from "../../../public/assets/img/category/img/cateegory-img-03.png";

export const categoryData: CategoryType[] = [
  {
    _id: "category-id-1",
    categoryName: "fruit & vegetables",
    categoryclass: "fa-regular fa-apple-whole",
    categoryThumb: img2,
  },
  {
    _id: "category-id-2",
    categoryName: "Fresh Fruits",
    categoryclass: "fa-regular fa-cherries",
    categoryThumb: img4,
  },
  {
    _id: "category-id-3",
    categoryName: "Biscuits & Snacks",
    categoryclass: "fa-regular fa-peach",
    categoryThumb: img5,
  },
  {
    _id: "category-id-4",
    categoryName: "Organic Food",
    categoryclass: "fa-regular fa-citrus",
    categoryThumb: img2,
  },
  {
    _id: "category-id-5",
    categoryName: "Grocery & Staples",
    categoryclass: "fa-regular fa-tomato",
    categoryThumb: img1,
  },
  {
    _id: "category-id-6",
    categoryName: "Milks and Dairies",
    categoryclass: "fa-regular fa-glass",
    categoryThumb: img1,
  },
  {
    _id: "category-id-7",
    categoryName: "Clothing & beauty",
    categoryclass: "fa-regular fa-drumstick",
    categoryThumb: img3,
  },
  {
    _id: "category-id-8",
    categoryName: "Wines & Drinks",
    categoryclass: "fa-regular fa-mug-hot",
    categoryThumb: img5,
  },
  {
    _id: "category-id-9",
    categoryName: "Staple Foods",
    categoryclass: "fa-sharp fa-solid fa-bowl-rice",
    categoryThumb: img4,
  },
];
