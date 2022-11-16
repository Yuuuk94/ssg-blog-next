type Props = {
  children: React.ReactNode | string;
};

export const Neotitle = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl px-8 py-4 mb-10 relative ">
      <h2 className="text-center text-lg text-textSub font-semibold">
        {children}
      </h2>
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};

export const NeoContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl px-8 min-[770px]:px-28 py-8 min-[770px]:py-12 mb-8 min-[770px]:mb-12 relative">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};

export const NeoWorkContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl min-[770px]:w-[48%] px-8 min-[770px]:px-8 py-8 min-[770px]:py-8 mb-8 relative cursor-pointer">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};

export const NeoPostContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl px-8 min-[770px]:px-16 py-8 min-[770px]:py-12 mb-8 relative">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};

export const NeoIcon = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-full p-2 mb-4 ml-2 relative cursor-pointer">
      {children}
      <div className="rounded-full shadow-neo-icon-b absolute inset-0 -z-10"></div>
      <div className="rounded-full shadow-neo-icon-t absolute inset-0 -z-10"></div>
    </div>
  );
};

export const NeoBtn = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl p-4 mx-auto mb-4 min-[770px]:mb-12 w-1/2 min-[770px]:w-1/3 relative cursor-pointer">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};
