import ky from "ky";
import { API_BASE_PATH } from "@/shared/config";

export const requestInstance = ky.extend({
  prefixUrl: API_BASE_PATH
});
