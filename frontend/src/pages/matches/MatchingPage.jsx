import '../../assets/styles/css/MatchingPage.css';
import matchingWire        from '../../assets/images/matching_wire.svg';
import matchingAlienPurple from '../../assets/images/matching_alien_purple.svg';
import matchingAlienGray   from '../../assets/images/matching_alien_gray.svg'
import matchingDate        from '../../assets/images/matching_date.svg';
import matchingPin         from '../../assets/images/matching_pin.svg';
import matchingEdit        from '../../assets/images/matching_edit.svg';

export const MatchingPage = () => {
  return (
    <div className="matching-screen">
      <div className="communication-status">更新状況</div>
      
      <div className="main-wrap">
        <img src={matchingWire} alt="matching_wire"></img>
        
        <div className="communication-text">交信中</div>

        <div className="serching-text">エイリアンを探しています</div>

        <div className="alien-img-wrap">
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienPurple}></img>
          <img src={matchingAlienGray}></img>
          <img src={matchingAlienGray}></img>
          <img src={matchingAlienGray}></img>
          <img src={matchingAlienGray}></img>
        </div>

        <div className="info-card-wrap">
          <div className="upper-wrap">
            <div className="split">
              <div className="upper-date">
                <img src={matchingDate}></img>
                <div className='date-text'>日時</div>
              </div>
              <div className='date-data'>
                2023/mm/dd 09:00 ~
                2023/mm/dd 10:00 ~
                2023/mm/dd 11:00 ~
              </div>
              
              <div className="lower-date">
                <img src={matchingPin}></img>
                <div className='date-text'>場所</div>
              </div>

              <div className='date-data'>
                東京都,群馬県
              </div>
              
              
            </div>

            <div className="split">
              <img src={matchingEdit}></img>
            </div>
          </div>

        </div>
      </div>

    </div>
    
  );
}
