import Link from 'next/link';
import React, { useCallback } from 'react';
import nav_menus_list, { nav_menus_list2 } from './nav-menus';
// import { axiosPublic } from '../../../axios';
// import { api_routes } from '@/helper/routes';
// import useSWRInfinite from 'swr/infinite';
// import { CategoryState } from '@/helper/types';

const PAGE_SIZE = 100;

const NavMenu = () => {
    // const categoryFetcher = async (url: string) => {
    //     const res =await axiosPublic.get(url);
    //     return res.data.data
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
                <li className={`active`}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={`active blink-text`}>
                    <Link href='/what-new'>What&apos;s New</Link>
                </li>
                {nav_menus_list?.map((item, index) => {
                    return (
                        <li key={index} className={`${item.hasDropdown && !item.megamenu ? 'active has-dropdown'
                            : item.megamenu && 'mega-menu has-dropdown'}`}>
                            <Link href={`${item.link}`}>{`${item.title}`}</Link>

                            {item?.hasDropdown && !item.megamenu && <ul className="submenu">
                                {item?.dropdownItems?.map((menu, index) => (
                                    <li key={index}><Link href={`${menu.link}`}>{menu.title}</Link></li>
                                ))}
                            </ul>}
                        </li>
                    )
                })}
                <li className={`active has-dropdown`}>
                    <Link href='/products'>Exports</Link>
                    <ul className="submenu">
                        <li><Link href='/products?category=spices'>Spices</Link></li>
                        <li><Link href='/products?category=nuts'>Nuts</Link></li>
                        <li><Link href='/products?category=organic-millets'>Millets</Link></li>
                        <li><Link href='/products?category=herbs'>Herbs</Link></li>
                        {/* {
                            categoryData?.flat().map((item, index) => (item.name!=='O2C' && item.name!=='o2c' && item.name!=='Fruits' && item.name!=='fruits' && item.name!=='Vegetables' && item.name!=='vegetables') && <li key={index}><Link href={`/products?category=${item.slug}`}>{item.name}</Link></li>)
                        } */}
                    </ul>
                </li>
                <li className={`active has-dropdown`}>
                    <Link href='/products'>B2B</Link>
                    <ul className="submenu">
                        <li className={`active has-dropdown`}>
                            <Link href='/products'>Bulk</Link>
                            <ul className="submenu">
                                <li><Link href='/products?category=spices'>Spices</Link></li>
                                <li><Link href='/products?category=nuts'>Nuts</Link></li>
                                <li><Link href='/products?category=organic-millets'>Millets</Link></li>
                                <li><Link href='/products?category=herbs'>Herbs</Link></li>
                            </ul>
                        </li>
                        <li className={`active has-dropdown`}>
                            <Link href='/products'>Retail</Link>
                            <ul className="submenu">
                                <li><Link href='/products?category=o2c'>O2C</Link></li>
                                <li><Link href='/products?category=fruits'>Fruits</Link></li>
                                <li><Link href='/products?category=vegetables'>Vegetables</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                {nav_menus_list2?.map((item, index) => {
                    return (
                        <li key={index} className={`${item.hasDropdown && !item.megamenu ? 'active has-dropdown'
                            : item.megamenu && 'mega-menu has-dropdown'}`}>
                            <Link href={`${item.link}`}>{`${item.title}`}</Link>

                            {item?.hasDropdown && !item.megamenu && <ul className="submenu">
                                {item?.dropdownItems?.map((menu, index) => (
                                    <li key={index}><Link href={`${menu.link}`}>{menu.title}</Link></li>
                                ))}
                            </ul>}
                        </li>
                    )
                })}

            </ul>
        </>
    );
};

export default NavMenu;