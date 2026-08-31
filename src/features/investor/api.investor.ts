import { api } from "../../lib/api";
import { type  InvestorResponse, type InvestorPayload } from "./types.investor";

export const investorApi = {
    create(payload: InvestorPayload) {
        return api<InvestorResponse>("/investors", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
}