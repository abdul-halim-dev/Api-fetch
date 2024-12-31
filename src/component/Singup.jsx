
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';

const Signup = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const nameRegex = /^[A-Za-z\s]{5,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required.';
        } else if (!nameRegex.test(value)) {
          error = 'Name must be at least 5 characters and contain only alphabets.';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!emailRegex.test(value)) {
          error = 'Please enter a valid email address.';
        }
        break;

      case 'password':
        if (!value.trim()) {
          error = 'Password is required.';
        } else if (value.length < 8 || value.length > 16) {
          error = 'Password must be between 8 and 16 characters.';
        } else if (!/(?=.*[a-z])/.test(value)) {
          error = 'Password must include at least one lowercase letter.';
        } else if (!/(?=.*[A-Z])/.test(value)) {
          error = 'Password must include at least one uppercase letter.';
        } else if (!/(?=.*\d)/.test(value)) {
          error = 'Password must include at least one number.';
        } else if (!/(?=.*[@$!%*?&])/.test(value)) {
          error = 'Password must include at least one special character.';
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((key) => validateField(key, formData[key]));

    const hasErrors = Object.values(errors).some((err) => err !== '');
    if (!hasErrors && formData.name && formData.email && formData.password) {
      console.log('Form Submitted:', formData);

      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col gap-3 h-screen p-6 bg-primary rounded-lg shadow-md">
      <form
        className="bg-cardColor w-[500px] px-3 py-6 rounded-xl flex items-center justify-center flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <span className="text-2xl text-center uppercase font-bold mb-4 border-b-2 border-white text-secondary">
          Register Form
        </span>

        <div className="w-full">
          <label htmlFor="name" className="block text-secondary cursor-pointer font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className={`w-full py-2 pl-3 border bg-primary ${
              errors.name ? 'border-red-500' : 'border-secondary'
            } text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-active`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block text-secondary font-medium cursor-pointer mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className={`w-full py-2 pl-3 border bg-primary ${
              errors.email ? 'border-red-500' : 'border-secondary'
            } text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-active`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="w-full">
          <label htmlFor="password" className="block text-secondary font-medium mb-2 cursor-pointer">
            Password:
          </label>
          <div className="w-full relative">
            <input
              name="password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className={`w-full py-2 pl-3 border bg-primary ${
                errors.password ? 'border-red-500' : 'border-secondary'
              } text-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-active`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-[10px] top-[12px] text-xl text-secondary"
            >
              {showPassword ? <FaEye /> : <IoMdEyeOff />}
            </button>
          </div>
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-xl text-white py-2 px-4 rounded-md hover:bg-active transition duration-300"
        >
          Submit
        </button>

        <Link to="/login" className="text-secondary text-[16px] hover:border-b border-white">
          Already Have an Account?{' '}
          <span className="text-blue-600 text-lg font-semibold">Login</span>
        </Link>
      </form>
    </div>
  );
}

export default Signup;

// export default Signup;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Form Submitted:', formData);
//   };
  
//   return (
//     <div className="w-full flex items-center justify-center flex-col gap-3 h-screen p-6 bg-primary  rounded-lg shadow-md">
     
//       <form className='bg-cardColor w-[500px] px-3 py-6 rounded-xl flex items-center justify-center flex-col gap-2 ' onSubmit={handleSubmit}>
//       <span className="text-2xl text-center uppercase font-bold mb-2 border-b-2 border-white text-secondary"> Register Form</span>
//         <div className=" w-full mb-4">
//           <label htmlFor='name' className="block text-secondary cursor-pointer font-medium mb-2" >Name:</label>
//           <input
//             type="text"
//             id='name'
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter Name"
//             className="w-full py-2 pl-3 border bg-primary text-secondary border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-active"
//           />
//          </div>
//         <div className=" w-full mb-4">
//           <label htmlFor='email' className="block text-secondary font-medium cursor-pointer mb-2 "  >Email:</label>
//           <input
//             type="email"
//             name="email"
//             id='email'
//             required
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter Email"
//             className="w-full py-2 pl-3 border text-secondary bg-primary border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-active"
//           />
//         </div>
//         <div className="w-full mb-4">
//           <label htmlFor='password' className="block text-secondary font-medium mb-2 cursor-pointer">Password:</label>
//           <input
//             name="password"
//             id='password'
//             type='password'
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter Password"
//             required
    
//             className="w-full py-1 pl-3 border text-secondary bg-primary border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-active"
//           />
//          </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-xl text-white py-1 px-4 rounded-md hover:bg-active  transition duration-300"
//         >
//           Submit
//         </button>
//         <Link to={"/login"} className='text-secondary text-[16px] hover:border-b border-white '> Already Have an Accoutn? <span className=' text-blue-600 text-lg font-semibold'>Login</span> </Link>
//       </form>
//     </div>
//   );
// }

// export default Signup;
