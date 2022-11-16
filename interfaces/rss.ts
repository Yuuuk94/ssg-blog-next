export type RSSType = {
  rss: {
    _declaration: {
      _attributes: {
        encoding: string;
        version: string;
      };
    };
    channel: ChannelType[];
  };
};

export type ChannelType = {
  _text?: string;
  description: { _text: string };
  generator: { _text: string };
  item: RSSItemType[];
  language: { _text: string };
  link: { _text: string };
  managingEditor: { _text: string };
  pubDate: { _text: string };
  title: { _text: string };
  ttl: { _text: string };
};

export type RSSItemType = {
  author: { _text: string };
  category?: { _text: string }[] | { _text: string };
  comments: { _text: string };
  description: { _text: string };
  guid: { _attributes: { isPermaLink: string }; _text: string };
  link: { _text: string };
  pubDate: { _text: string };
  title: { _text: string };
};
