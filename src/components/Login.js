import MyInput from "./MyInput";
import Button from "./MyButton";
import { Link } from "react-router-dom";
import React,{useState} from "react";
import authService from '../authService';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const navigate = useNavigate(); 
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await authService.login(formData);

          const token = response.data.token;
          const name = response.data.name;
          authService.storeToken(token); 
          authService.storeUserName(name); 
         authService.storeUsertime(response.data.at); 
          navigate('/');
          window.location.reload(); 
          console.log("token",token);
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
  return (
    <form className="max-w-sm mx-auto pb-20 " method='POST' encType="multipart/form-data" onSubmit={handleSubmit}>
      <div className="mt-10 pt-10 text-2xl mx-auto pb-20 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        Log in
        <MyInput type="text" name="email" onChange={handleChange}  label="Your email" placeholder="ex: someone@domaine" />
        <MyInput type="password" name="password" onChange={handleChange}  label="Your password" placeholder="**************"  />
        <Button name="log in" />
        <div className="flex items-center justify-between pb-6">
          <p className="mb-0 text-sm">Don't have an account?</p>
          <Button name={<Link to="/register">Register</Link>} />
          
        </div>
      </div>
    </form>
  );
}
