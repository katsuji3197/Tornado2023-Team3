import { Link } from 'react-router-dom';
import "../../assets/styles/css/StartCommunication.css";

export const StartCommunication = () => {
  return (
    <div className='screen-communication'>
      <div className='communication-title'>交信状況</div>
      
      <div className='communication-main-wrap'>
        <div className='communication-main-text'>まだ交信を行っていません</div>
          <Link to={"/match-input"} state={{ from: "/start-communication" }}>
            <div className='communication-main-btn text-white'>交信を始める</div>
          </Link>
      </div>
    </div>
  );
};
