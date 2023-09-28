'use client'
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface UserResponse {
    user: string | null;
    error: AxiosError | null;
}

export default function AdminLayout({ 
    children, 
}:{ 
    children:   React.ReactNode;
}) {
    const [isSuccess, setIsSuccess] = useState<Boolean>(false);
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const { user, error } = await getUser();
            if (error) {
                console.log(error);
                router.push('/');
                return;
            }
            setIsSuccess(true); 
        })();
    }, [router]);



    if (!isSuccess) {
        return <div>Loading...</div>
    }
    return (
            <main>
                
                {children}</main>
            );
   
}

async function getUser(): Promise<UserResponse> {
    try {
        const { data } = await axios.get('/api/auth/admin/me');
        return {
            user: data,
            error: null
        }
    } catch (e) {
        const error = e as AxiosError;

        return {
            user: null,
            error,
        }
    }   
}