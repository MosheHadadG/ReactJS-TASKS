import React from "react";
import Text from "./Text";


const textString =
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo sequi fuga aspernatur amet pariatur distinctio fugiat.
 Non minus similique et, recusandae rem assumenda. Eaque quaerat, veniam quod odit laboriosam numquam itaque iure ea. Aut veritatis aliquam omnis reiciendis,
 blanditiis nisi commodi nulla dolores autem quisquam dicta perspiciatis deserunt pariatur laborum eaque nam, iusto magnam aspernatur!`

const maxLength = 220;

const AppText = () => {
  return (
    <div>
      <Text textString={textString} maxLength={maxLength} />
    </div>
  );

}

export default AppText;