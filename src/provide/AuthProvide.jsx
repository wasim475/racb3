import { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
export const Auth = createContext(null);
const AuthProvide = ({children}) => {
    const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("loggedUser");
    return saved ? JSON.parse(saved) : null;
  });

    const login = (userData) => {
    setUser(userData);
    localStorage.setItem("loggedUser", JSON.stringify(userData));
  };

  // লগআউট
  const logout = () => {
    Swal.fire({
  title: "Are you sure?",
  // text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Logout"
}).then((result) => {
  if (result.isConfirmed) {
    setUser(null);
    localStorage.removeItem("loggedUser");
    toast.success("Logout successfully.")
  }
});
    
  };
    const authInfo={
        user,
        login,
        logout
    }
  return (
    <Auth.Provider value={authInfo}>
      {children}
    </Auth.Provider>
  )
}

export default AuthProvide
