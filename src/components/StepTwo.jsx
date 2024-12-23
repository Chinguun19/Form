import classNames from 'classnames';

export function StepTwo({ SetCurrentStep, error, form, onChange, stepTwoIsTrue }) {
  const stepTwoSumbit = () => {
    if (stepTwoIsTrue.mail === true && stepTwoIsTrue.phoneNumber === true && stepTwoIsTrue.password === true && stepTwoIsTrue.confirmPassword === true) {
      SetCurrentStep(3);
    } else {
  
    }
  };
  
  return (
            <div className="items-center justify-center flex h-screen w-screen bg-[#F4F4F4]">
              <div className="w-[480px] h-[655px] rounded-[8px] bg-white justify-center flex"> 
                <div className=" relative w-[416px] h-[385px] mt-[32px] mx-[32px]"> 
                  <img src="Main 1.svg" alt="Join Us" />
                  <h1 className="text-left text-[26px] font-bold">Join Us! 😎</h1>
                  <h3 className="text-left text-[#8E8E8E] text-[18px] font-normal">Please provide all current information accurately.</h3>
                  <h1 className="mt-[28px] font-bold text-[14px]">Email</h1>
                  <input
          type="email"
          id="mail"
          onChange={onChange}
          value={form.mail}
          className={classNames(
            "w-[416px] h-[44px] bg-white border-[1px] rounded-[12px] pl-[13px]",
            {
              "border-[#0CA5E9]": form.mail === "" && stepTwoIsTrue.mail, // Prioritize when empty
              "border-[#E14942] text-[#E14942]": form.mail !== "" && !stepTwoIsTrue.mail, // Red only if not empty and invalid
            }
          )}
          />
          <p id='error' className="text-[#E14942] font-[400] text-[14px]">{error.mail}</p> 
          <h1 className="text-[14px] mt-[12px] font-bold">Phone number</h1>
          <input type="number" id="phoneNumber" onChange={onChange} value={form.phoneNumber} className={classNames("w-[416px] h-[44px] bg-white border-[1px] rounded-[12px] pl-[13px]", 
            {"border-[#CBD5E1]": form.mail === "" && stepTwoIsTrue.phoneNumber, "border-[#E14942] text-[#E14942]": form.phoneNumber !== "" && !stepTwoIsTrue.phoneNumber } 
             )}/>
          <p id='error' className="text-[#E14942] font-[400] text-[14px]">{error.phoneNumber}</p> 
          <h1 className="mt-[12px] font-bold text-[14px]">Password</h1>
          <input type="password" id="password" onChange={onChange} value={form.password} className={classNames(
          "w-[416px] h-[44px] bg-white border-[1px] rounded-[12px] pl-[13px]",
          {
            "border-[#0CA5E9]": form.password === "" && stepTwoIsTrue.password, 
            "border-[#E14942] text-[#E14942]": form.password !== "" && !stepTwoIsTrue.password, 
          }
        )} />
                <p id='error' className="text-[#E14942] font-[400] text-[14px]">{error.password}</p> 
                <h1 className="mt-[12px] text-[14px] font-bold">Confirm password</h1>
                <input type="password" id="confirmPassword" onChange={onChange} value={form.confirmPassword} className={classNames(
          "w-[416px] h-[44px] bg-white border-[1px] rounded-[12px] pl-[13px]",
          {
            "border-[#0CA5E9]": form.confirmPassword === "" && stepTwoIsTrue.confirmPassword, 
            "border-[#E14942] text-[#E14942]": form.confirmPassword !== "" && !stepTwoIsTrue.confirmPassword, 
          }
        )}/>
          <p id='error' className="text-[#E14942] font-[400] text-[14px]">{error.confirmPassword}</p> 

          <button onClick={() => SetCurrentStep(1)} className="w-[128px] h-[44px] rounded-[6px] absolute bottom-[-220px] bg-white border-[1px] border-[#CBD5E1] mr-[8px]">{`<`} Back</button>
          <button 
            className="bg-[#D6D8DB] absolute bottom-[-220px] right-[0] text-[#A9ACAF] h-[44px] w-[280px] rouned-[6px] px-4  rounded hover:bg-gray-800 text-[16px]" 
            onClick={stepTwoSumbit}>
            Continue 2/3 {`>`}
          </button>
        </div>
      </div>
    </div>
  );
}
