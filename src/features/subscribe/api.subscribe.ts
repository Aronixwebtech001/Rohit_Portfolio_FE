import { api } from "../../lib/api";
import { type  SubscribeResponse, type SubscribePayload } from "./types.subscribe";

export const subscribeApi = {
    create(payload: SubscribePayload) {
        return api<SubscribeResponse>("/subscribe", {
            method: "POST",
            body: JSON.stringify(payload),
        });
    }
}