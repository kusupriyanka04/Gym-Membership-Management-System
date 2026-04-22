"use client";

export default function getRedirectPath(): string {
    if (typeof window === "undefined") return "/login";

    const userID = localStorage.getItem("userId");
    const accCreated = localStorage.getItem("accCreated");

    if(!userID){
        return "/login";
    }

    if(accCreated === "0"){
        return "/create-profile";
    }

    if(accCreated === "1"){
        return "/Dashboard";
    }

    return "/login";
}