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
            <RecruitCard />
            <RecruitCard />
            <RecruitCard />
            <RecruitCard />
            <RecruitCard />
            <RecruitCard />
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
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
            <div className="w-full max-w-xl bg-white rounded-xl p-6 shadow-lg">
                {/* 以下にコードを追記 */}
                {/* ... */}
                <div className="flex items-center">
                    <img
                        src={userIcon}
                        alt="userIcon"
                    />
                    <p className="text-md md:text-2xl ml-2">hoge</p> 
                </div>
                <div className="flex items-center">
                    <p>昼ご飯食べに行こー</p>
                    <button className="text-white ml-2 w-full p-2 md:p-4 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl">
                        <div className="flex items-center text-white">
                            <img
                            src={rocketIcon}
                            alt="rocketIcon"
                            />
                            参加
                        </div>
                    </button>
                </div>
                <div className="flex items-center">
                    <img
                    src={calenderIconActive}
                    alt="calenderIconActive"
                    />
                    <p>2021/01/01 12:00</p>
                    <img
                    src={pinIconActive}
                    alt="pinIconActive"/>
                    <p>東京都</p>
                </div>

            </div>
        </div>
    );
};
