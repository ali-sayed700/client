import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SidebarAdmin from "../../component/admin/SidebarAdmin";
import CustDetails from "../../component/customersDetails/CustDetails";
import { useParams } from "react-router";
import GetOneOrderCashHook from "../../usehooks/checkout/GetOneOrdersCash.Hook";
import UserOrderItems from "../../component/users/UsersOrderItems";
// UserOrderItems;
function AdminOrderDetails() {
  let { id } = useParams();
  const [isUserData, isData] = GetOneOrderCashHook(id);
  return (
    <Container>
      <Row className="my-5 ">
        <h3 className="mb-4"> order details num #{isData.id} </h3>
        <Col xs={9}>
          <UserOrderItems orderItem={isData} />

          <CustDetails user={isUserData} isData={isData} />
        </Col>
        <Col xs={3}>
          <SidebarAdmin />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminOrderDetails;
