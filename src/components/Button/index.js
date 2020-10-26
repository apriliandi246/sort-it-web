import React from "react";

export default function Buttons({
   minSort,
   maxSort,
   onCopy,
   onSort,
   sortedProperties,
   unSortedProperties,
}) {
   return (
      <div className="buttons">
         <button
            onClick={onSort}
            className="btn-one"
            disabled={
               unSortedProperties.length !== 0 &&
               (minSort === true || maxSort === true)
                  ? false
                  : true
            }
         >
            Sort
         </button>

         <button
            onClick={onCopy}
            className="btn-two"
            disabled={sortedProperties.length === 0 ? true : false}
         >
            Copy
         </button>
      </div>
   );
}
