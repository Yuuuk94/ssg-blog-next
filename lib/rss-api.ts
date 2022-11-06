import axios from "axios";
import { parseXml } from "./parser";

const client = axios.create({
  baseURL: "https://ananas.tistory.com",
});

export async function setRSS() {
  const res = await client
    .get("/rss")
    .then((response) => {
      if (response.status === 200) {
        const dataSet = response.data;
        const parsingData = parseXml(dataSet);
        return parsingData;
      }
    })
    .catch((err) => {
      console.log(err);
      // rrs.xml
    });
  return res.rss.channel;
}
