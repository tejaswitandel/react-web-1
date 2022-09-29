import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Stack,
  Button,
  Input,
  Datepicker,
} from "components";

const EditProfilePage = () => {
  return (
    <>
      <Column className="bg-gray_52 font-gilroy items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[98%]">
          <aside className="w-[23%]">
            <Column className="">
              <Column className="bg-gray_51 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[91%]">
                <Img
                  src="images/img_group10392_15.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[64%]"
                  alt="Group10392"
                />
                <Column className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[56%]">
                  <Row className="items-center ml-[3px] w-[78%]">
                    <Img
                      src="images/img_settings.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="settings"
                    />
                    <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[70%]">
                    <Img
                      src="images/img_ticket.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] w-[12%]"
                      alt="ticket"
                    />
                    <Text className="font-semibold lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                      Payments
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[14%]"
                      alt="Vector"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                      Wallet & Cards
                    </Text>
                  </Row>
                  <Row className="lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[88%]">
                    <Img
                      src="images/img_settings_17X22.svg"
                      className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mt-[1px] w-[18%]"
                      alt="settings One"
                    />
                    <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                      Transactions
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[69%]">
                    <Img
                      src="images/img_arrowup.svg"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[2px] w-[20%]"
                      alt="arrowup"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                      Analytics
                    </Text>
                  </Row>
                  <Row className="ml-[1px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[73%]">
                    <Img
                      src="images/img_menu_20X20.svg"
                      className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                      alt="menu"
                    />
                    <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                      Messages
                    </Text>
                  </Row>
                </Column>
                <Row className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[40%]">
                  <Line className="bg-blue_A701 lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2px]" />
                  <Img
                    src="images/img_settings_20X19.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] w-[19%]"
                    alt="settings Two"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A701 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Row className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[374px] xl:mt-[427px] 2xl:mt-[481px] 3xl:mt-[577px] w-[25%]">
                  <Img
                    src="images/img_question.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="question"
                  />
                  <Text className="font-semibold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                    Help
                  </Text>
                </Row>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[77%]">
            <header className="w-[100%]">
              <Row className="items-center w-[100%]">
                <Text className="font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                  Settings
                </Text>
                <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[637px] xl:ml-[728px] 2xl:ml-[819px] 3xl:ml-[983px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
                  <Img
                    src="images/img_notification.svg"
                    className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[38%]"
                    alt="notification"
                  />
                  <Text className="absolute bg-red_700 border border-bluegray_50 border-solid flex font-semibold items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] rounded-radius50 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-white_A700 top-[2%] w-[18px]">
                    2
                  </Text>
                </Stack>
                <Column className="border border-blue_A700 border-solid lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] px-[4px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
                  <Img
                    src="images/img_profileimglarg.png"
                    className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                    alt="ProfileImgLarg"
                  />
                </Column>
              </Row>
            </header>
            <Stack className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Line className="absolute bg-gray_300 bottom-[0] h-[1px] w-[100%]" />
              <Row className="absolute bottom-[0] left-[3%] w-[69%]">
                <Column className="items-center mt-[1px] w-[17%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_A701 w-[auto]">
                    My Profile
                  </Text>
                  <Line className="bg-blue_A701 h-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[73%]" />
                </Column>
                <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Notifications
                </Text>
                <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Language
                </Text>
                <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  General settings
                </Text>
                <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Theme
                </Text>
                <Text className="font-medium lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Help and feedback
                </Text>
              </Row>
            </Stack>
            <Stack className="3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] lg:ml-[383px] xl:ml-[438px] 2xl:ml-[493px] 3xl:ml-[591px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] 3xl:w-[111px] lg:w-[72px] xl:w-[82px] 2xl:w-[93px]">
              <Img
                src="images/img_profileimglarg.png"
                className="absolute 3xl:h-[112px] lg:h-[73px] xl:h-[83px] 2xl:h-[94px] rounded-radius50 w-[100%]"
                alt="ProfileImgLarg One"
              />
              <Button
                className="absolute bottom-[1%] flex lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] items-center justify-center right-[1%] lg:w-[17px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
                shape="icbRoundedBorder11"
                size="smIcn"
                variant="icbOutlineGray53"
              >
                <Img
                  src="images/img_vector_white_A700.svg"
                  className="flex items-center justify-center lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px]"
                  alt="Vector One"
                />
              </Button>
            </Stack>
            <Row className="items-center justify-center lg:ml-[214px] xl:ml-[245px] 2xl:ml-[276px] 3xl:ml-[331px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[49%]">
              <Column className="w-[48%]">
                <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  First Name
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                  name="Group10198"
                  placeholder="jane"
                  size="md"
                ></Input>
              </Column>
              <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] w-[48%]">
                <Text className="font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                  Last Name
                </Text>
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
                  wrapClassName="2xl:mt-[6px] 3xl:mt-[7px] lg:mt-[4px] w-[100%] xl:mt-[5px]"
                  name="Group10198 One"
                  placeholder="Jnson"
                ></Input>
              </Column>
            </Row>
            <Text className="font-medium lg:ml-[214px] xl:ml-[245px] 2xl:ml-[276px] 3xl:ml-[331px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Email
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
              wrapClassName="2xl:ml-[276px] 2xl:mt-[6px] 3xl:ml-[331px] 3xl:mt-[7px] lg:ml-[214px] lg:mt-[4px] w-[49%] xl:ml-[245px] xl:mt-[5px]"
              type="email"
              name="email"
              placeholder="jane@gmail.com"
            ></Input>
            <Text className="font-medium lg:ml-[214px] xl:ml-[245px] 2xl:ml-[276px] 3xl:ml-[331px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Mobile Number
            </Text>
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
              wrapClassName="2xl:ml-[276px] 2xl:mt-[8px] 3xl:ml-[331px] 3xl:mt-[9px] lg:ml-[214px] lg:mt-[6px] w-[49%] xl:ml-[245px] xl:mt-[7px]"
              name="mobileNo"
              placeholder="+91 1234567890"
            ></Input>
            <Text className="font-medium lg:ml-[214px] xl:ml-[245px] 2xl:ml-[276px] 3xl:ml-[331px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
              Date of Birth
            </Text>
            <Datepicker
              className="placeholder:bg-transparent bg-transparent font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_701 text-bluegray_701 w-[100%]"
              name="Group10198 Two"
              placeholder="08/09/1995"
            ></Datepicker>
            <Button
              className="font-medium lg:ml-[214px] xl:ml-[245px] 2xl:ml-[276px] 3xl:ml-[331px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[49%]"
              shape="RoundedBorder6"
            >
              Save
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EditProfilePage;
