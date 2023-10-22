"use server";

import { cookies } from "next/headers";

export const createCookie = async (key: string, value: string) => {
  try {
    cookies().set(key, value);
  } catch (error) {
    console.log("Cookie Create Error", error);

    return error;
  }
};

export const getCookie = async (key: string) => {
  try {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get(key);

    return cookieValue;
  } catch (error) {
    console.log("Cookie Get Error", error);

    return error;
  }
};

export const deleteCookie = async (key: string) => {
  try {
    cookies().delete(key);
  } catch (error) {
    console.log("Cookie Delete Error", error);

    return error;
  }
};
