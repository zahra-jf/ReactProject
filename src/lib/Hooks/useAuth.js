import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import * as authService from "./../../services/auth.service";
import { sendOtpSchema, verifyOtpSchema } from "./../../validators/auth";
import { validate } from "./../../validators/index";

export const useAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isSentOtp, setIsSentOtp] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = async () => {
    if (!validate(sendOtpSchema, { phone })) return;

    const data = await authService.sendOtp(phone);

    console.log("[SendOtp]", data);

    setIsSentOtp(true);
  };

  const verifyOtp = async () => {
    if (!validate(verifyOtpSchema, { phone, otp })) return;

    const data = await authService.verifyOtp(phone, otp);

    console.log("[VerifyOtp]", data);

    return data;
  };

  const login = async () => {
    const data = await verifyOtp();

    if (!data) return;

    // SaveToken

    toast.success("با موفقیت وارد شدید.");

    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSentOtp) {
        await login();
      } else {
        await sendOtp();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return {
    phone,
    otp,
    isSentOtp,
    handlePhoneChange,
    handleOtpChange,
    handleSubmit,
  };
};
