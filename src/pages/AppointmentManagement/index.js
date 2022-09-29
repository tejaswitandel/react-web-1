import React from "react";

import { Column, Row, Img, Input, Stack, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AppointmentManagementPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_group_11.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[101px] 3xl:ml-[121px] flex lg:ml-[78px] w-[29%] xl:ml-[89px]"
              name="InputField"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[0] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#bac1ce"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder6"
              size="smSrc"
              variant="srcOutlineBluegray300"
            ></Input>
            <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[373px] xl:ml-[427px] 2xl:ml-[480px] 3xl:ml-[576px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
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
        <Row className="lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[88%]">
          <Column className="justify-end lg:pr-[23px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[70%]">
            <Text className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              282 Doctors Available in USA
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[100%]">
                <Stack className="bg-blue_50 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius45 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] inset-x-[0] mx-[auto] w-[84%]"
                    alt="FrameEightyOne"
                  />
                </Stack>
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[55%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-blue_A701 w-[auto]">
                    Dr. Jenny Wilson
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    Dental Surgeon
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    19 Year Experience Overall
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[79%]">
                    <span className="text-gray_900_a5 font-gilroy">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors font-gilroy font-semibold">
                      Read More
                    </span>
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[23%]">
                  <Button
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                    variant="OutlineBlueA701"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Book Hospital visit
                  </Button>
                </Column>
              </Row>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[100%]">
                <Stack className="bg-blue_50 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius45 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] inset-x-[0] mx-[auto] w-[84%]"
                    alt="FrameEightyOne One"
                  />
                </Stack>
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[55%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-blue_A701 w-[auto]">
                    Dr. Jenny Wilson
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    Dental Surgeon
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    19 Year Experience Overall
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[79%]">
                    <span className="text-gray_900_a5 font-gilroy">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors font-gilroy font-semibold">
                      Read More
                    </span>
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[23%]">
                  <Button
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                    variant="OutlineBlueA701"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Book Hospital visit
                  </Button>
                </Column>
              </Row>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[100%]">
                <Stack className="bg-blue_50 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius45 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] inset-x-[0] mx-[auto] w-[84%]"
                    alt="FrameEightyOne Two"
                  />
                </Stack>
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[55%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-blue_A701 w-[auto]">
                    Dr. Jenny Wilson
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    Dental Surgeon
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    19 Year Experience Overall
                  </Text>
                  <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[79%]">
                    <span className="text-gray_900_a5 font-gilroy">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors font-gilroy font-semibold">
                      Read More
                    </span>
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[23%]">
                  <Button
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                    variant="OutlineBlueA701"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Book Hospital visit
                  </Button>
                </Column>
              </Row>
              <Row className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[100%]">
                <Stack className="bg-blue_50 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] 3xl:px-[10px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius45 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                  <Img
                    src="images/img_frame81.png"
                    className="absolute bottom-[0] lg:h-[110px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] inset-x-[0] mx-[auto] w-[84%]"
                    alt="FrameEightyOne Three"
                  />
                </Stack>
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[55%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-blue_A701 w-[auto]">
                    Dr. Jenny Wilson
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    Dental Surgeon
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    19 Year Experience Overall
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900_a5 w-[auto]">
                    <span className="text-gray_900_a5 font-gilroy">
                      Dr. Jenny Wilson (Implantologist), is a Dentist in
                      America, she has 20 years of...{" "}
                    </span>
                    <span className="text-colors font-gilroy font-semibold">
                      Read More
                    </span>
                  </Text>
                </Column>
                <Column className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[23%]">
                  <Button
                    className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                    variant="OutlineBlueA701"
                  >
                    Book Video Consult
                  </Button>
                  <Button
                    className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    shape="RoundedBorder6"
                  >
                    Book Hospital visit
                  </Button>
                </Column>
              </Row>
            </List>
          </Column>
          <Column className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[30%]">
            <Text className="font-semibold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
              Pick Date and Time
            </Text>
            <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius6 w-[100%]">
              <Row className="justify-between lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                <Button
                  className="flex lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbOutlineBluegray50"
                >
                  <Img
                    src="images/img_arrowleft_black_900_32X32.svg"
                    className="flex items-center justify-center"
                    alt="arrowleft"
                  />
                </Button>
                <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                  September 2022
                </Text>
                <Button
                  className="flex lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbOutlineBluegray50"
                >
                  <Img
                    src="images/img_arrowright_black_900_32X32.svg"
                    className="flex items-center justify-center"
                    alt="arrowright"
                  />
                </Button>
              </Row>
              <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[93%]">
                <Text className="font-medium mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  SUN
                </Text>
                <Text className="font-medium mb-[1px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  MON
                </Text>
                <Text className="font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  TUE
                </Text>
                <Text className="font-medium lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] my-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  WED
                </Text>
                <Text className="font-medium lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  THU
                </Text>
                <Text className="font-medium lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] my-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  FRI
                </Text>
                <Text className="font-medium mb-[1px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 w-[auto]">
                  SAT
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[90%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between mr-[2px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    31
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    1
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    3
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    4
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    5
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    6
                  </Text>
                </Row>
                <Row className="items-center justify-between ml-[2px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    7
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    8
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    9
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    10
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    11
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    12
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    13
                  </Text>
                </Row>
              </List>
              <Row className="items-center lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  14
                </Text>
                <Text className="font-semibold lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  15
                </Text>
                <Text className="font-semibold lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  16
                </Text>
                <Text className="font-semibold lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  17
                </Text>
                <Button
                  className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[15%]"
                  shape="RoundedBorder6"
                  size="md"
                >
                  18
                </Button>
                <Text className="font-semibold lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  19
                </Text>
                <Text className="font-semibold lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                  20
                </Text>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[90%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    21
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    22
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    23
                  </Text>
                  <Text className="flex font-semibold items-center mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    24
                  </Text>
                  <Text className="flex font-semibold items-center mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    24
                  </Text>
                  <Text className="flex font-semibold items-center mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    26
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    27
                  </Text>
                </Row>
                <Row className="items-center justify-between mr-[2px] xl:my-[10px] 2xl:my-[11px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                  <Text className="flex font-semibold items-center my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    28
                  </Text>
                  <Text className="flex font-semibold items-center mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    29
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    30
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    1
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    2
                  </Text>
                  <Text className="font-semibold mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    3
                  </Text>
                  <Text className="font-semibold my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_400 w-[auto]">
                    4
                  </Text>
                </Row>
              </List>
              <Img
                src="images/img_frame34732.svg"
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
                alt="Frame34732"
              />
              <List
                className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[100%]">
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    12:30 PM
                  </Button>
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    1:00 PM
                  </Button>
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    1:30 PM
                  </Button>
                </Row>
                <Row className="items-center justify-between lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[100%]">
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    2:00 PM
                  </Button>
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                  >
                    2:30 PM
                  </Button>
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    3:00 PM
                  </Button>
                </Row>
                <Row className="items-center justify-between lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[100%]">
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    3:30 PM
                  </Button>
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    4:00 PM
                  </Button>
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[28%]"
                    shape="RoundedBorder6"
                    size="lg"
                    variant="OutlineBluegray400"
                  >
                    4:30 PM
                  </Button>
                </Row>
              </List>
              <Text className="font-medium lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Hospital Location
              </Text>
              <Text className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mb-[140px] xl:mb-[160px] 2xl:mb-[180px] 3xl:mb-[216px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[100%]">
                4517 Washington Ave. Manchester, Kentucky 39495
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AppointmentManagementPage;
