export interface MentorshipPayload {
  name: string;
  phone: string;
  email: string;
  planName: string;
  price?: number | string;
  pitchDetails?: string;
  duration?: string;
  selectedDate?: string;
  selectedTime?: string;
  paymentMethod?: string;
}

export interface MentorshipOrder {
  id: string;
  entity?: string;
  amount: number;
  currency: string;
  status: string;
  is_server_order?: boolean;
}

export interface MentorshipBooking {
  _id: string;
  name: string;
  phone?: string;
  contactNumber?: string;
  email: string;
  planName: string;
  price?: number | string;
  pitchDetails?: string;
  topic?: string;
  duration?: string;
  selectedDate?: string;
  date?: string;
  selectedTime?: string;
  timeSlot?: string;
  paymentMethod?: string;
  paymentStatus?: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface MentorshipBookingResponse {
  success: boolean;
  message: string;
  booking: MentorshipBooking;
  order?: MentorshipOrder;
  key_id?: string;
  data?: MentorshipBooking;
}

export interface MentorshipResponse {
  success?: boolean;
  message: string;
  data?: MentorshipBooking;
  booking?: MentorshipBooking;
  order?: MentorshipOrder;
}

export interface VerifyPaymentPayload {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature?: string;
}

export interface PaymentFailedPayload {
  orderId: string;
}
