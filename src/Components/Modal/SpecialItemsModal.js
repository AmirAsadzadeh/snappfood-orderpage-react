import classes from "./SpecialItemsModal.module.css";

import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function SpecialItemsModal(props) {
  const formRef = useRef();
  const modalRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      modalRef.current.classList.add(classes.active);
    }, 100);
  }, []);

  const formSubmitHandler = function (event) {
    event.preventDefault();

    const nodeList = formRef.current.childNodes;

    const selectedItems = {};

    nodeList[0].querySelectorAll("input").forEach((item) => {
      if (!item) return;
      if (item?.checked === true) {
        const name = item.id;
        selectedItems[item.id] = [
          props.specials[name][0],
          props.specials[name][1],
        ];
      }
    });

    props.onClose();

    props.onSubmit(selectedItems);
  };

  return (
    <div ref={modalRef} className={classes["modal-container"]}>
      <div className={classes["modal-header"]}>
        <div className={classes["modal-close-button"]} onClick={props.onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.875rem"
            height="0.875rem"
            viewBox="0 0 14 14"
            fill="#676A70"
          >
            <path d="M8.41 7.00019L12.71 2.71019C12.8983 2.52188 13.0041 2.26649 13.0041 2.00019C13.0041 1.73388 12.8983 1.47849 12.71 1.29019C12.5217 1.10188 12.2663 0.996094 12 0.996094C11.7337 0.996094 11.4783 1.10188 11.29 1.29019L7 5.59019L2.71 1.29019C2.5217 1.10188 2.2663 0.996094 2 0.996094C1.7337 0.996094 1.4783 1.10188 1.29 1.29019C1.1017 1.47849 0.995908 1.73388 0.995908 2.00019C0.995908 2.26649 1.1017 2.52188 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41018L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z"></path>
          </svg>
        </div>
      </div>

      <div className={classes["modal-title"]}>انتخاب افزودنی</div>
      <p className={classes["modal-description"]}>
        {props.foodName + " " + props.type}
      </p>
      <form
        ref={formRef}
        className={classes.form}
        action=""
        onSubmit={formSubmitHandler}
      >
        <div className={classes["special-items-container"]}>
          {Object.entries(props.specials).map((special) => (
            <div key={special[0]} className={classes["special-item-container"]}>
              <label>
                <input id={special[0]} type="checkbox" /> {special[1][0]}
              </label>
              <p>
                {new Intl.NumberFormat("fa-IR").format(special[1][1])} تومان
              </p>
            </div>
          ))}
        </div>

        <button
          className={classes["modal-submit-button"]}
          // onClick={formSubmitHandler}
        >
          افزودن به سبد خرید
        </button>
      </form>
    </div>
  );
}

export default SpecialItemsModal;
