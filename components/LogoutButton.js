import React from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const handleLogout = async () => {
        try {
          await axios.post('/api/auth/admin/logout');
          // Redirect the user to the login page
          const router = useRouter();
          router.push('/auth/login');
        } catch (error) {
          console.error('An unexpected error occurred:', error);
        }
      };

  return (
    <button onClick={() => handleLogout()} type='button'>Logout</button>
  );
};
