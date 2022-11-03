import { NeoIcon } from "../common/styled-component";

export const LinkedIcon = () => {
  const images = [
    { img: "/assets/icon/kakao.png", url: "https://open.kakao.com/o/s3RKfBLe" },
    { img: "/assets/icon/tistory.png", url: "https://ananas.tistory.com/" },
    { img: "/assets/icon/github.png", url: "https://github.com/Yuuuk94" },
  ];
  return (
    <div className="absolute bottom-60 right-8">
      {images?.map((img) => (
        <NeoIcon>
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
    <div className="fixed bottom-20 right-8" onClick={scrollTop}>
      <NeoIcon>
        <p className="p-3 text-xs font-semibold text-textMain text-center leading-snug">
          top
        </p>
      </NeoIcon>
    </div>
  );
};
