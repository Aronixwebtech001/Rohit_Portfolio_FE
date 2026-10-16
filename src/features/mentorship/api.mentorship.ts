import { api } from "../../lib/api";
import {
  type MentorshipBookingResponse,
  type MentorshipPayload,
  type VerifyPaymentPayload,
  type PaymentFailedPayload,
  type MentorshipResponse,
} from "./types.mentorship";

export const mentorshipApi = {
  create(payload: MentorshipPayload) {
    return api<MentorshipBookingResponse>("/book-mentorship", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  verifyPayment(payload: VerifyPaymentPayload) {
    return api<MentorshipResponse>("/verify-payment", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  paymentFailed(payload: PaymentFailedPayload) {
    return api<MentorshipResponse>("/payment-failed", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};
