import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PATIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_PATIENT_TEMPLATE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Debugging: Log configuration status (not the keys themselves)
console.log("EmailJS Config Status:", {
  hasServiceId: !!SERVICE_ID,
  hasPatientTemplateId: !!PATIENT_TEMPLATE_ID,
  hasAdminTemplateId: !!ADMIN_TEMPLATE_ID,
  hasPublicKey: !!PUBLIC_KEY
});

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export const sendPatientBookingEmail = async (data: {
  patient_name: string;
  patient_email: string;
  service: string;
  date: string;
  time: string;
  booking_id?: string;
  timestamp?: string;
}) => {
  if (!SERVICE_ID || !PATIENT_TEMPLATE_ID || !PUBLIC_KEY) {
    const error = "EmailJS configuration missing (Service ID, Patient Template ID, or Public Key).";
    console.error(error);
    throw new Error(error);
  }
  try {
    // Adding common aliases to ensure the template can find the email address
    const templateParams = {
      ...data,
      to_email: data.patient_email,
      email: data.patient_email,
      to_name: data.patient_name,
    };
    const response = await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, templateParams);
    console.log("Patient email sent successfully:", response.status, response.text);
    return response;
  } catch (error: any) {
    console.error("Error sending patient email:", error);
    // EmailJS errors often have a 'text' property
    const errorMessage = error?.text || error?.message || "Unknown EmailJS error";
    throw new Error(`Patient Email Error: ${errorMessage}`);
  }
};

export const sendAdminBookingEmail = async (data: {
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  booking_id?: string;
  timestamp?: string;
}) => {
  if (!SERVICE_ID || !ADMIN_TEMPLATE_ID || !PUBLIC_KEY) {
    const error = "EmailJS configuration missing (Service ID, Admin Template ID, or Public Key).";
    console.error(error);
    throw new Error(error);
  }
  try {
    // Admin emails usually have the recipient hardcoded in the dashboard,
    // but we'll add these just in case.
    const templateParams = {
      ...data,
      to_name: "Clinic Admin",
      reply_to: data.patient_email,
    };
    const response = await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams);
    console.log("Admin email sent successfully:", response.status, response.text);
    return response;
  } catch (error: any) {
    console.error("Error sending admin email:", error);
    const errorMessage = error?.text || error?.message || "Unknown EmailJS error";
    throw new Error(`Admin Email Error: ${errorMessage}`);
  }
};

export const sendConfirmationEmail = async (data: {
  patient_name: string;
  patient_email: string;
  service: string;
  date: string;
  time: string;
}) => {
  try {
    // Assuming the same template or a similar one for confirmation
    const response = await emailjs.send(SERVICE_ID, PATIENT_TEMPLATE_ID, {
      ...data,
      subject: "Appointment Confirmed - AcuMeD Clinic",
      message: `Your appointment for ${data.service} on ${data.date} at ${data.time} has been confirmed.`
    });
    return response;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error;
  }
};
