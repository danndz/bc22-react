import React from "react";
import cn from "classnames";

// variant: vẻ bề ngoài của component

// children: là một prop mặc định của component, đại diện cho nội dung bên trong hai tag đóng mở khi sử dụng component
// <Button>Content</Button>
// Content chính là children

// className: khi sử dụng từ khoá className cho 1 component, thì đây chỉ là tên của 1 prop, ta cần đưa giá trị của biến className vào 1 thẻ html bên trong component

// ...rest: những props còn lại được truyền vào khi gọi component
// VD: {disabled: true, type: "button"}
// <button {...rest}>Submit</button>
// => <button disabled={true} type="button">Submit</button>

// icon: prop có thể là 1 phần tử jsx/component

const Button = ({ variant, children, className, icon, ...rest }) => {
  const classes = cn(`btn btn-${variant}`, className);

  return (
    <button className={classes} {...rest}>
      <span>{children}</span>
      {icon && <i>{icon}</i>}
    </button>
  );
};

export default Button;
