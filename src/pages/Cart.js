import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart (){
  let stock = useSelector((state) => { return state.stock });

  let cartItem = useSelector((state) => { return state.cartItem });
  console.log(cartItem);

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item, i) => {
            return <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td></td>
          </tr>
          })} 
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;