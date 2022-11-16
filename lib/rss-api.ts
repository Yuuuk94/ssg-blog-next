import axios from "axios";
import convert from "xml-js";
import { RSSType, ChannelType } from "../interfaces/rss";

const client = axios.create({
  baseURL: "https://ananas.tistory.com",
});

export async function setRSS() {
  const res: Promise<RSSType> = await client
    .get("/rss")
    .then((response) => {
      if (response.status === 200) {
        const dataSet = response.data;
        const parsingData = JSON.parse(
          convert.xml2json(dataSet, {
            compact: true,
            spaces: 2,
          })
        );
        return parsingData;
      }
    })
    .catch((err) => {
      console.log(err);
      // rrs.xml
    });

  return (await res).rss.channel;
}
