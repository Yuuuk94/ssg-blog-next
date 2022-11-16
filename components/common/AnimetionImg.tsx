const AnimetionImg = () => {
  const images = [
    "/assets/icon/galaxy.png",
    "/assets/icon/programming.png",
    "/assets/icon/atom.png",
    "/assets/icon/desk-lamp.png",
    "/assets/icon/code.png",
  ];
  return (
    <div className="flex flex-col items-center min-[770px]:items-start">
      <p className="mb-4 flex">
        {images?.map((img) => (
          <img
            key={img}
            className="w-main-img min-w-main-img mx-2"
            src={img}
            alt="icons created by Freepik - Flaticon"
          />
        ))}
      </p>
    </div>
  );
};
export default AnimetionImg;
