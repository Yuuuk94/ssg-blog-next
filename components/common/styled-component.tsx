type Props = {
  children: React.ReactNode;
};

export const NeoContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl px-12 py-8 mb-12 relative">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute left-0 right-0 top-0 bottom-0 -z-10"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute left-0 right-0 top-0 bottom-0 -z-10"></div>
    </div>
  );
};
