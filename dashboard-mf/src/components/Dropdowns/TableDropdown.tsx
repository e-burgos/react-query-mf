import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

type Props = {
  type: string;
  setValue: Function;
  value: number[];
  icon?: string;
}

const TableDropdown = ({type, setValue, value, icon}: Props) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef<any>();
  const popoverDropdownRef = React.createRef<any>();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, page: number) => {
    e.preventDefault();
    setValue(page);
    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
  }

  return (
    <>
      <div
        className="cursor-pointer text-white font-bold px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className={`${icon}`}></i>
        <span>{type}</span> 
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg"
        }
      >
        {value.map(item => (
          <div
          key={item}
          className={"cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"}
          onClick={(e) => handlePageClick(e, item)}
        >
          {item}
        </div>
        ))}
        
      </div>
    </>
  );
};

export default TableDropdown;
