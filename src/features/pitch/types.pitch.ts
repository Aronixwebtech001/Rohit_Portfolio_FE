export interface PitchPayload {
  fullName: string;
  companyName: string;
  sector: string;
  investmentRequired?: number | string;
  email: string;
  contactNumber: string;
  pitchSummary: string;
  stage?: string;
  proposalFile?: string;
  name?: string;
  company?: string;
  industry?: string;
  phone?: string;
  funding?: string;
  description?: string;
}

export interface PitchResponse {
  message: string;
  data?: any;
}