import  Bar  from './Bar';
import './App.css';
import Count from './Count';
import './index.css'
import LineChart from './LineChart';
import LineChartPie from './LineChartPie';

function App() {
  return (
    <>
      <div className='Service'>
        <div className='banner'>
          <div className='bannerImg'>
            <img className='serviceImg' alt='service' src='img/서비스 소개(배너).png' />
          </div>
          <div className='bannerText'>
            <h1 className='header'>서비스 소개</h1>
            <p className='headerHead'>버디즈의 서비스 소개를 확인하세요!</p>
          </div>
        </div>
      </div>
      <div className='Content'>
        <p>저희 서비스는 서비스를 이용하여 주변에서 <strong>함께 운동 할 친구</strong>를 찾고,<br />
          <strong>필터로 원하는 종목만 검색</strong> 할 수 있으며, 축구나 풋살 등 다인원이 필요한 운동 종목들도<br />
          <strong>채팅 서비스를 이용하여 커뮤니티를 형성을</strong> 할 수 있습니다. 또한 <strong>중고거래를 통해 비용을 절약</strong> 할 수도 있습니다.</p>
      </div>
      <div>
        <h3 className='author'>사용자 증가 추이</h3>
      </div>
      <div className='Container'>
        <div className='LineChart'>
          <LineChart />
        </div>
        <div className='PieChart'>
          <Bar />
          <LineChartPie />
          <div className='Count'>
          <Count />
          </div>
  
        </div>

      </div>

    </>

  );
}

export default App;
