import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Board.module.css'
import Container from './../components/Container';

function Board() {
  return (

    <div>
      <Container>
        <ul className={styles.headerContainer}>
          <Link to={"/board"}><li className={styles.select}>전체보기</li></Link>
          <Link to={"boardItemFree"}><li>자유게시판</li></Link>
          <Link to={"boardItemTip"}><li>운동팁</li></Link>
          <Link to={"boardItemHelp"}><li>도와주세요!!</li></Link>
          <Link to={"boardItemUsed"}><li>중고시장</li></Link>
        </ul>
        <Outlet />
      </Container>
    </div>


  )
}

export default Board;