export interface InvestorPayload {
   fullName: string;
    organizationName: string;
    mobileNumber: string;
    country: string;
    investorCategory: string;
    emailAddress: string;
    message?: string;
    isInvestorEnquiry: boolean;
}

export interface InvestorResponse {
  message: string;
}