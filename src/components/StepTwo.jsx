export function StepTwo ({ SetCurrentStep }) {



  



    return (
        <div className="items-center justify-center flex h-screen w-screen bg-[#F4F4F4]">
        <div className="w-[480px] h-[655px] rounded-[8px] bg-white justify-center flex "> 
            <div className=" w-[416px] h-[385px] mt-[32px] mx-[32px]"> 
                <img src="Main 1.svg"></img>
                <h1 className="text-left text-[26px] font-bold ">Join Us! 😎</h1>
                <h3 className="text-left text-[#8E8E8E] text-[18px] font-normal">Please provide all current information accurately.</h3>
                <h1 className="mt-[28px] font-bold text-[14px]">Email</h1>
                <input type="email"  className=" w-[416px] h-[44px] bg-white border-[1px] border-[#0CA5E9] rounded-[12px] pl-[13px]"></input>
                <h1 className=" text-[14px] mt-[12px] font-bold">Phone number</h1>
                <input type="number"  className=" w-[416px] h-[44px] bg-white border-[1px] border-[#CBD5E1] rounded-[12px] pl-[13px] "></input>
                <h1 className="mt-[12px] font-bold text-[14px] ">Password</h1>
                <input type="password"  className=" w-[416px] h-[44px] bg-white border-[1px] border-[#CBD5E1] rounded-[12px] pl-[13px]"></input>
                <h1 className="mt-[12px] text-[14px] font-bold">Confirm password</h1>
                <input type="password"  className=" w-[416px] h-[44px] bg-white border-[1px] border-[#CBD5E1] rounded-[12px] pl-[13px]"></input>

                <button onClick={() => SetCurrentStep(1)} className="w-[128px] h-[44px] rounded-[6px] mt-[82px] bg-white border-[1px] border-[#CBD5E1] mr-[8px]">{"<"} Back</button>
                <button 
        className="bg-[#D6D8DB] text-[#A9ACAF] h-[44px] w-[280px] rouned-[6px] px-4 mt-[82px] rounded hover:bg-gray-800 text-[16px]" 
        onClick={() => SetCurrentStep(3)}>
        Continue 2/3 {">"}
      </button>
            </div>
             
  
       </div>
       </div>
    );
  }
  