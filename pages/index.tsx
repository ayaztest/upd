import type { NextPage } from 'next'

import { FormEvent } from 'react'


import  { useEffect, useState } from "react";
  import { 
  
  useAddress,
 
  
} from "@thirdweb-dev/react";

import  Card from "../componants/Card"



const Home: NextPage = () => {

     const [isKycAsBusiness, setIsKycAsBusiness] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [wtotal, setWtotal] = useState('')
   const [total, setTotal] = useState('')
  const [wallet, setWallet] = useState('')
  const [waddress, setWaddress] = useState('')
  const [selectedOption, setSelectedOption] = useState('no');
const [option, setOption] = useState(selectedOption)
  const [streetAddress, setStreetAddress] = useState('')
  const [ownedNFTNamestwo, setOwnedNFTNamestwo] = useState<string[]>([]);
  const [ownedNFTNames, setOwnedNFTNames] = useState<string[]>([]);
const [totaltwo, setTotaltwo] = useState('')
 const address = useAddress();
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false)
  const [isClaiming, setIsClaiming] = useState(false)
  
const [showPopup, setShowPopup] = useState(false)
  
  
  
 
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let form = {
      firstname,
      lastname,
      email,
      country,
      wallet,
      total,
      selectedOption,
      streetAddress,
     businessName,
      totaltwo,
      waddress,
    wtotal
    }

    const rawResponse = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    const content = await rawResponse.json()

    // print to screen
    setShowPopup(true)
    
    // Reset the form fields
    setWallet('')
    setCountry('')
    setFirstname('')
    setLastname('')
    setEmail('')
    setTotal('')
    setSelectedOption('')
    setStreetAddress('')
        setBusinessName('')
    setTotaltwo('')
    setWaddress('')
    setWtotal('')
  }
  
 
  

  return (<div className='overflow-hidden'> 
        
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 bg-cover'
  style={{ backgroundImage: "url('https://unsplash.com/photos/Uj3S6JiXxaA')" }}>
    <div className='relative py-3 sm:max-w-xl sm:mx-auto mb-14'>
     <div>
           <p className='font-bold text-center text-lg'> **BEFORE YOU FILL OUT THIS FORM, PLEASE WATCH THE TUTORIAL VIDEO SO THAT YOU
HAVE ALL THE INFORMATION BEFORE YOU START** </p>

       
        </div>
  <main className='relative mt-4 px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200' >
   <div>
          <img src="https://presend.io/wp-content/uploads/2023/02/pb.png" className="h-16 sm:h-24" />
        </div>   <div className='max-w-5xl mx-auto py-2'>
        <form className='py-4 space-y-4' onSubmit={handleSubmit}>
          <div className='flex items-center justify-center'>
            <label htmlFor='firstname' className='sr-only'>
              First Name
            </label>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type='text'
              name='firstname'
              id='firstname'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder='First Name' required
            />
          </div>
          <div className='flex items-center justify-center'>
            <label htmlFor='lastname' className='sr-only'>
              Last Name
            </label>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type='text'
              name='lastname'
              id='lastname'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder='Last Name' required
            />
          </div>
          <div className='flex items-center justify-center'>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              name='email'
              id='email'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder='Your Email' required
            />
          </div>
          <div className='flex items-center justify-center'>
            <label htmlFor='streetAddress' className='sr-only'>
          Your Address (optional)
            </label>
            <input
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              type='text'
              name='streetAddress'
              id='streetAddress'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder='Your Address (optional)' 
            />
                </div>
                <div className='flex items-center justify-center'>
            <label htmlFor='country' className='sr-only'>
              country
            </label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              type='text'
              name='country'
              id='country'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder='Your Country' 
            />
                </div>
                 <div className="flex flex-col items-center justify-center">
                <label htmlFor="nft-count" className="text-base font-medium text-left w-full mb-2">
                  Total PRI (PreSend Retail) NFTs owned:</label>
      <input
        type="text"
        id="nft-count"
        name="nft-count"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
         required
      />
    </div>   <div className="flex flex-col items-center justify-center">
                <label htmlFor="nft-count" className="text-base font-medium text-left w-full mb-2">
                  Total PII (PreSend Institutional) NFTs owned: </label>
      <input
        type="text"
        id="nft-count"
        name="nft-count"
        value={totaltwo}
        onChange={(e) => setTotaltwo(e.target.value)}
        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md"
         required
      />
    </div>
         
      <div className='flex w-full items-center justify-center flex-col '>


                <label htmlFor='wallet' className="text-base font-medium text-left w-full mb-2 ">
                  Please provide ALL wallets addresses that house ALL of your PreSend Retail &amp; PreSend
Institutional NFTs (Please separate wallet addresses with a ; ):
            </label>
            <input
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              type='tel'
              name='wallet'
              id='wallet'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
             placeholder='Your Wallets'   
            />

                </div>   <div>
        <input
          type="checkbox"
          id="businessCheckbox"
          checked={isKycAsBusiness}
                    onChange={() => setIsKycAsBusiness(!isKycAsBusiness)}
                     className="form-checkbox mr-3"
        />
        <label htmlFor="businessCheckbox" className='text-base cursor-pointer'>
          Are you KYCing as a business? (NOTE: Every 20% OR LARGER owner of the business must still kyc as an individual, so you will still have to go through the individual - personal - kyc process)
        </label>
      </div>
      {isKycAsBusiness && (
        <div>
          <label htmlFor="businessNameInput">What is the legal name of your business?</label>
          <input
            type="text"
            id="businessNameInput"
            value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="shadow-sm focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 block w-full appearance-none leading-normal"
          />
        </div>
      )}           <div className="flex flex-col mt-5 border-t border-gray-600 pt-2">
    <div className="flex-row mb-3">
      <input
        type="radio"
        id="option1"
        name="options"
        value="yes"
        checked={selectedOption === 'yes'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <label htmlFor="option1" className="text-md cursor-pointer font-medium ml-5">
        Yes, I own both Wolfer Finance and PreSend NFTs.

      </label>
    </div>
    <div className="flex-row">
      <input
        type="radio"
        id="option2"
        name="options"
        value="no"
        checked={selectedOption === 'no'}
        onChange={(e) => setSelectedOption(e.target.value)}
      />
      <label htmlFor="option2" className="text-md font-medium cursor-pointer ml-5">
        No, I do not own both Wolfer Finance and PreSend NFTs.
      </label>
    </div>
              </div> {selectedOption === "yes" && (<div>   <p></p>   <div className='flex items-center justify-center mt-4 flex-col pb-5'>
                  <label htmlFor='waddress' className='text-xs text-justify pb-3 font-semibold'>
                    Please provide ALL wallets addresses that house ALL of your Wolfer Finance NFTs (Please
                    separate wallet addresses with a ; ):
                  </label>
                  <input
                    value={waddress}
                    onChange={(e) => setWaddress(e.target.value)}
                    type='text'
                    name='waddress'
                    id='waddress'
                    className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
                    placeholder='Wallets' required
                  />
                </div><div className='flex items-center justify-center'>
                <label htmlFor='wtotal' className='sr-only'>
                  Total TWF (Wolfer Finance) NFTs owned:
                </label>
                <input
                  value={wtotal}
                  onChange={(e) => setWtotal(e.target.value)}
                  type='text'
                  name='wtotal'
                  id='wtotal'
                  className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-md border-gray-300 rounded-md'
                  placeholder='Total TWF (Wolfer Finance) NFTs owned:' required
                />
              </div> <p className='text-xs text-red-600 font-semibold text-justify  pt-5'>Please ensure that AFTER YOU KYC WITH TOKEN OF TRUST UPON SUBMITTING THIS PRESEND FORM
that you visit https://kyc.wolfer.finance/ and connect all your Wolfer Finance NFT wallets and submit
your form to verify all your NFTs. If you have multiple wallets that house Wolfer NFTs, you will have to
connect 1 wallet, submit the form, then connect the next wallet and submit the form again with the
same information (name, email address, etcetera) as you submitted on the PreSend and other Wolfer
Finance forms.
**IF YOU HAVE ALREADY KYC’D – you do not need to KYC again, but simply submit your forms, this will
alert Token of Trust to credit those NFTs to your KYC account.**</p></div>)}
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='flex items-center justify-center text-sm w-full rounded-md shadow py-3 px-2 text-white bg-indigo-600'
            >
             Submit
            </button>
          </div><div className='flex  '>
        <p className='text-xs text-red-600 font-semibold text-justify  pt-5'>   Please check the FAQ section that refers to countries of residency. If you live in any of those countries or regions, your kyc process will start on the 15th of February and you need to reach out directly to bryan.jorolan@tokenoftrust.com and indicate to him that you are in one of those affected countries, because that is a separate kyc
                process than all other regions and countries and is not supported until February 15th or after.</p>     
       </div>
        </form>
 
         
          
       
        {showPopup && (
          <div className='fixed z-50 bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center'>
  <div className='fixed inset-0 transition-opacity'>
    <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
  </div>
  <div className='bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-xl sm:w-full'>
    <div>
      <div className='mb-4'>
        <div className='text-2xl font-bold text-center text-cyan-900'>Success</div>
        <div className='mt-2 text-base leading-6 text-gray-500'>
                          <p className='text-center text-lg font-semibold text-cyan-800'>Thank you for submitting your questionnaire! Please click the green button below to finish your KYC process via the Token of Trust platform, and please also check/monitor the email you provided
                            in the form for any additional information that may
                            come in the next few days/weeks.</p>
        </div>
      </div>
      <div className='flex flex-col justify-around mt-5 sm:mt-6'>
        <a href='https://app.tokenoftrust.com/com/presend.io' target='_blank' rel='noopener noreferrer'>
          <button
            type='button'
            className='inline-flex mb-4 justify-center w-full rounded-md border border-transparent px-4 py-2  bg-green-500 text-md leading-6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5'
          >
            PreSend KYC/AML Link
          </button>
        </a> 
  <span className='w-full rounded-md shadow-sm'>
    <a href='https://app.tokenoftrust.com/com/kyc.wolfer.finance' target='_blank' rel='noopener noreferrer'>
      <button
        type='button'
        className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-md leading-6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5'
      >
        PreSend & Wolfer Finance Dual Holder KYC/AML Link
      </button>
    </a>
  </span>

      </div>
      <button
        type='button'
        className='absolute top-0 right-0 p-2 text-gray-500 hover:text-white focus:outline-none focus:text-white transition ease-in-out duration-150'
        onClick={() => setShowPopup(false)}
      >
        ×
      </button>
    </div>
  </div>
</div>

        )}
      </div>

     
    </main> </div>
    <div className='  flex object-center items-center'>
      <div className='max-w-4xl mx-auto  flex flex-col p-6'><Card /></div>  </div></div> </div> 
  )

}
export default Home
