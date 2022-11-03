type Props = {
  children: React.ReactNode;
};

export const NeoContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl px-8 py-12 mb-12 relative">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-20"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-20"></div>
    </div>
  );
};

export const NeoIcon = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-full mb-4 relative cursor-pointer">
      {children}
      <div className="rounded-full shadow-neo-icon-b absolute inset-0 -z-10"></div>
      <div className="rounded-full shadow-neo-icon-t absolute inset-0 -z-10"></div>
    </div>
  );
};
