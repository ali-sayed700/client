import React from "react";
import AddressCard from "./AddressCard";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetAllAddressHook from "../../usehooks/address/GetAll.Address.Hook";

function UsersAddress() {
  const [arr] = GetAllAddressHook();

  return (
    <div>
      {arr.length >= 1 ? (
        arr.map((item, index) => <AddressCard key={index} item={item} />)
      ) : (
        <h3> no addresses there </h3>
      )}

      <Row className="my-3 justify-content-center">
        <Col sm={5}>
          <Link to="/user/add-address">
            <Button
              className="px-3 fs-4 d-flex m-auto my-2 py-3"
              variant="dark">
              add new address
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default UsersAddress;
