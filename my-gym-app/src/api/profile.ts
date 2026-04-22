const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBasicProfile(userID: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/manager/getBasicProfile/${userID}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export async function createManagerProfile(userID: string) {
  try {
    const response = await fetch(
      `${BASE_URL}/manager/createManagerProfile/${userID}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactNumber: "",
          dob: "",
          role: "Manager",
          gender: "",
          coordinates: [77.5946, 12.9716],
          city: "",
          state: "",
          country: "India",
          pincode: "",
        }),
      },
    );
    return response;
  } catch (error) {
    console.error("Error creating profile:", error);
    return null;
  }
}
