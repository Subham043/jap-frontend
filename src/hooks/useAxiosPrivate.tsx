import { useSession } from "next-auth/react";
import { axiosPublic } from "../../axios";
import { useEffect } from "react";

export default function useAxiosPrivate(){
    const { status, data: session } = useSession();
    
    useEffect(() => {
        if(status==='authenticated'){
            axiosPublic.interceptors.request.use(
                config => {
                    if(!config.headers['authorization'] && status==='authenticated'){
                        config.headers['authorization'] = `Bearer ${session?.user.token}`;
                    }
                    return config;
                },
                (error) => Promise.reject(error)
            );
        }
    
      return () => {}
    }, [status, session])
    
    
    return axiosPublic;
}