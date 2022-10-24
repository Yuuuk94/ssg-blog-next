type Props = {
  children: React.ReactNode;
};

export const NeoContent = ({ children }: Props) => {
  return (
    <div className="bg-gray border-white rounded-lg m-10 shadow-custom-neo-b">
      <div className="shadow-custom-neo-t p-10">{children}</div>
    </div>
  );
};
