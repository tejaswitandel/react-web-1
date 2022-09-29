import React from "react";

import {
  Stack,
  Column,
  Img,
  Text,
  Row,
  List,
  Button,
  Input,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const NavigationMenuPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack className="bg-gray_50 font-chivo 2xl:h-[1081px] 3xl:h-[1297px] lg:h-[840px] xl:h-[961px] mx-[auto] w-[100%]">
        <Column className="absolute bottom-[4%] inset-x-[0] items-center mx-[auto] w-[88%]">
          <Column
            className="bg-cover bg-repeat lg:p-[24px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]"
            style={{ backgroundImage: "url('images/img_group6514.png')" }}
          >
            <Stack className="bg-white_A700 lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius1714 w-[17%]">
              <Img
                src="images/img_image62.png"
                className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[76%]"
                alt="imageSixtyTwo"
              />
            </Stack>
            <Text className="font-bold leading-[normal] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mr-[595px] xl:mr-[680px] 2xl:mr-[765px] 3xl:mr-[918px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[38px] xl:text-[44px] 2xl:text-[50px] 3xl:text-[60px] text-white_A700 w-[34%]">
              Get extra 20% off on Gadgets
            </Text>
          </Column>
          <Row className="font-gilroy justify-between lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[100%]">
            <Text className="font-semibold mt-[3px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
              Deals Of The Day
            </Text>
            <Img
              src="images/img_clock.svg"
              className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] mb-[2px] lg:w-[25px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
              alt="clock"
            />
          </Row>
          <List
            className="font-gilroy lg:gap-[21px] xl:gap-[24px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-4 min-h-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 items-end lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs2 w-[100%]">
              <Stack className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                <Img
                  src="images/img_pngwing1.png"
                  className="absolute lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] right-[0] rounded-radius4 w-[91%]"
                  alt="pngwingOne"
                />
                <Button
                  className="absolute capitalize font-medium left-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center top-[0] w-[26%]"
                  size="sm"
                  variant="FillGreen600"
                >
                  30% OFF
                </Button>
              </Stack>
              <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[91%]">
                <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Amazone
                </Text>
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                  boAt Airdopes 131
                </Text>
                <Row className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                    <span className="text-colors font-gilroy">$</span>
                    <span className="text-colors1 font-gilroy">49.99</span>
                  </Text>
                  <Text className="font-normal line-through lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    $99.99
                  </Text>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-between 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] p-[4px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                      alt="StarOne"
                    />
                    <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-amber_500 w-[auto]">
                      4
                    </Text>
                  </Row>
                </Row>
                <Column className="bg-blue_A701 items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius6 w-[100%]">
                  <Text className="font-semibold mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Go to Store
                  </Text>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-end lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs2 w-[100%]">
              <Stack className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                <Img
                  src="images/img_pngwing1_194X248.png"
                  className="absolute lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] right-[0] rounded-radius4 w-[91%]"
                  alt="pngwingOne One"
                />
                <Button
                  className="absolute capitalize font-medium left-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center top-[0] w-[26%]"
                  size="sm"
                  variant="FillGreen600"
                >
                  30% OFF
                </Button>
              </Stack>
              <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[91%]">
                <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  TataCLiQ
                </Text>
                <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                  HP Envy 13 x360
                </Text>
                <Row className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                    <span className="text-colors font-gilroy">$</span>
                    <span className="text-colors1 font-gilroy">49.99</span>
                  </Text>
                  <Text className="font-normal line-through lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    $99.99
                  </Text>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-between 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] p-[4px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_12X12.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                      alt="StarOne One"
                    />
                    <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-amber_500 w-[auto]">
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                >
                  Go to Store
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-end lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs2 w-[100%]">
              <Stack className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                <Img
                  src="images/img_pngwing1_1.png"
                  className="absolute lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] right-[0] rounded-radius4 w-[91%]"
                  alt="pngwingOne Two"
                />
                <Button
                  className="absolute capitalize font-medium left-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center top-[0] w-[26%]"
                  size="sm"
                  variant="FillGreen600"
                >
                  30% OFF
                </Button>
              </Stack>
              <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[91%]">
                <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  Amazone
                </Text>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                  OnePlus 10R 5G
                </Text>
                <Row className="items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                    <span className="text-colors font-gilroy">$</span>
                    <span className="text-colors1 font-gilroy">49.99</span>
                  </Text>
                  <Text className="font-normal line-through lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    $99.99
                  </Text>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-between 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] p-[4px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_1.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                      alt="StarOne Two"
                    />
                    <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-amber_500 w-[auto]">
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                >
                  Go to Store
                </Button>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-end lg:pr-[18px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius8 shadow-bs2 w-[100%]">
              <Stack className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] w-[100%]">
                <Img
                  src="images/img_pngwing1_2.png"
                  className="absolute lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] right-[0] rounded-radius4 w-[91%]"
                  alt="pngwingOne Three"
                />
                <Button
                  className="absolute capitalize font-medium left-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center top-[0] w-[26%]"
                  size="sm"
                  variant="FillGreen600"
                >
                  30% OFF
                </Button>
              </Stack>
              <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[91%]">
                <Text className="capitalize font-medium lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_400 w-[auto]">
                  TataCLiQ
                </Text>
                <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                  APPLE iPad
                </Text>
                <Row className="items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] w-[100%]">
                  <Text className="font-medium mt-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_901 w-[auto]">
                    <span className="text-colors font-gilroy">$</span>
                    <span className="text-colors1 font-gilroy">49.99</span>
                  </Text>
                  <Text className="font-normal line-through lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    $99.99
                  </Text>
                  <Row className="border border-amber_500 border-solid font-opensans items-center justify-between 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[88px] p-[4px] rounded-radius3 w-[13%]">
                    <Img
                      src="images/img_star1_2.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                      alt="StarOne Three"
                    />
                    <Text className="font-medium my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-amber_500 w-[auto]">
                      4
                    </Text>
                  </Row>
                </Row>
                <Button
                  className="font-semibold lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                  shape="RoundedBorder6"
                >
                  Go to Store
                </Button>
              </Column>
            </Column>
          </List>
        </Column>
        <header className="absolute font-gilroy top-[0] w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] shadow-bs w-[100%]">
            <Img
              src="images/img_group_10.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] w-[12%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[52px] 3xl:ml-[62px] flex lg:ml-[40px] w-[36%] xl:ml-[46px]"
              name="InputField"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[4px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
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
              size="mdSrc"
              variant="srcOutlineBluegray300"
            ></Input>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[50px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Orders
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[1%]"
              alt="arrowdown"
            />
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[45px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Categories
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              More
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] w-[1%]"
              alt="arrowdown One"
            />
            <Img
              src="images/img_cart.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] w-[2%]"
              alt="cart"
            />
          </Row>
        </header>
        <Column className="absolute bg-black_900_b2 font-gilroy w-[100%]">
          <Column className="bg-gray_51 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[22%]">
            <Row className="items-end lg:pr-[49px] xl:pr-[56px] 2xl:pr-[63px] 3xl:pr-[75px] w-[100%]">
              <Img
                src="images/img_81.png"
                className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                alt="EightyOne"
              />
              <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[69%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Ashfak Sayem
                </Text>
                <Text className="font-medium lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]">
                  ashfaksayem@gmail.com
                </Text>
              </Column>
            </Row>
            <Row className="bg-blue_A701 items-center justify-end lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-radius8 w-[100%]">
              <Img
                src="images/img_calendar_20X20.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] my-[3px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="calendar"
              />
              <Text className="font-gilroy font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                Calendar
              </Text>
              <Button
                className="font-inter font-normal lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[104px] 2xl:ml-[118px] 3xl:ml-[141px] lg:ml-[91px] my-[3px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                shape="RoundedBorder6"
                size="sm"
                variant="FillLightblue100"
              >
                2
              </Button>
            </Row>
            <Row className="items-center justify-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[2px] py-[2px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_iconoutline.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mt-[1px] w-[7%]"
                alt="IconOutline"
              />
              <Text className="font-gilroy font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Rewards
              </Text>
              <Button
                className="font-inter font-normal lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[97px] my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                shape="RoundedBorder6"
                size="sm"
                variant="FillRed200"
              >
                2
              </Button>
            </Row>
            <Row className="items-center justify-center lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] p-[2px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_location.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[1px] mt-[1px] w-[7%]"
                alt="location"
              />
              <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mr-[113px] xl:mr-[129px] 2xl:mr-[146px] 3xl:mr-[175px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Address
              </Text>
            </Row>
            <Row className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] p-[2px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_trash.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="trash"
              />
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Payments Methods
              </Text>
            </Row>
            <Row className="justify-end lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pl-[1px] py-[1px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_settings_20X20.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="settings"
              />
              <Text className="font-gilroy font-semibold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Offers
              </Text>
              <Button
                className="font-inter font-normal lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[112px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] my-[1px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                shape="RoundedBorder6"
                size="sm"
                variant="FillGreenA100"
              >
                2
              </Button>
            </Row>
            <Row className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] p-[2px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_user_18X20.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] my-[2px] w-[9%]"
                alt="user"
              />
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Refer a Friend
              </Text>
            </Row>
            <Row className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] p-[2px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_rectangle159.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] my-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="Rectangle159"
              />
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Support
              </Text>
            </Row>
            <Line className="bg-bluegray_100_6c h-[2px] lg:mt-[337px] xl:mt-[386px] 2xl:mt-[434px] 3xl:mt-[521px] rounded-radius1 w-[100%]" />
            <Row className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] p-[2px] rounded-radius8 w-[91%]">
              <Img
                src="images/img_question_1.svg"
                className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                alt="question"
              />
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_700 w-[auto]">
                Colour Scheme
              </Text>
            </Row>
            <Row className="bg-gray_200 items-center lg:mb-[24px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] p-[4px] rounded-radius20 w-[100%]">
              <Button
                className="flex items-center justify-center text-center w-[49%]"
                leftIcon={
                  <Img
                    src="images/img_brightness.svg"
                    className="text-center lg:w-[16px] lg:h-[17px] lg:mr-[7px] xl:w-[18px] xl:h-[19px] xl:mr-[8px] 2xl:w-[21px] 2xl:h-[22px] 2xl:mr-[9px] 3xl:w-[25px] 3xl:h-[26px] 3xl:mr-[10px]"
                    alt="brightness"
                  />
                }
                shape="CircleBorder16"
                size="md"
                variant="OutlineBlack9003f"
              >
                <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  Light
                </div>
              </Button>
              <Row className="items-center justify-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] rounded-radius868 w-[24%]">
                <Img
                  src="images/img_subtractstrok.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                  alt="SubtractStrok"
                />
                <Text className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                  Dark
                </Text>
              </Row>
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default NavigationMenuPage;
