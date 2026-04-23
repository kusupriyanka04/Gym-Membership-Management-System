"use client";

export function getRedirectPath(): string {
  const userID = localStorage.getItem("userID");
  const accCreated = localStorage.getItem("accCreated");

  if (!userID) {
    return "/login";
  }

  if (accCreated === "0") {
    return "/create-profile";
  }

  if (accCreated === "1") {
    return "/dashboard";
  }

  return "/login";
}