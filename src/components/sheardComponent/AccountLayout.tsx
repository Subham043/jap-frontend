import { ChildrenType } from '@/helper/types'
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useToast } from '@/hooks/useToast';
import Link from 'next/link';
 
export default function AccountLayout({ children }: ChildrenType) {
    const [loading, setLoading] = useState(false);
    const { toastSuccess, toastError } = useToast();
    const router = useRouter();
    const callbackUrl = "/";
    const onLogout = async (event: any) => {
        event.preventDefault()
        setLoading(true);
        try {
            await signOut({
                redirect: false,
                callbackUrl
            });
            router.push(callbackUrl);
            toastSuccess("Logged Out Successfully.");
        } catch (error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="course-details-area pt-55 pb-30">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-4">
                    <div className="student-profile-sidebar mb-30">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <Link
                                    href='/account/profile'
                                    className={router.pathname == "/account/profile" ? "nav-link active" : "nav-link"}
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile"
                                    aria-selected="false"
                                >
                                <i className="fas fa-user"></i> My Profile
                                </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="history-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#history"
                                    type="button"
                                    role="tab"
                                    aria-controls="history"
                                    aria-selected="false"
                                >
                                <i className="fas fa-cart-plus"></i> Orders
                                </button>
                            </li>

                            <li className="nav-item" role="presentation">
                                <Link
                                    href='/account/settings'
                                    className={router.pathname == "/account/settings" ? "nav-link active" : "nav-link"}
                                    id="setting-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#setting"
                                    type="button"
                                    role="tab"
                                    aria-controls="setting"
                                    aria-selected="false"
                                >
                                <i className="fas fa-cog"></i> Settings
                                </Link>
                            </li>
                        
                            
                            <li className="nav-item" role="presentation">
                                <button
                                    onClick={(event)=>onLogout(event)}
                                    className="nav-link"
                                    id="logout-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#logout"
                                    type="button"
                                    role="tab"
                                    aria-controls="logout"
                                    aria-selected="false"
                                >
                                    {loading ? <div className="spinner-grow spinner-grow-sm text-success" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>:<><i className="fas fa-sign-out-alt"></i> Logout</>}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="student-profile-content">
                    {children}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}