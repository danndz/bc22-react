import React from "react";
import cn from "classnames";

// Cách 1: quyết định giao diện của component thông qua props
// const Card = ({ header, footer, image, children, className }) => {
//   return (
//     <div className={cn("card", className)}>
//       {image && <img src={image} alt="cardImage" className="card-img" />}
//       {header && <div className="card-header">{header}</div>}
//       <div className="card-body">{children}</div>
//       {footer && <div className="card-footer">{footer}</div>}
//     </div>
//   );
// };

// Cách 2: Chia nhỏ các thành phần của giao diện thành nhiều component
const Card = ({ className, children }) => {
  return <div className={cn("card", className)}>{children}</div>;
};

const CardHeader = ({ className, children }) => {
  return <div className={cn("card-header", className)}>{children}</div>;
};

const CardBody = ({ className, children }) => {
  return <div className={cn("card-body", className)}>{children}</div>;
};

const CardFooter = ({ className, children }) => {
  return <div className={cn("card-footer", className)}>{children}</div>;
};

const CardImage = ({ className, src, alt }) => {
  return <img className={cn("card-img", className)} src={src} alt={alt} />;
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;
