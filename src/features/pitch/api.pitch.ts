import { api } from "../../lib/api";
import { type PitchResponse, type PitchPayload } from "./types.pitch";

export const pitchApi = {
  create(payload: PitchPayload | FormData) {
    return api<PitchResponse>("/pitch/submit", {
      method: "POST",
      body: payload instanceof FormData ? payload : JSON.stringify(payload),
    });
  },
};

export const investorApi = pitchApi;