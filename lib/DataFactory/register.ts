import { request, expect } from "@playwright/test"

export async function registerUser(email: string , password: string) {
    const apiUrl = process.env.API_URL
    const createRequestContext = await request.newContext();
    const response = await createRequestContext.post(apiUrl + "/users/register", {
    data: {
        "first_name": "test101",
        "last_name": "User101",
        "dob": "1981-03-02",
        "phone": "5873334040",
        "email": email ,  
        "password": password ,    
        "address": {
            "street": "123 test way",
            "city": "calgary",
            "state": "Alberta",
            "country": "CA",
            "postal_code": "12348"
        }
    },
  });

  expect(response.status()).toBe(201);
  return response.status() 
}