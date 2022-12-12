import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
const ModalPayProduct = (props) => {
    const { show, setShow, data } = props;
    console.log(data)
    const handleClose = () => {
        setShow(false);
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            backdrop="static"
            className='modal-view-product'
        >
            <Modal.Header closeButton>
                <Modal.Title>View a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text"
                            className="form-control"

                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Quantity</label>
                        <input type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Price</label>
                        <input type="text"
                            className="form-control"

                        />
                    </div>
                    {/* <div className='col-md-12 img-preview'>
                        {dataView.image ?
                            <img src={dataView.image} value />
                            :
                            <span>Preview Image</span>
                        }
                    </div> */}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalPayProduct;