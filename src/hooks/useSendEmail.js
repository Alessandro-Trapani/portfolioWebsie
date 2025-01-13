import emailjsConfig from "../config";
import emailjs from "emailjs-com";

const useSendEmail = () => {
  const sendEmail = async (data) => {
    try {
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        data,
        emailjsConfig.publicKey
      );
      return response;
    } catch (error) {
      console.error("Failed to send email", error);
    }
  };
  return sendEmail;
};

export default useSendEmail;
