import "../../assets/styles/css/MatchedPage.css";

import matchedCheck from "../../assets/images/matched_check.svg";
import matchedAlienGradation from "../../assets/images/matched_alien_gradation.svg";
import matchingAlienPurple from "../../assets/images/matching_alien_purple.svg";
import { Link } from "react-router-dom";

export const NotePage = () => {
  return (
    <div className="matched-screen">
      <header className="communication-status">エイリアンノート</header>
      <div className="match-input-container p-4 md:p-8 bg-gray-50 text-black min-h-screen space-y-6 md:space-y-32">
        {/* ページのタイトル */}
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">
          遭遇したエイリアン
        </h1>
        <p className="text-sm md:text-lg">
          今回の交信で遭遇したエイリアンたちです。
          <br />
          タップして詳細を確認してみましょう。
        </p>
        <Link to={"/back-alien"} state={{ from: "/note" }}>
          <div className="alien-note-wrap text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl h-[70px]">
            <img src={matchedAlienGradation} alt="matched_alien_gradation" />
            <div>
              <div className="text-xl">hoge田 hoge男</div>
              <div>20歳 男性</div>
            </div>
            <div>　　　　　　　&gt;</div>
          </div>
        </Link>
        <Link to={"/back-alien"} state={{ from: "/note" }}>
          <div className="alien-note-wrap text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl h-[70px]">
            <img src={matchedAlienGradation} alt="matched_alien_gradation" />
            <div>
              <div className="text-xl">hoge田 hoge男</div>
              <div>20歳 男性</div>
            </div>
            <div>　　　　　　　&gt;</div>
          </div>
        </Link>
        <Link to={"/back-alien"} state={{ from: "/note" }}>
          <div className="alien-note-wrap text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl h-[70px]">
            <img src={matchedAlienGradation} alt="matched_alien_gradation" />
            <div>
              <div className="text-xl">hoge田 hoge男</div>
              <div>20歳 男性</div>
            </div>
            <div>　　　　　　　&gt;</div>
          </div>
        </Link>
        <Link to={"/back-alien"} state={{ from: "/note" }}>
          <div className="alien-note-wrap text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl h-[70px]">
            <img src={matchedAlienGradation} alt="matched_alien_gradation" />
            <div>
              <div className="text-xl">hoge田 hoge男</div>
              <div>20歳 男性</div>
            </div>
            <div>　　　　　　　&gt;</div>
          </div>
        </Link>
        <Link to={"/back-alien"} state={{ from: "/note" }}>
          <div className="alien-note-wrap text-black ml-2 w-full p-2 md:p-4 bg-white rounded-xl shadow-xl h-[70px]">
            <img src={matchedAlienGradation} alt="matched_alien_gradation" />
            <div>
              <div className="text-xl">hoge田 hoge男</div>
              <div>20歳 男性</div>
            </div>
            <div>　　　　　　　&gt;</div>
          </div>
        </Link>
        <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">交信書</h1>
        <p className="text-sm md:text-lg">
          エイリアンたちの情報が記されています。
          <br />
          彼らとの交流に役立ててみましょう。
        </p>
        <div className="background-section mb-4 md:mb-8">
          <h2 className="text-black ml-2 w-full p-2 md:p-4 bg-gray-400 rounded-xl text-center shadow-xl">
            Coming Soon
          </h2>
        </div>
        <div className="background-section mb-4 md:mb-8">
          <h2 className="text-gray-50 ml-2 w-full p-2 md:p-4 bg-gray-50 rounded-xl text-center">
            Coming Soon
          </h2>
        </div>
      </div>
    </div>
  );
};
