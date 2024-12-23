import { use, useState } from "react";  
  
  export function StepThree ({ SetCurrentStep, onChange, form }) {



const [selectedImage, setSelectedImage] = useState("");

function handleDelete() {
  setSelectedImage("");
}
  

  


    return (
        <div className="items-center justify-center flex h-screen w-screen bg-[#F4F4F4]">
        <div className="w-[480px] h-[655px] rounded-[8px] bg-white justify-center flex "> 
            <div className=" w-[416px] h-[385px] mt-[32px] mx-[32px]"> 
                <img src="Main 1.svg"></img>
                <h1 className="text-left text-[26px] font-bold ">Join Us! 😎</h1>
                <h3 className="text-left text-[#8E8E8E] text-[18px] font-normal">Please provide all current information accurately.</h3>
                <h1 className="mt-[28px] text-[14px] font-bold mb-[8px]">Date of Birth</h1>
                <input type="date" placeholder="d" id="birthDate" onChange={onChange} value={form.birthDate}
                 className=" w-[416px] h-[44px] bg-white border-[1px] border-[#0CA5E9] rounded-[12px]  "></input>
                <h1 className="text-[14px] mt-[12px] font-bold mb-[12px]">Profile Image</h1>
                <div className="w-fit h-fit relative"> 
                   <img src="icon.svg" className="absolute top-[44px] left-[192px]" ></img> 
                <input type="file" placeholder="s" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; setSelectedImage(file ? URL.createObjectURL(file) : undefined) }}  className=" w-[416px] h-[180px] bg-[#7F7F800D] border-[1px] file:h-[180px] file:w-[416px] file:placeholder: border-[#CBD5E1] rounded-md file:bg-[#7F7F800D] file:border-none "></input>

                {selectedImage && <img src={selectedImage} className=" w-[416px] h-[180px]  border-[1px] top-[0px] absolute border-[1px] rounded-md"></img>}
                { selectedImage && <button onClick={handleDelete} className="absolute right-[16px] top-[16px] z-100 text-white text-[14px] bg-[#202124] h-[24px] w-[24px] rounded-[50%] ">X</button>}
                </div>

                <button onClick={() => SetCurrentStep(2)} className="w-[128px] h-[44px] rounded-[6px] mt-[82px] bg-white border-[1px] border-[#CBD5E1] mr-[8px]">{"<"} Back</button>
                <button 
        className="bg-[#D6D8DB] text-[#A9ACAF] h-[44px] w-[280px] rouned-[6px] px-4 mt-[82px] rounded hover:bg-gray-800 text-[16px]" 
        onClick={() => SetCurrentStep(4)}>
        Sumbit 3/3 {">"}
      </button>
            </div>
             
  
       </div>
       </div>
    );
  }
  