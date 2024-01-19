import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Shopping() {
  return (
    <div>
      <div>
        <Link to={"/shopping"}><p>전체보기</p></Link>
        <Link to={"ShoppingItemEquipment"}><p>장비</p></Link>
        <Link to={"ShoppingItemClothes"}><p>의류</p></Link>
        <Link to={"ShoppingItemFood"}><p>식품</p></Link>
        <Link to={"ShoppingItemEct"}><p>기타</p></Link>
        <Outlet />
      </div>

    </div>
  )
}

export default Shopping;