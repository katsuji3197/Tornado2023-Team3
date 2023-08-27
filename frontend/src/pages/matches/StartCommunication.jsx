// StartCommunication.jsx
import '../../assets/styles/css/StartCommunication.css';

export const StartCommunication = () => {
  return (
    <div className='screen-communication'>
      <div className='communication-title'>交信状況</div>
      
      <div className='communication-main-wrap'>
        <div className='communication-main-text'>まだ交信を行っていません</div>
        <a href='#'>
          <div className='communication-main-btn'>交信を始める</div>
        </a>
      </div>
      

    </div>
  );
}
