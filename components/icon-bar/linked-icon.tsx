import { NeoIcon } from "../common/styled-component";

export const LinkedIcon = () => {
  const images = [
    { img: "/assets/icon/kakao.png", url: "https://open.kakao.com/o/s3RKfBLe" },
    { img: "/assets/icon/tistory.png", url: "https://ananas.tistory.com/" },
    { img: "/assets/icon/github.png", url: "https://github.com/Yuuuk94" },
  ];
  return (
    <div className="flex justify-center min-[770px]:block min-[770px]:absolute top-40 right-8">
      {images?.map((img) => (
        <NeoIcon key={img.img}>
          <a href={img.url} className="z-40" target="_blank">
            <img
              className="w-icon-img min-w-icon-img"
              src={img.img}
              alt="icons created by Freepik - Flaticon"
            />
          </a>
        </NeoIcon>
      ))}
    </div>
  );
};

export const TopBtn = () => {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div
      className="hidden min-[770px]:block fixed bottom-20 right-8"
      onClick={scrollTop}
    >
      <NeoIcon>
        <p className="py-0.5 text-xs font-semibold text-textSub text-center leading-snug hover:text-textMain">
          top
        </p>
      </NeoIcon>
    </div>
  );
};
