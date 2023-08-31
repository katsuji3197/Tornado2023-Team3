{/*募集一覧*/}
import { Link } from "react-router-dom";
import BackLink from "../../components/BackLink";
import userIcon from "../../assets/images/icon_user_with_circle.svg";
import rocketIcon from "../../assets/images/icon_rocket_white.svg";
import calenderIconActive from "../../assets/images/matching_date.svg";
import pinIconActive from "../../assets/images/matching_pin.svg";

export const RecruitListPage = () => {
    return (
        <div className="bg-white"> {/* 背景色を白に変更 */}
            <div className="bg-gray-300">
                募集
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-5/6"> 
                    <RecruitCard />
                    <RecruitCard />
                    <RecruitCard />
                    <RecruitCard />
                    <RecruitCard />
                    <RecruitCard />
                </div>
            </div>
            {/* 募集作成ボタン */}
            <Link 
                to="create" 
                className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-400 text-white ml-2 w-12 h-12 p-2 md:p-4 flex items-center justify-center rounded-full shadow-lg text-2xl">             
                ＋
            </Link>

        </div>
    );
};

const RecruitCard = () => {
    return (
        <div className="my-4 flex flex-col items-center justify-center p-4 bg-gray-100">
            <div className="w-full bg-white rounded-xl p-6 shadow-lg">
                {/* ユーザー情報 */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img src={userIcon} alt="userIcon" />
                        <p className="text-md md:text-2xl ml-2">hoge田hoge男</p> 
                    </div>
                    <p className="text-gray-500">3分前</p>
                </div>

                {/* イベント詳細 */}
                <div className="flex items-center justify-between mb-4">
                    <p>昼ご飯食べに行こー</p>
                    <button className="text-white ml-2 p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl">
                        <div className="flex items-center">
                            <img src={rocketIcon} alt="rocketIcon" />
                            <span className="text-white ml-2">参加</span>
                        </div>
                    </button>
                </div>

                {/* 日付と場所 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={calenderIconActive} alt="calenderIconActive" />
                        <p className="ml-2">2021/01/01 12:00</p>
                    </div>
                    <div className="flex items-center">
                        <img src={pinIconActive} alt="pinIconActive"/>
                        <p className="ml-2">東京都</p>
                    </div>
                </div>
            </div>
        </div>
    );
};