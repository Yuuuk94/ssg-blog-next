import Link from "next/link";
import { NeoContent } from "../common/styled-component";
import AnimetionImg from "../../components/common/AnimetionImg";

const MainContent = () => {
  const images = [
    "/assets/icon/galaxy.png",
    "/assets/icon/programming.png",
    "/assets/icon/atom.png",
    "/assets/icon/desk-lamp.png",
    "/assets/icon/code.png",
  ];
  return (
    <>
      <NeoContent>
        <div>
          <AnimetionImg />
          <h2 className="min-[770px]:text-lg font-semibold  text-textMain">
            안녕하세요. 인터렉션에 푹 빠진 주니어 프론트엔드 개발자, 신유경
            입니다.
            <br />
            사용자의 행동을 유도하는 UI/UX가 어떻게 하면 유의미한 비즈니스로
            연결될 수 있을지 고민하며 서비스를 개발합니다.
            <br />
            사용자 프로세스와 사용성이 매끄러우면서 완성도 높은 프론트엔드
            개발을 지향합니다.
          </h2>
        </div>
      </NeoContent>
      {/* <NeoContent>
        <div className="px-16 py-10">gk</div>
      </NeoContent> */}
    </>
  );
};

export default MainContent;
