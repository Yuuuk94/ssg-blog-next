export type RSSType = {
  rss?: { $: RSSXml; channel: Array<ChannelType> } | void | object;
  $?: RSSXml;
  channel?: Array<ChannelType>;
};

export type RSSXml = {
  version: string;
};

export type ChannelType = {
  description: Array<string>;
  generator: Array<string>;
  item: Array<RSSItemType>;
  language: Array<string>;
  link: Array<string>;
  managingEditor: Array<string>;
  pubDate: Array<string>;
  title: Array<string>;
  ttl: Array<string>;
};

export type RSSItemType = {
  author: Array<string>;
  category: Array<string>;
  comments: Array<string>;
  description: Array<string>;
  guid: Array<ItemGuidType>;
  link: Array<string>;
  pubDate: Array<string>;
  title: Array<string>;
};

export type ItemGuidType = {
  $: string;
  _: string;
};
