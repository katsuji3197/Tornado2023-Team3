// import { Link } from "react-router-dom";
import BackLink from "../../components/BackLink";

export const MatchWaitingPage = () => {
  return (
    <div className="match-input-container p-4 md:p-8 bg-blue-950 text-white min-h-screen space-y-6 md:space-y-32">
      {/* マイページに戻るリンク */}
      <BackLink to="/mypage" label="マイページに戻る" />

      {/* ページのタイトル */}
      <h1 className="text-xl md:text-3xl font-bold mb-4 md:mb-8">
        プロフィール編集
      </h1>

      {/* 表示名 */}
      <div className="name-section mb-4 md:mb-8">
        <h2 className="text-lg md:text-2xl">表示名</h2>
        <textarea
          className="mt-2 md:mt-4 w-full p-2 md:p-4 rounded-md bg-blue-900"
          value={name}
          // onChange={}
          readOnly
          rows="1"
        ></textarea>
      </div>
    </div>
  );
};
