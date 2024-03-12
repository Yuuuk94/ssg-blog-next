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
            인터렉티브 서비스를 지향하는 프론트엔드 개발자로서 사용자 행동을
            유도하는 UI/UX 가 어떻게 하면 유의미한 비즈니스로 연결될 수 있을지
            고민합니다.
            <br />
            유저 프로세스와 사용성이 매끄러우면서 완성도 높은 서비스 개발을
            목표로 합니다.
            <br />
            <br />
            자바스크립트와 타입스크립트를 기반으로 다양한 프레임워크와
            라이브러리를 빠르게 습득하여 프로젝트에 적용할 수 있습니다.
            <br />
            주도적인 학습과 세미나, 라이브 강의 등에 참여하며 꾸준한 성장을 위해
            노력하고 있습니다.
            <br />
            기획과 디자인에도 관심이 많고 이해도가 높습니다. 공동 목표 실현을
            위해 동료들과 적극적으로 커뮤니케이션합니다.
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
