"use client";

import { useEffect, useState } from "react";
import { getItem, setItem } from "@/utils/storage";
import { useRouter } from "next/navigation";


const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function CreateProfilePage() {
  const router = useRouter();

  const [ formData, setFormData ] = useState({
    contactNumber: "",
    dob: "",
    gender: "",
    city: "",
    state: "",
    pincode: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    const userID = getItem("userID");

    if (!userID) {
      router.replace("/login");
      return;
    }

    const interval = setInterval(() => {
      const id = getItem("userID");
      if (!id) {
        clearInterval(interval);
        router.replace("/login");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ){
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    setError("")

    if(
      !formData.contactNumber ||
      !formData.dob ||
      !formData.gender ||
      !formData.city ||
      !formData.state ||
      !formData.pincode 
    ){
      setError("Please fill all fields before submitting.");
      return;
    }

    const userID = getItem("userID");

    if(!userID){
      router.replace("/login");
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}/manager/createManagerProfile/${userID}`,
        {
          method: "PATCH",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contactNumber: formData.contactNumber,
            dob: formData.dob,
            role: "Manager",
            gender: formData.gender,
            coordinates: [77.5946, 12.9716],
            city: formData.city,
            state: formData.state,
            country: "India",
            pincode: formData.pincode
          })
        }
      );

      if(response.ok){
        setItem("accCreated", "1");
        router.replace("/dashboard");
      }else if (response.status === 400){
        setError("Please fill all required fields correctly.");
      }else{
        setError("Something went wrong. Please try again.")
      }
    } catch (error) {
      setError("Netywork error. Please check your connection.")
    }finally{
      setLoading(false);
    }
    
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#1a1a2e",
      fontFamily: "sans-serif",
      padding: "24px"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "400px",
        backgroundColor: "#111122",
        borderRadius: "24px",
        padding: "32px 24px",
        border: "1px solid #333"
      }}>
        <h2 style={{
          color: "#ffffff",
          fontSize: "22px",
          fontWeight: "700",
          margin: "0 0 6px 0"
        }}>
          Complete Your Profile
        </h2>

        <p style={{
          color: "#aaaaaa",
          fontSize: "13px",
          margin: "0 0 28px 0"
        }}>
          Fill in your details to get started.
        </p>

        <div style={{ marginBlock: "16px"}}>
          <label style={{
            color: "#cccccc",
            fontSize: "13px",
            display: "block",
            marginBottom: "6px"
          }}>
            Phone Number
          </label>
          <input type="text" 
          name="contactNumber" 
          placeholder="xxxxxxxxxx" 
          value={formData.contactNumber} 
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #333",
            backgroundColor: "#2d2d44",
            color: "#ffffff",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
          />
        </div>
        
        

        <div style={{ marginBlock: "16px"}}>
          <label style={{
            color: "#cccccc",
            fontSize: "13px",
            display: "block",
            marginBottom: "6px"
          }}>
            Date of Birth
          </label>
          <input type="date" 
          name="dob" 
          // placeholder="xxxxxxxxxx" 
          value={formData.dob} 
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #333",
            backgroundColor: "#2d2d44",
            color: "#ffffff",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
          />
        </div>

        <div style={{ marginBlock: "16px"}}>
          <label style={{
            color: "#cccccc",
            fontSize: "13px",
            display: "block",
            marginBottom: "6px"
          }}>
            Gender
          </label>
          <select
          name="gender" 
          value={formData.gender} 
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #333",
            backgroundColor: "#2d2d44",
            color: "#ffffff",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div style={{ marginBlock: "16px"}}>
          <label style={{
            color: "#cccccc",
            fontSize: "13px",
            display: "block",
            marginBottom: "6px"
          }}>
            City
          </label>
          <input type="text" 
          name="city" 
          placeholder="Bengaluru" 
          value={formData.city} 
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #333",
            backgroundColor: "#2d2d44",
            color: "#ffffff",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
          />
        </div>

        <div style={{ marginBlock: "16px"}}>
          <label style={{
            color: "#cccccc",
            fontSize: "13px",
            display: "block",
            marginBottom: "6px"
          }}>
             State
          </label>
          <input type="text" 
          name="state" 
          placeholder="Karnataka"
          value={formData.state} 
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #333",
            backgroundColor: "#2d2d44",
            color: "#ffffff",
            fontSize: "14px",
            boxSizing: "border-box"
          }}
          />
        </div>

                <div style={{ marginBottom: "24px" }}>
          <label style={{
            color: "#cccccc",
            fontSize: "13px",
            display: "block",
            marginBottom: "6px"
          }}>
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            placeholder="560001"
            value={formData.pincode}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #333",
              backgroundColor: "#2d2d44",
              color: "#ffffff",
              fontSize: "14px",
              boxSizing: "border-box"
            }}
          />
        </div>

        {error !== "" && (
          <div style={{
            backgroundColor: "#3d1a1a",
            border: "1px solid #ff4444",
            borderRadius: "10px",
            padding: "12px",
            marginBottom: "16px",
            color: "#ff6666",
            fontSize: "13px"
          }}>
            {error}
          </div>  
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: loading ? "#888888" : "#c8ff00",
            color: "#111111",
            fontSize: "15px",
            fontWeight: "700",
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Saving..." : "Complete Profile"}
        </button>

      </div>
    </div>
  );
};