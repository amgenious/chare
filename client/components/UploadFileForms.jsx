import React from 'react'

export const UploadFileForms = () => {
  return (
    <div>
       <form>
        <input placeholder='file' className='bg-transparent p-2 w-[100%] mb-2 border' type='file' required/>
        <select className='border bg-black w-[100%] p-2 mb-5' required>
          <option disabled readOnly>Category</option>
          <option >document</option>
          <option>picture</option>
          <option>video</option>
          <option>sound</option>
        </select>
        <button className='btn bg-[#00375C] text-white hover:bg-white hover:text-[#00375C]'>Upload</button>
       </form>
    </div>
  )
}
