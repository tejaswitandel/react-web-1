import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  CircleBorder16: "rounded-radius16",
  RoundedBorder3: "rounded-radius3",
  icbRoundedBorder6: "rounded-radius61",
  icbRoundedBorder3: "rounded-radius3",
  icbRoundedBorder11: "rounded-radius11955",
};
const variants = {
  FillBlueA701: "bg-blue_A701 text-white_A700",
  OutlineBlueA701: "border border-blue_A701 border-solid text-blue_A701",
  OutlineBluegray400:
    "border border-bluegray_400 border-solid text-bluegray_400",
  FillGreen600: "bg-green_600 text-gray_50",
  FillLightblue100: "bg-light_blue_100 text-black_900",
  FillRed200: "bg-red_200 text-black_900",
  FillGreenA100: "bg-green_A100 text-black_900",
  OutlineBlack9003f: "bg-white_A700 shadow-bs1 text-bluegray_700",
  OutlineBlueA7011_2:
    "bg-white_A700 border border-blue_A701 border-solid text-blue_200",
  icbOutline: "bg-gradient ",
  icbOutlineBluegray50:
    "bg-white_A700 border border-bluegray_50 border-solid shadow-bs",
  icbOutlineGray53: "bg-blue_A701 outline outline-[3.33px] outline-gray_53",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  md: "lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lg: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  xl: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  smIcn: "p-[4px]",
  mdIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CircleBorder16",
    "RoundedBorder3",
    "icbRoundedBorder6",
    "icbRoundedBorder3",
    "icbRoundedBorder11",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA701",
    "OutlineBlueA701",
    "OutlineBluegray400",
    "FillGreen600",
    "FillLightblue100",
    "FillRed200",
    "FillGreenA100",
    "OutlineBlack9003f",
    "OutlineBlueA7011_2",
    "icbOutline",
    "icbOutlineBluegray50",
    "icbOutlineGray53",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillBlueA701",
  size: "xl",
};

export { Button };
