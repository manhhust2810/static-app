import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Item.module.css';
import Moment from 'react-moment';
import 'moment/locale/vi';
import 'moment-timezone';
// import TodoList from '../TodoList';
import "./Item.css";
// import { 
//     Button, 
//     Modal, 
//     ModalBody, 
//     ModalFooter, 
//     ModalHeader, 
//     Container, 
//     Row, 
//     Col, 
//     Label 
// } from "reactstrap";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Item(props) {
    const dispatch = useDispatch();
    const { name, priority, done, created, edited } = props.data;
    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal);
    const confirmDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    // <Modal 
                    // isOpen={modal} 
                    // toggle={toggle}
                    // id="success-modal"
                    // className="member-modal"
                    // >
                    // <ModalHeader 
                    // toggle={toggle}
                    // className="modal-header glyph-icon simple-icon-info"
                    // >
                    // Xóa nào
                    // </ModalHeader>
                    // <ModalBody>
                    // Xác nhận xóa {name}
                    // </ModalBody>
                    // <ModalFooter>
                    // <Button 
                    // color="primary" 
                    // onClick={() => {
                    // dispatch({
                    //     type: 'DELETE_TASK',
                    //     name
                    // })
                    //     onClose();
                    // }}>
                    // Xóa
                    // </Button>{' '}
                    // <Button 
                    // color="secondary" 
                    // onClick={onClose}>
                    // Hủy
                    // </Button>
                    // </ModalFooter>
                    // </Modal>
                    <div className="custom-ui">
                        <div className={style.sure}>
                            <div className={style.sureIcon}>
                                <i className="fa fa-ban"></i>
                            </div>
                            <div className={style.confirmSure}>Xác nhận xóa công việc này?</div>
                            <div className={style.nameJob}><i className="fa fa-clipboard"></i> {name}</div>
                            <div className={style.wrapBtnSure}>
                                <button className={style.btnSureYes}
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_TASK',
                                            name
                                        })
                                        onClose();
                                    }}
                                >Xác nhận</button>
                                <button className={style.btnSureNo} onClick={onClose}>Hủy</button>
                            </div>
                        </div>
                    </div>
                    // <Modal 
                    //     // isOpen={modal} 
                    //     // toggle={toggle} 
                    //     // onOpened={handleOnClosePopupSuccessError} 
                    //     id="success-modal"
                    //     className="member-modal"
                    // >
                    // <ModalHeader 
                    //     // toggle={toggle} 
                    //     className="modal-header glyph-icon simple-icon-info"
                    // >
                    // Xóa
                    // </ModalHeader>
                    // <ModalBody>
                    // Xác nhận xóa công việc này?
                    // </ModalBody>
                    // <ModalFooter>
                    // <Button 
                    // color="primary" 
                    // onClick={() => {
                    // dispatch({
                    //     type: 'DELETE_TASK',
                    //     name
                    //     })
                    //     onClose();
                    // }}
                    // >
                    // Xác nhận
                    // </Button>
                    // <Button 
                    // color="secondary" 
                    // onClick={onClose}
                    // >
                    // Hủy
                    // </Button>
                    // </ModalFooter>
                    // </Modal>
                );
            }
        });
    }

    let classPri = style.itemPriMedium;
    let iconPri = style.iconMedium;
    if (priority === "Ưu tiên thấp") {
        classPri = style.itemPriLow;
        iconPri = style.iconLow;
    }
    if (priority === "Ưu tiên cao") {
        classPri = style.itemPriHigh;
        iconPri = style.iconHigh;
    }

    const checkTask = (name) => {
        dispatch({
            type: 'CHECK_TASK',
            name
        })
    }

    const editTask = () => {
        dispatch({
            type: 'EDIT_TASK',
            data: props.data
        })
    }

    return (
        <div className={style.containerItem}>
            <div className={style.iconTitle}>
                {done ? <i className="fa fa-clipboard-check"></i> : <i className="fa fa-clipboard" 
                style={{ color: '#555' }}></i>}
            </div>
            <div className={style.itemTitle}>
                <div className={done ? style.titleDone : style.titlePen}>
                    {name.length <= 35 ? name : name.substring(0, 35) + '...'}
                </div>
                <div className={style.time}>
                <Moment fromNow>{created}</Moment> 
                {edited !== '' ? '(Đã sửa ' : ''}{edited !== '' ? 
                <Moment fromNow>{edited}</Moment> : ''}{edited !== '' ? ')' : ''}
                </div>
            </div>
            <div className={style.itemMiddle}>
                <div className={classPri}>
                <div className={iconPri}></div> 
                <span className={style.notMobile}>{priority}</span>
                </div>
            </div>
            <div className={style.itemUD}>
                <button 
                className={style.btnCheck} 
                onClick={() => checkTask(name)}>{done ? <i className="fa fa-minus-circle" 
                style={{ color: '#686868' }}></i> : <i className="fa fa-check-circle"></i>}</button>
                <button 
                className={style.btnEdit} 
                onClick={() => editTask()}><i className="fa fa-pen"></i></button>
                <button 
                className={style.btnDelete} 
                onClick={() => confirmDelete()}><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Item;
