import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const client = axios.create({
  baseURL: "https://ananas.tistory.com",
});

export async function getRSS(req: NextApiRequest, res: NextApiResponse) {
  await axios
    .get("/api/rss")
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}
