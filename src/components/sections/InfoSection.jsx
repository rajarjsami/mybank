import React from 'react'
import strings from '../Strings/Strings'

function InfoSection() {
  return ( 
 <div className="w-full min-h-56 bg-white flex justify-center items-center p-4">
  <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-6">
    
    <div className="w-60 h-52 rounded-md text-black text-center">
      <h1 className="text-[35px] font-bold font-serif">{strings.step1}</h1>
      <strong className="mt-4 font-bold font-serif block">{strings.no1Title}</strong>
      <p className="mt-4 font-serif">{strings.CreateanAccountDecs}</p>
    </div>

    <div className="w-60 h-52 rounded-md text-black text-center">
      <h1 className="text-[35px] font-bold font-serif">{strings.step2}</h1>
      <strong className="mt-4 font-bold font-serif block">{strings.no2Title}</strong>
      <p className="mt-4 font-serif">{strings.AttachMasterCardDecs}</p>
    </div>

    <div className="w-60 h-52 rounded-md text-black text-center">
      <h1 className="text-[35px] font-bold font-serif">{strings.step3}</h1>
      <strong className="mt-4 font-bold font-serif block">{strings.no3Title}</strong>
      <p className="mt-4 font-serif">{strings.SendMoneyDecs}</p>
    </div>

  </div>
</div>
  )
}

export default InfoSection
