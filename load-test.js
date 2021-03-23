import http from "k6/http";
import { check, sleep } from "k6";
export let options = {
  vus: 500,
  duration: "5s",
};
export default function () {
  const rnd = Math.floor(Math.random() * 1000);
  let res = http.get(`https://load-testing.azurewebsites.net/${rnd}`);
  check(res, {
    success: (r) => r.status == 200,
  });
}
