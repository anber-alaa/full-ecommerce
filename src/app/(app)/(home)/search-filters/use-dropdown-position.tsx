import { RefObject } from "react";

export default function useDropdownPosition(
  ref:RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) {
  const getDropdownPosition = () =>{
    if(!ref.current) return{top:0 , left:0};

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; //(w-60 = 15rem = 240px)
    const top = rect.bottom + window.scrollY + 10;
    let left = rect.left + window.scrollX;


    // check if dropdown will overflow right side of screen
    if(rect.left + dropdownWidth > window.innerWidth){
      // align to right side of the button
      left = rect.right + window.scrollX - dropdownWidth;

      //if still off screen align to right edge with some padding
      if(left < 0){
        left = window.innerWidth - dropdownWidth - 16;
      }

      // to ensure it doesn't overflow left side
      if(left < 0){
        left = 16; //16px padding
      }
    }
    return {top , left};
  }
  return {getDropdownPosition}
};
