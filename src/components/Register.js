import React, { useState } from "react";
import authService from '../authService';
import { useNavigate } from "react-router-dom";
import MyInput from "./MyInput";
import Button from "./MyButton";

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await authService.register(formData);

      setFormData({
        name: '',
        email: '',
        password: '',
      });

      const name = response.data.name;
      authService.storeUserName(name);
      console.log(name);
      navigate('/login');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return ( 
    <form className="max-w-sm mx-auto pb-20" method='POST' encType="multipart/form-data" onSubmit={handleSubmit}> 
      <div className="mt-10 pt-10 text-2xl mx-auto pb-20 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        Register
        <MyInput type="text" name="name" label="Your name" onChange={handleChange} value={formData.name} />
        <MyInput type="text" name="email" label="Your email" onChange={handleChange} value={formData.email} placeholder="ex: someone@domaine"/>
        <MyInput type="password" name="password" label="Your password" onChange={handleChange} value={formData.password} placeholder="**************"/>
        <Button name="Register"/>
      </div>
    </form>
  );
}
