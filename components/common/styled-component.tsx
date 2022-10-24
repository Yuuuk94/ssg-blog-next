type Props = {
  children: React.ReactNode;
};

export const NeoContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl mb-12 relative">
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-10"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-10"></div>
      {children}
    </div>
  );
};
