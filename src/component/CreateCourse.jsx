import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
 
import { IoTrashOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import   { Authcontext } from '@/Authcontext/Authcontext';
 



const CreateCourse = () => {

const {settaskwrapper} = useContext(Authcontext)

  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    courseName: "",
    status: "",
    enrollment: "",
    image: null, // Store the image file
  });
  const [isEditing, setIsEditing] = useState(null); // Tracks the task being edited

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  // Handle drag and drop for image upload
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  // Add or update a task
  const handleSubmit = () => {
    if (isEditing !== null) {
      // Update existing task
      const updatedTasks = tasks.map((task, idx) =>
        idx === isEditing ? formData : task
      );
      setTasks(updatedTasks);
     
      setIsEditing(null);
    } else {
      // Add new task
      setTasks([...tasks, formData]);
      
    }
    setFormData({
      title: "",
      courseName: "",
      status: "",
      enrollment: "",
      image: null, // Reset image after submitting
    }); // Reset form

 
  };

  // Edit a task
  const handleEdit = (index) => {
    setFormData(tasks[index]);
    setIsEditing(index);
  };

  // Delete a task
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };



  return (
    <div className='w-full flex items-center justify-center flex-col gap-8 pb-12 pt-6 '>
 
 


{/* here is the card section  */}

<div className='w-full flex items-start justify-center gap-4'>

 
 

<div className='w-[65%] flex items-start justify-start gap-4 flex-wrap ' >

<div className='w-[48%] shadow-md flex items-center justify-center flex-col gap-2 rounded-lg bg-primary  '>
    <div className='w-full h-[200px] '>
      <img className='w-full h-full rounded-tr-lg rounded-tl-lg object-cover ' src="https://i.ibb.co.com/b7P65gY/two.jpg" alt="" />
    </div>
<div className='w-full flex items-start justify-center flex-col gap-3 px-4 py-3'>
    <h1 className='text-lg font-bold text-white '>Advance Machine Learning </h1>
    <span className='px-4 py-1 bg-slate-700 text-subsecondary rounded-full text-[16px] font-semibold shadow'>Data Science</span>

    <div className='w-full flex items-start justify-start text-subsecondary text-[18px] gap-2 font-semibold'>
     Status: <span className=' px-4 py-1 bg-[#36995d]/20 text-[#36995d] text-[16px] font-semibold rounded-md '> Published</span>
    </div>
    
      <p className='text-[14px] capitalize font-semibold text-subsecondary'> <span className='text-white text-[16px] font-bold'>2</span>  students enrolled</p>
     
    <Link className='text-[16px] pt-3 font-medium text-subsecondary'> View Only </Link>

</div>


</div>
<div className='w-[48%] shadow-md flex items-center justify-center flex-col gap-2 rounded-lg bg-primary  '>
    <div className='w-full h-[200px] '>
      <img className='w-full h-full rounded-tr-lg rounded-tl-lg object-cover ' src="https://i.ibb.co.com/b7P65gY/two.jpg" alt="" />
    </div>
<div className='w-full flex items-start justify-center flex-col gap-3 px-4 py-3'>
    <h1 className='text-lg font-bold text-white '>Advance Machine Learning </h1>
    <span className='px-4 py-1 bg-slate-700 text-subsecondary rounded-full text-[16px] font-semibold shadow'>Data Science</span>

    <div className='w-full flex items-start justify-start text-subsecondary text-[18px] gap-2 font-semibold'>
     Status: <span className=' px-4 py-1 bg-[#36995d]/20 text-[#36995d] text-[16px] font-semibold rounded-md '> Published</span>
    </div>
    
      <p className='text-[14px] capitalize font-semibold text-subsecondary'> <span className='text-white text-[16px] font-bold'>2</span>  students enrolled</p>
     
    <Link className='text-[16px] pt-3 font-medium text-subsecondary'> View Only </Link>

</div>


</div>


        {tasks.map((task, index) => (
          <div className='w-[48%] shadow-md pb-6 flex items-center justify-center flex-col gap-2 rounded-lg bg-primary' key={index} >

        {task.image && (
              <img className='w-full h-[200px] object-cover rounded-tr-lg rounded-tl-lg '
                src={task.image}
                alt="Task Image"
              />
            )}

            <div className='w-full flex items-start justify-center flex-col gap-3 px-4 py-3'>
            <h3 className='text-lg font-bold text-white ' >{task.title}</h3>
            <p className='px-4 py-1 bg-slate-700 text-subsecondary rounded-xl text-[16px] font-semibold shadow'>{task.courseName}</p>
            <div className='flex items-center justify-center '>
            <p className='text-subsecondary flex items-start justify-center gap-2  '> Status: <span className=' px-4 py-1 bg-[#36995d]/20 text-[#36995d] text-[16px] font-semibold rounded-md '> {task.status} </span> </p>

            </div>
            <p className='text-[14px] text-subsecondary font-semibold '> <span className='text-white text-[14px] font-bold '>{task.enrollment} &nbsp; </span> students enrolled </p>
            <Link className='text-[14px] font-medium text-subsecondary underline underline-offset-4'> View Only </Link>
            </div>
         
            <div className='w-full flex items-center justify-around '>
            <button className='px-4 flex items-center justify-center gap-1 py-1 bg-[#dc2626] hover:border-[1px] border-subsecondary hover:bg-transparent duration-300 text-white rounded-md text-[14px] font-semibold ' onClick={() => handleDelete(index)}> <IoTrashOutline/> Delete</button>

           
            {isEditing === index ? (
              <div>
                        
                <button
                  onClick={() => {
                    setIsEditing(null); // Close editing mode
                    setFormData({
                      title: "",
                      courseName: "",
                      status: "",
                      enrollment: "",
                      image: null,
                    }); // Clear form
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <button className='px-4 flex items-center justify-center hover:border-[1px] border-subsecondary hover:bg-transparent duration-300 gap-1 py-1 bg-active text-white rounded-md text-[14px] font-semibold ' onClick={() => handleEdit(index)}> <MdOutlineModeEdit/>  Edit</button>
              </div>
            )}

</div>
          </div>
        ))}


      </div>


 

{/* it is editing and deleting card  */}
<div className='w-[35%] flex items-center justify-center '>
     
      <div className='w-full flex items-start justify-center flex-col gap-3 p-4 bg-primary shadow-md rounded-md' >
        <h4 className='text-[20px] font-bold text-white text-center w-full'>Add Course Here</h4>
      <div className='w-full h-[120px] bg-secondary flex items-center justify-center flex-col gap-2'
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <p className='text-white text-[16px] font-semibold'>Drag & Drop an image or click to select</p>
          <input
         
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="imageUpload"
          />
          <label htmlFor="imageUpload"  className='text-[14px] bg-primary text-white py-2 px-5 border-2 border-active rounded-lg p-2'>
            Select Image
          </label>
        </div>
        
        <div className='w-full flex items-center justify-center gap-2 '>
          <label className='w-[30%] text-white text-[16px] font-bold ' htmlFor="title">Course Title</label>
        <input className=' w-[70%] shadow-md text-white text-[14px] font-medium rounded-lg py-1 px-4 bg-secondary border-[1px] focus:border-none focus:ring-4 outline-[1px]  accent-black'
          type="text"
          id='title'
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Course Title"
        />
        </div>
        
        
        <div className='w-full flex items-center justify-center gap-2 '>
          
          <label className='w-[30%] text-white text-[16px] font-bold ' htmlFor="coursename"> Category </label>  
        <input
        className=' w-[70%] shadow-md text-white text-[14px] font-medium rounded-lg py-1 px-4 bg-secondary border-[1px] focus:border-none focus:ring-4 outline-[1px]  accent-black'
          type="text"
          name="courseName"
          id='coursename'
          value={formData.courseName}
          onChange={handleChange}
          placeholder="Category"
        />
        </div>

        <div className='w-full flex items-center justify-center gap-2 '>
          <label className='w-[30%] text-white text-[16px] font-bold ' htmlFor="status"> Status </label>
          <input
          className=' w-[70%] shadow-md text-white text-[14px] font-medium rounded-lg py-1 px-4 bg-secondary border-[1px] focus:border-none focus:ring-4 outline-[1px]  accent-black'
          type="text"
          name="status"
          id='status'
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
        />
        </div>

        <div className='w-full flex items-center justify-center gap-2 '>
          <label className='w-[30%] text-white text-[16px] font-bold ' htmlFor="enrollment"> Enrollment  </label>
          <input
        className=' w-[70%] shadow-md text-white text-[14px] font-medium rounded-lg py-1 px-4 bg-secondary border-[1px] focus:border-none focus:ring-4 outline-[1px]  accent-black'
          type="number"
          name="enrollment"
          id='enrollment'
          value={formData.enrollment}
          onChange={handleChange}
          placeholder="Enrollment Number"
        />
        </div>
       

        <button className='px-4 flex items-center justify-center gap-1 py-1 bg-active hover:border-[1px] border-subsecondary hover:bg-transparent duration-300 text-white rounded-md text-[14px] font-semibold ' onClick={handleSubmit}>
          {isEditing !== null ? "Update Card" : "Add Card"}
        </button>
      </div>

</div>



</div>


    </div>
  )
}

export default CreateCourse


 