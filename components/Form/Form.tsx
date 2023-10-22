"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button, Input, KeyPoints } from "..";
import { notionHandler } from "@/app/actions";
import {
  createCookie,
  getCookie,
  deleteCookie,
} from "@/components/utils/cookies";

type CookieType = {
  name: string;
  value: string;
  path: string;
};

const Form = () => {
  const name = useRef<HTMLInputElement>(null);
  const companyName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [bookingCookie, setBookingCookie] = useState<boolean>(false);

  const inputChangeHandler = (value: string, key: string) => {
    console.log("ValueKey: ", { value, key });

    if (
      name.current?.value &&
      email.current?.value &&
      phoneNumber.current?.value
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const addBookingDetails = () => {
    const content = {
      name: name.current?.value,
      company: companyName.current?.value,
      email: email.current?.value,
      phone: phoneNumber.current?.value,
    };

    notionHandler(content);

    createCookie("tri_book", "true");
    setBookingCookie(true);

    name.current && (name.current.value = "");
    companyName.current && (companyName.current.value = "");
    email.current && (email.current.value = "");
    phoneNumber.current && (phoneNumber.current.value = "");
  };

  const cookieHandler = async () => {
    const wlSubCookie = (await getCookie("tri_book")) as CookieType;

    if (wlSubCookie) {
      const cookieValue = wlSubCookie.value;
      const value = cookieValue === "true";

      setBookingCookie(value);
    } else {
      setBookingCookie(false);
    }
  };

  const clearBookingCookies = async () => {
    await deleteCookie("tri_book");
    setBookingCookie(false);
  };

  useEffect(() => {
    cookieHandler();
  }, []);

  return !bookingCookie ? (
    <>
      <form>
        <Input
          placeholder="Full Name"
          name="full_name"
          reference={name}
          callback={inputChangeHandler}
        />
        <Input
          placeholder="Company Name (if applicable)"
          name="company_name"
          reference={companyName}
          callback={inputChangeHandler}
        />
        <Input
          placeholder="Email"
          type="email"
          name="email"
          reference={email}
          callback={inputChangeHandler}
        />
        <Input
          placeholder="Phone Number"
          type="tel"
          name="phone_number"
          reference={phoneNumber}
          callback={inputChangeHandler}
        />
      </form>
      <div className="w-full flex justify-center">
        <Button
          title="Submit"
          callback={addBookingDetails}
          disabled={isDisabled}
        />
      </div>
    </>
  ) : (
    <>
      <KeyPoints
        heading="Booking Confirmation Notice"
        body="Rest assured, our team is already hard at work to ensure that we can provide you with the best possible service."
      />
      <KeyPoints
        heading=""
        body="We understand the importance of your project, and we're committed to helping you achieve your digital goals.
        Our dedicated team will be in touch with you shortly to confirm the details of your booking, answer any questions you may have, and discuss the next steps."
      />
      <div className="w-full flex justify-center">
        <Button
          title="Make another Booking"
          callback={clearBookingCookies}
          disabled={false}
        />
      </div>
    </>
  );
};

export default Form;
