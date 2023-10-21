import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: "30s", target: 10 }, // traffic ramp-up from 1 to a higher 10 users over 10 minutes.
    { duration: "1m", target: 10 }, // stay at higher 10 users for 1 minutes
    { duration: "1m", target: 0 }, // ramp-down to 0 users
  ],
};

export default function () {
  http.get(
    "http://192.168.49.2:31000/v1/json/validator/schemas/CustomerJsonSchemaValidatorDev"
  );
  sleep(1);
}
