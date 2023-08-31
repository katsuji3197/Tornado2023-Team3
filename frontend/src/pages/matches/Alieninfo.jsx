import "../../assets/styles/css/MatchedPage.css";
import "../../assets/styles/css/MessageIndividualPage.css";

import unknownUser from "../../assets/images/icon_header_UnknownUser.svg";
import goldstar from "../../assets/images/star_yellow.svg";

export const AlienInfoPage = () => {
  return (
    <div className="matched-screen bg-gray-50">
      <header className="communication-status">エイリアンの詳細</header>
      <div className="match-input-container p-4 md:p-8 bg-gray-50 text-black min-h-screen space-y-6 md:space-y-42">
        <div className="">
          <div className="w-[331px] h-[76px] justify-end items-center gap-[38px] inline-flex">
            <div className="w-16 h-16 bg-slate-400 rounded-full justify-center items-center gap-2.5 flex">
              <img className="w-[42.67px] h-[50.67px]" src={unknownUser} />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[229px] h-[21px] text-neutral-800 text-xl font-medium leading-normal tracking-[4px]">
                hoge田hoge男
              </div>
              <div className="w-[131px] h-[19px] text-black font-normal leading-[18px] tracking-widest">
                20歳 男性
              </div>
              <div className="justify-start items-start gap-0.5 inline-flex">
                <img src={goldstar}></img>
                <img src={goldstar}></img>
                <img src={goldstar}></img>
                <img src={goldstar}></img>
                <img src={goldstar}></img>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px] flex-auto">
              出身地
            </div>
            <div className="ttext-gray-500 font-medium flex-auto">
              hoge県hoge市
            </div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px] flex-auto">
              居住地
            </div>
            <div className="ttext-gray-500 font-medium flex-auto">
              hoge県hoge市
            </div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px] flex-auto">
              学校
            </div>
            <div className="ttext-gray-500 font-medium flex-auto">
              hogehoge大学
            </div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px] flex-auto">
              学部
            </div>
            <div className="ttext-gray-500 font-medium flex-auto">
              hogehoge学部
            </div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px] flex-auto">
              学科
            </div>
            <div className="ttext-gray-500 font-medium flex-auto">
              hogehoge学科
            </div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px] flex-auto">
              学年
            </div>
            <div className="ttext-gray-500 font-medium flex-auto">2年</div>
          </div>
        </div>
        <div>
          <div className="ml-2 w-full border border-gray-200" />
          <div className="justify-start items-end gap-[61px] inline-flex pl-6 pt-6">
            <div className="text-neutral-800 text-xl font-normal leading-normal tracking-[4px]">
              趣味
            </div>
            <div className="text-gray-500 font-medium flex-auto">
              <div className="w-[100px] h-5 px-2 bg-blue-500 rounded-md justify-start items-center gap-1.5 inline-flex">
                <div className="text-white text-xs font-normal leading-none">
                  プログラミング
                </div>
              </div>
              <div className="pl-4 inline-flex"></div>
              <div className="w-[100px] h-5 px-2 bg-blue-500 rounded-md justify-start items-center gap-1.5 inline-flex">
                <div className="text-white text-xs font-normal leading-none">
                  読書
                </div>
              </div>
              <div className="pl-4 inline-flex"></div>
              <div className="w-[100px] h-5 px-2 bg-blue-500 rounded-md justify-start items-center gap-1.5 inline-flex">
                <div className="text-white text-xs font-normal leading-none">
                  ドライブ
                </div>
              </div>
              <div className="pl-4 inline-flex"></div>
              <div className="w-[100px] h-5 px-2 bg-blue-500 rounded-md justify-start items-center gap-1.5 inline-flex">
                <div className="text-white text-xs font-normal leading-none">
                  旅行
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
