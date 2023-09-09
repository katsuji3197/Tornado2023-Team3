import { useEffect, useState } from "react";
import "../../assets/styles/css/MatchingPage.css";
import matchingWire from "../../assets/images/matching_wire.svg";
import matchingAlienPurple from "../../assets/images/matching_alien_purple.svg";
import matchingAlienGray from "../../assets/images/matching_alien_gray.svg";
import matchingDate from "../../assets/images/matching_date.svg";
import matchingPin from "../../assets/images/matching_pin.svg";
import matchingEdit from "../../assets/images/matching_edit.svg";
import { getMatchedUsers } from "../../api/matched_users";
import { useLocation } from "react-router-dom";

export const MatchingPage = () => {
  const location = useLocation();
  const { createdMatch } = location.state || {};

  const [matchedUsers, setMatchedUsers] = useState([]);

  console.log(createdMatch);
  const fetchMatchedUsers = async () => {
    if (!createdMatch) return;

    const params = {
      matched_user: {
        match_id: createdMatch.id,
      },
    };
    try {
      const response = await getMatchedUsers(params);
      if (response && response.data) {
        setMatchedUsers(response.data.matchedUsers);
        console.log(response.data.matchedUsers);
      }
    } catch (error) {
      console.error("エイリアンの取得中にエラーが発生しました:", error);
    }
  };

  useEffect(() => {
    fetchMatchedUsers();
  }, [createdMatch]);

  const totalAliens = 6;
  const waitingUsersCount = totalAliens - matchedUsers.length;

  // 日時のフォーマット関数
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("ja-JP", options);
  };

  console.log(createdMatch);
  const matchDate = formatDate(createdMatch.matchDate) || "";
  const matchLocation = createdMatch.meetLocation || "";

  return (
    <div className="matching-screen">
      <div className="communication-status">更新状況</div>

      <div className="main-wrap">
        <img src={matchingWire} alt="matching_wire" />

        <div className="communication-text">交信中</div>
        <button className="reload-button" onClick={fetchMatchedUsers}>
          更新
        </button>

        <div className="serching-text">エイリアンを探しています</div>

        <div className="alien-img-wrap">
          {Array(matchedUsers.length)
            .fill(null)
            .map((_, i) => (
              <img key={i} src={matchingAlienPurple} alt="Matched alien" />
            ))}
          {Array(waitingUsersCount)
            .fill(null)
            .map((_, i) => (
              <img
                key={i + matchedUsers.length}
                src={matchingAlienGray}
                alt="Waiting alien"
              />
            ))}
        </div>

        <div className="info-card-wrap">
          <div className="upper-wrap">
            <div className="split">
              <div className="upper-date">
                <img src={matchingDate} alt="Date icon" />
                <div className="date-text">日時</div>
              </div>
              <div className="date-data">{matchDate}</div>

              <div className="lower-date">
                <img src={matchingPin} alt="Location icon" />
                <div className="date-text">場所</div>
              </div>
              <div className="date-data">{matchLocation}</div>
            </div>

            <div className="split">
              <img src={matchingEdit} alt="Edit icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
