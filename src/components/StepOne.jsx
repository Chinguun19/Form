export function StepOne({ SetCurrentStep }) {
    return (
        <div className="items-center justify-center flex h-screen w-screen bg-[#F4F4F4]">
        <div className="w-[480px] h-[655px] rounded-[8px] bg-white justify-center flex "> 
            <div className=" w-[416px] h-[385px] mt-[32px] mx-[32px]"> 
                <img src="Main 1.svg"></img>
                <h1 className="text-left text-[26px] font-bold ">Join Us! 😎</h1>
                <h3 className="text-left text-[#8E8E8E] text-[18px] font-normal">Please provide all current information accurately.</h3>
                <h1 className="text-[14px] mt-[28px] font-bold">First name</h1>
                <input type="text" placeholder="First Name" className=" w-[416px] h-[44px] bg-white border-[1px] border-[#0CA5E9] rounded-[12px] pl-[13px] "></input>
                <h1 className="text-[14px] mt-[12px] font-bold">Last name</h1>
                <input type="text "  className=" w-[416px] h-[44px] bg-white border-[1px] border-[#CBD5E1] rounded-[12px] pl-[13px] "></input>
                <h1 className="text-[14px] mt-[12px] font-bold">User name</h1>
                <input type="text"  className=" w-[416px] h-[44px] bg-white border-[1px] border-[#CBD5E1] rounded-[12px] pl-[13px]"></input>
                <button 
        className="bg-[#D6D8DB] text-[#A9ACAF] h-[44px] w-[416px] rouned-[6px] px-4 mt-[162px] rounded hover:bg-gray-800" 
        onClick={() => SetCurrentStep(2)}>
        Continue 1/3 {">"}
      </button>
            </div>
             
  
       </div>
       </div>
    );
  }
  