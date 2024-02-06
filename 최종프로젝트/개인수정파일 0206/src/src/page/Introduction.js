import Count from "../components/Introduce-components/Count";
import LineChart from "../components/Introduce-components/LineChart";
import PieChart from "../components/Introduce-components/PieChart";
import styles from './Introduce.module.css';
import Intro from "../assets/서비스 소개(배너).png";
import Pyramid from "../components/Introduce-components/Pyramid";


function Introduction() {

  return (
    <>
      <div className={styles.Introduction}>
        <div className={styles.Service}>
          <div className={styles.banner}>
            <div className={styles.bannerImg}>
              <img className={styles.serviceImg} alt='service' src={Intro} />
            </div>
            <div className={styles.bannerText}>
              <h1 className={styles.header}>서비스 소개</h1>
              <p className={styles.headerHead}>버디즈의 서비스 소개를 확인하세요!</p>
            </div>
          </div>
        </div>
        <div className={styles.Content}>
          <p>저희 서비스는 서비스를 이용하여 주변에서 <strong>함께 운동 할 친구</strong>를 찾고,<br />
            <strong>필터로 원하는 종목만 검색</strong> 할 수 있으며, 축구나 풋살 등 다인원이 필요한 운동 종목들도<br />
            <strong>채팅 서비스를 이용하여 커뮤니티를 형성을</strong> 할 수 있습니다. 또한 <strong>중고거래를 통해 비용을 절약</strong> 할 수도 있습니다.</p>
        </div>
        <div className={styles.Container}>
          <div>
            <h3 className={styles.author}>사용자 증가 추이</h3>
          </div>
          <div className={styles.LineChart}>
            <LineChart />
          </div>
          <p>
            여기는 사용자 증가 추이를 나타내는 차트 입니다.<br />
            여기는 사용자 증가 추이를 나타내는 차트 입니다.
            여기는 사용자 증가 추이를 나타내는 차트 입니다.<br />
            여기는 사용자 증가 추이를 나타내는 차트 입니다.
            여기는 사용자 증가 추이를 나타내는 차트 입니다.
          </p>
        </div>
        <div className={styles.PieChart}>
          <div className={styles.CountText}>
            <div className={styles.name}>
              <h3 className={styles.Other}>성별</h3>
            </div>
            <PieChart />
          </div>
          <div className={styles.CountText}>
            <div className={styles.name}>
              <h3 className={styles.Other}>채팅방 생성 수</h3>
            </div>
            <Count />
          </div>
        </div>
        <div className={styles.pyramidName}>
          <div className={styles.PyramidChart}>
            <h3 className={styles.Other}>연령대 별</h3>
          </div>
            <Pyramid />
            <p>
            여기는 사용자 증가 추이를 나타내는 차트 입니다.<br />
            여기는 사용자 증가 추이를 나타내는 차트 입니다.
            여기는 사용자 증가 추이를 나타내는 차트 입니다.<br />
            여기는 사용자 증가 추이를 나타내는 차트 입니다.
            여기는 사용자 증가 추이를 나타내는 차트 입니다.
          </p>
        </div>

      </div>

    </>

  )
}

export default Introduction;