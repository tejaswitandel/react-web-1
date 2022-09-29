import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBluegray300:
    "bg-white_A700 border border-bluegray_300 border-solid",
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
};
const shapes = {
  srcRoundedBorder6: "rounded-radius6",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  smSrc: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  mdSrc: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  sm: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  md: "lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pt-[14px] xl:pt-[16px] pt-[19px] 3xl:pt-[22px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder6", "RoundedBorder8"]),
  variant: PropTypes.oneOf(["srcOutlineBluegray300", "OutlineBluegray100"]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineBluegray100",
  size: "sm",
};

export { Input };
