import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import classes from "./DeleteCartModal.module.css";

function DeleteCartModal(props) {
  const modalRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      modalRef.current.style.opacity = 1;
      modalRef.current.style.bottom = 0;
      modalRef.current.style.top = 0;
    }, 1);
  }, []);

  return (
    <div className={classes["modal-container"]} ref={modalRef}>
      <p className={classes["modal-text"]}>آیا از حذف سبد خرید مطمئن هستید؟</p>
      <div className={classes["modal-container-buttons"]}>
        <button
          className={classes["modal-delete-btn"]}
          onClick={props.onConfirm}
        >
          حذف سبد
        </button>
        <button
          className={classes["modal-cancel-btn"]}
          onClick={props.onCancel}
        >
          انصراف
        </button>
      </div>
    </div>
  );
}

export default DeleteCartModal;
