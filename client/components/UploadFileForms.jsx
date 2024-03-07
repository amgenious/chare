import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/components/firebase";
import { useRouter } from "next/navigation";
import { uploadFile, getFile } from "./storage";

export const UploadFileForms = () => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState();
  const [uploaded, setUploaded] = useState(false);
  const [category, setCategory] = useState("");
  const [documentid, setDocumentId] = useState('');
  const [userid, setUserid] = useState("");
  const [filename, setFileName] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const Userid = user.uid;
      setUserid(Userid);
    } else {
      router.push("/auth/login");
    }
  });

  const handleUpload = async () => {
    const folder = "items/";
    const imagePath = await uploadFile(selectedFile, folder);
    const imageUrl = await getFile(imagePath);
    setUploaded(imageUrl);
    setDocumentId(imageUrl)
  };


  const handleData = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "products"), {
        document: documentid,
        category: category,
        userid: userid,
        filename: filename,
        timeStamps: serverTimestamp(),
      });
      alert("Document sent successfully");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleData}>
        <input
          placeholder="file"
          id="file"
          className="bg-transparent p-2 w-[100%] mb-2 border"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          type="file"
          required
        />
        <div
          onClick={handleUpload}
          className="btn bg-[#00375C] text-white hover:bg-white hover:text-[#00375C] mb-2"
        >
          Upload File
        </div>
        <p className="text-xs mb-2">
          Please make sure you upload the file first before you click on the
          send button
        </p>
        <input placeholder="file name" className="bg-transparent p-2 w-[100%] mb-2 border" onChange={(e)=> setFileName(e.target.value)} required/>
        <p className="text-sm mb-1">Please select category</p>
        <select
          className="border bg-black w-[100%] p-2 mb-5"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option disabled readOnly>
            Category
          </option>
          <option value="document">document</option>
          <option value="picture">picture</option>
          <option value="video">video</option>
          <option value="music">sound</option>
        </select>
        {uploaded ? (
          <>
          <p className="text-green-600 mb-3 text-xs">File uploaded</p>
          <button
          type="submit"
          className="btn bg-[#005c05] text-white hover:bg-white hover:text-[#005c05]"
          >
          Send File
        </button>
          </>
        ) : (
          <p className="mb-3 text-blue-600 text-xs">
            Wait for file to upload...
          </p>
        )}
       
      </form>
    </div>
  );
};
