import { api } from "../../lib/api";
import { type  PitchResponse, type PitchPayload } from "./types.pitch";

export const investorApi = {
    create(payload: PitchPayload) {
        return api<PitchResponse>("/pitch/submit", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
}