type ItemCategoryProps = {
  category: Array<{ _text: string }> | { _text: string } | any;
};

export const ItemCategory = ({ category }: ItemCategoryProps) => {
  let categories: Array<{ _text: string }> = [];
  if (Array.isArray(category) === false) {
    categories.push(category);
  } else {
    categories = category;
  }
  return (
    <div>
      {categories?.map((item, key) => (
        <span key={item._text} className="mt-2 mr-2 text-md text-textMain">
          {`#${item._text} `}
        </span>
      ))}
    </div>
  );
};
