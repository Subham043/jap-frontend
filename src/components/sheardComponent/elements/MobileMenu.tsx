import nav_menus_list, { nav_menus_list2 } from "@/components/headers/nav-menus";
import { useGlobalContext } from "@/context/AppProvider";
import Link from "next/link";
import React,{useCallback, useState} from "react";
// import { axiosPublic } from "../../../../axios";
// import { api_routes } from "@/helper/routes";
// import useSWRInfinite from "swr/infinite";
// import { CategoryState } from "@/helper/types";

const PAGE_SIZE = 100;

const MobileMenu = () => {
    const {setShowSidebar} = useGlobalContext()
    const safeSetShowSidebar = setShowSidebar || (() => {});
    const [submenuOpen, setSubmenuOpen] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
  
    const handleMenuToggle = (id: number) => {
      setSubmenuOpen(id)
      setOpen(!open);
    };

    // const categoryFetcher = async (url: string) => {
    //   const res =await axiosPublic.get(url);
    //   return res.data.data
    // };

    // const getCategoryKey = useCallback((pageIndex:any, previousPageData:any) => {
    //     if (previousPageData && previousPageData.length===0) return null;
    //     return `${api_routes.categories}?total=${PAGE_SIZE}&page=${pageIndex+1}`;
    // }, []);

    // const {
    //     data:categoryData,
    //     size:categorySize,
    //     setSize:setCategorySize,
    //     isLoading:isCategoryLoading
    // } = useSWRInfinite<CategoryState>(getCategoryKey, categoryFetcher, {
    //     initialSize:1,
    //     revalidateAll: false,
    //     revalidateFirstPage: false,
    //     persistSize: false,
    //     parallel: false
    // });
  
  return (
    <>
      <ul>
        <li>
          <Link onClick={() => safeSetShowSidebar(false)} href='/'>Home</Link>
        </li>
        <li>
          <Link onClick={() => safeSetShowSidebar(false)} href='/what-new'>What&apos;s New</Link>
        </li>
        {nav_menus_list.map((item, index) => (
          <li
          onClick={() => handleMenuToggle(item.id)}
            key={index}
            className={`${
              item.hasDropdown && submenuOpen === item.id && open === true ? "menu-item-has-children has-droupdown active" : `${item.hasDropdown ? "menu-item-has-children has-droupdown" : ""}`
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
            {item.hasDropdown && (
              <ul
                className={`sub-menu ${item.hasDropdown  && submenuOpen === item.id && open === true ? "active" : ""}`}
              >
                {item.dropdownItems &&
                  item.dropdownItems.map((dropdownItem, subIndex) => (
                    <li key={subIndex}>
                      <Link onClick={() => safeSetShowSidebar(false)} href={dropdownItem.link}>{dropdownItem.title}</Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}

        <li
          onClick={() => handleMenuToggle(7)}
          className={`${submenuOpen === 7 && open === true ? "menu-item-has-children has-droupdown active" : "menu-item-has-children has-droupdown"}`}
        >
          <Link href='/products'>Exports</Link>
          <ul
            className={`sub-menu ${submenuOpen === 7 && open === true ? "active" : ""}`}
          >
            <li>
              <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=spices'>Spices</Link>
            </li>
            <li>
              <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=nuts'>Nuts</Link>
            </li>
            <li>
              <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=organic-millets'>Millets</Link>
            </li>
            <li>
              <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=herbs'>Herbs</Link>
            </li>
            {/* {
              categoryData?.flat().map((item, index) => (item.name!=='O2C' && item.name!=='o2c' && item.name!=='Fruits' && item.name!=='fruits' && item.name!=='Vegetables' && item.name!=='vegetables') && <li key={index}><Link onClick={() => safeSetShowSidebar(false)} href={`/products?category=${item.slug}`}>{item.name}</Link></li>)
            } */}
          </ul>
        </li>
        
        <li
          onClick={() => handleMenuToggle(8)}
          className={`${submenuOpen === 8 && open === true ? "menu-item-has-children has-droupdown active" : "menu-item-has-children has-droupdown"}`}
        >
          <Link href='/products'>B2B</Link>
          <ul
            className={`sub-menu ${submenuOpen === 8 && open === true ? "active" : ""}`}
          >
            <li
              className={`${submenuOpen === 8 && open === true ? "menu-item-has-children has-droupdown active" : "menu-item-has-children has-droupdown"}`}
            >
              <Link href='/products'>Bulk</Link>
              <ul
                className={`sub-menu ${submenuOpen === 8 && open === true ? "active" : ""}`}
              >
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=spices'>Spices</Link>
                </li>
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=nuts'>Nuts</Link>
                </li>
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=organic-millets'>Millets</Link>
                </li>
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=herbs'>Herbs</Link>
                </li>
              </ul>
            </li>
            <li
              className={`${submenuOpen === 8 && open === true ? "menu-item-has-children has-droupdown active" : "menu-item-has-children has-droupdown"}`}
            >
              <Link href='/products'>Retail</Link>
              <ul
                className={`sub-menu ${submenuOpen === 8 && open === true ? "active" : ""}`}
              >
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=o2c'>O2C</Link>
                </li>
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=vegetables'>Vegetables</Link>
                </li>
                <li>
                  <Link onClick={() => safeSetShowSidebar(false)} href='/products?category=fruits'>Fruits</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {nav_menus_list2.map((item, index) => (
          <li
          onClick={() => handleMenuToggle(item.id)}
            key={index}
            className={`${
              item.hasDropdown && submenuOpen === item.id && open === true ? "menu-item-has-children has-droupdown active" : `${item.hasDropdown ? "menu-item-has-children has-droupdown" : ""}`
            }`}
          >
            <Link href={item.link}>{item.title}</Link>
            {item.hasDropdown && (
              <ul
                className={`sub-menu ${item.hasDropdown  && submenuOpen === item.id && open === true ? "active" : ""}`}
              >
                {item.dropdownItems &&
                  item.dropdownItems.map((dropdownItem, subIndex) => (
                    <li key={subIndex}>
                      <Link onClick={() => safeSetShowSidebar(false)} href={dropdownItem.link}>{dropdownItem.title}</Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
        
      </ul>
    </>
  );
};

export default MobileMenu;
