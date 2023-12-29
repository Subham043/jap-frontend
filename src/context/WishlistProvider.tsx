import React, { createContext, useCallback, useContext } from "react";
import { ChildrenType, Wishlist as WishlistAPIType } from "../helper/types";
import { axiosPublic } from "../../axios";
import { api_routes } from "../helper/routes";
import useSWR, { useSWRConfig } from 'swr'
// import { useLogin } from "./LoginProvider";
import { useToast } from "../hooks/useToast";
import { useSession } from "next-auth/react";

type WishlistUpdateDataType = number[]|[]

type WishlistContextType = {
  wishlist: WishlistAPIType | undefined;
  wishlistLoading: boolean;
  updateWishlist: (data: WishlistUpdateDataType) => Promise<void>;
  fetchWishlist: () => Promise<void>;
  updateWishlistData: (data: WishlistAPIType) => Promise<void>;
  removeWishlistItem: (product_id: number) => Promise<void>;
}

const wishlistDefaultValues: WishlistContextType = {
  wishlist: undefined,
  wishlistLoading: false,
  updateWishlist: async (data: WishlistUpdateDataType) => {},
  fetchWishlist: async () => {},
  updateWishlistData: async (data: WishlistAPIType) => {},
  removeWishlistItem: async (product_id: number) => {},
};

export const WishlistContext = createContext<WishlistContextType>(wishlistDefaultValues);

export const useWishlist = () => useContext(WishlistContext);


const WishlistProvider: React.FC<ChildrenType> = ({children}) => {
    const { status, data: session } = useSession();
    const fetcher = useCallback(
      async (url: string) => {
        if(status==='authenticated'){
          const headers = {
            headers: {
              "Authorization" : `Bearer ${session?.user.token}`,
              "Accept": 'application/json'
            }
          }
          const res =  await axiosPublic.get(url,headers)
          return res.data.wishlist;
        }
        return undefined;
      },
      [status],
    );
    const { data:wishlist, isLoading:wishlistLoading, mutate:mutateWishlistData } = useSWR<WishlistAPIType>(status==='authenticated' ? api_routes.wishlist : null, fetcher);
    const { mutate } = useSWRConfig()
    const {toastError} = useToast();
    // const {toggleLoginModal} = useLogin();

    const fetchWishlist = async () => {await mutate(api_routes.wishlist)}

    const updateWishlistData = async (data: WishlistAPIType) => {
      if(status==='authenticated'){
        await mutateWishlistData(data);
      }else{
        toastError('Please login to add product to wishlist');
        // toggleLoginModal()
      }
    }
    
    const updateWishlist = async (data: WishlistUpdateDataType) => {
      if(status==='authenticated'){
        try {
          const response = await axiosPublic.post(api_routes.wishlist, data.length>0 ? {product:data}: {}, {
            headers: {"Authorization" : `Bearer ${session?.user.token}`}
          });
          await mutateWishlistData(response.data.wishlist);
        } catch (error: any) {
          console.log(error);
        }
      }else{
        toastError('Please login to add product to wishlist');
        // toggleLoginModal()
      }
    }

    const removeWishlistItem = async(product_id: number) => {
      if(status==='authenticated' && wishlist){
        const wishlist_main = wishlist.products.map(item => item.id)
        const products_item_index = wishlist_main.findIndex(item => item===product_id)
        if(products_item_index>-1){
          const wishlist_item_removed = wishlist_main.filter(item => item!==product_id)
          await updateWishlist([...wishlist_item_removed.map(item => item)])
        }
      }else{
        toastError('Please login to remove product from wishlist');
        // toggleLoginModal()
      }
    }
  
    return (
      <WishlistContext.Provider value={{wishlist, wishlistLoading, updateWishlist, updateWishlistData, fetchWishlist, removeWishlistItem}}>
          {children}
      </WishlistContext.Provider>
    );
}

export default WishlistProvider;
