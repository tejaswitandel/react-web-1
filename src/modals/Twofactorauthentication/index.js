import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";

const TwofactorauthenticationModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[38%]"
        overlayClassName="fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] rounded-radius12 shadow-bs w-[100%]">
            <Img
              src="images/img_mobile.svg"
              className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[9%]"
              alt="mobile"
            />
            <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-blue_A701 w-[auto]">
              OTP Verification
            </Text>
            <Text className="font-medium lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
              <span className="text-colors2 font-gilroy">OTP Is Send to</span>
              <span className="text-colors3 font-gilroy"> </span>
              <span className="text-colors font-gilroy font-bold">
                +91 01234567890
              </span>
            </Text>
            <Row className="font-opensans items-center justify-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[72%]">
              <Button
                className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[13%]"
                shape="RoundedBorder3"
                variant="OutlineBlueA7011_2"
              >
                |
              </Button>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius3 w-[13%]"></div>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius3 w-[13%]"></div>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius3 w-[13%]"></div>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius3 w-[13%]"></div>
              <div className="bg-white_A700 border border-bluegray_200 border-solid lg:h-[41px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius3 w-[13%]"></div>
            </Row>
            <Button
              className="font-medium lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[89%]"
              shape="RoundedBorder6"
            >
              Verify OTP
            </Button>
            <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A701 w-[auto]">
              <span className="text-colors2 font-gilroy">
                Didn’t Recieved Code ?
              </span>
              <span className="text-colors font-gilroy"> </span>
              <span className="text-colors font-gilroy font-bold">Resend </span>
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default TwofactorauthenticationModal;
