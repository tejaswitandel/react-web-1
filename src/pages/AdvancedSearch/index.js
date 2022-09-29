import React from "react";

import { Column, Row, Img, Text, Input, Stack, List, Button } from "components";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CloseSVG } from "../../assets/images/index.js";

const AdvancedSearchPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_52 font-gilroy items-center mx-[auto] w-[100%]">
        <Row className="justify-evenly w-[98%]">
          <aside className="w-[24%]">
            <Column className="">
              <Column className="bg-gray_51 lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[91%]">
                <Img
                  src="images/img_group10392_14.svg"
                  className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] w-[64%]"
                  alt="Group10392"
                />
                <Accordion
                  preExpanded={[0]}
                  className="lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]"
                >
                  {" "}
                  {[...Array(7)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <Row className="justify-between w-[100%]">
                                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_701 w-[auto]">
                                    Categories
                                  </Text>
                                  {expanded && (
                                    <Img
                                      src="images/img_arrowup_black_900.svg"
                                      className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] mt-[3px] w-[4%]"
                                      alt="arrowup"
                                    />
                                  )}
                                  {!expanded && (
                                    <Img
                                      src="images/img_arrowdown_bluegray_700.svg"
                                      className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[4%]"
                                      alt="arrowdown"
                                    />
                                  )}
                                </Row>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full">
                          <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[49%]">
                            <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                              Kids Footwear
                            </Text>
                            <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                              Womens Footwear
                            </Text>
                            <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_701 w-[auto]">
                              Mens Footwear
                            </Text>
                          </Column>
                        </AccordionItemPanel>
                      </Column>
                    </AccordionItem>
                  ))}
                </Accordion>
                <Row className="font-opensans lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[384px] xl:mt-[439px] 2xl:mt-[494px] 3xl:mt-[593px] w-[25%]">
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
          <Column className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[76%]">
            <header className="w-[100%]">
              <Row className="items-center w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                  wrapClassName="flex w-[46%]"
                  name="Group10270"
                  placeholder="Search"
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer mr-[0] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#bac1ce"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer mr-[0] lg:w-[12px] lg:h-[13px] lg:ml-[27px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                  shape="srcRoundedBorder6"
                  size="mdSrc"
                  variant="srcOutlineBluegray300"
                ></Input>
                <Stack className="bg-white_A700 border border-bluegray_100 border-solid font-opensans lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[346px] xl:ml-[396px] 2xl:ml-[446px] 3xl:ml-[535px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]">
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
            <List
              className="lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-4 min-h-[auto] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[95%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius12 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-end ml-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius61 w-[99%]"
                  style={{ backgroundImage: "url('images/img_group914.png')" }}
                >
                  <Button
                    className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:mb-[109px] xl:mb-[125px] 2xl:mb-[141px] 3xl:mb-[169px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="icbOutline"
                  >
                    <Img
                      src="images/img_favorite_45X45.svg"
                      className="flex items-center justify-center"
                      alt="favorite"
                    />
                  </Button>
                </Column>
                <Text className="font-normal font-urbanist lg:leading-[26px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[40px] ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-bluegray_800 w-[79%]">
                  Nike sports running shoes for men
                </Text>
                <Text className="font-lato font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-green_601 w-[auto]">
                  <span className="text-colors4 font-urbanist font-semibold">
                    $10
                  </span>
                  <span className="text-colors5"> </span>
                  <span className="text-colors6 font-urbanist font-medium line-through lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
                    $13
                  </span>
                </Text>
              </Column>
              <Column className="bg-white_A700 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius12 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-end ml-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius61 w-[99%]"
                  style={{ backgroundImage: "url('images/img_group915.png')" }}
                >
                  <Button
                    className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:mb-[109px] xl:mb-[125px] 2xl:mb-[141px] 3xl:mb-[169px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="icbOutline"
                  >
                    <Img
                      src="images/img_favorite_45X45.svg"
                      className="flex items-center justify-center"
                      alt="favorite One"
                    />
                  </Button>
                </Column>
                <Text className="font-normal font-urbanist lg:leading-[26px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[40px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-bluegray_800 w-[99%]">
                  Nike sneakers shoes for men
                </Text>
                <Text className="font-lato font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-green_601 w-[auto]">
                  <span className="text-colors4 font-urbanist font-semibold">
                    $10
                  </span>
                  <span className="text-colors5"> </span>
                  <span className="text-colors6 font-urbanist font-medium line-through lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
                    $13
                  </span>
                </Text>
              </Column>
              <Column className="bg-white_A700 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius12 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-end ml-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius61 w-[99%]"
                  style={{ backgroundImage: "url('images/img_group916.png')" }}
                >
                  <Button
                    className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:mb-[109px] xl:mb-[125px] 2xl:mb-[141px] 3xl:mb-[169px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="icbOutline"
                  >
                    <Img
                      src="images/img_favorite_45X45.svg"
                      className="flex items-center justify-center"
                      alt="favorite Two"
                    />
                  </Button>
                </Column>
                <Text className="font-normal font-urbanist lg:leading-[26px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[40px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-bluegray_800 w-[99%]">
                  Nike sneakers shoes for men
                </Text>
                <Text className="font-lato font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-green_601 w-[auto]">
                  <span className="text-colors4 font-urbanist font-semibold">
                    $10
                  </span>
                  <span className="text-colors5"> </span>
                  <span className="text-colors6 font-urbanist font-medium line-through lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
                    $13
                  </span>
                </Text>
              </Column>
              <Column className="bg-white_A700 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] rounded-radius12 w-[100%]">
                <Column
                  className="bg-cover bg-repeat items-end ml-[1px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius61 w-[99%]"
                  style={{ backgroundImage: "url('images/img_group917.png')" }}
                >
                  <Button
                    className="flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:mb-[109px] xl:mb-[125px] 2xl:mb-[141px] 3xl:mb-[169px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="icbRoundedBorder6"
                    size="mdIcn"
                    variant="icbOutline"
                  >
                    <Img
                      src="images/img_favorite_45X45.svg"
                      className="flex items-center justify-center"
                      alt="favorite Three"
                    />
                  </Button>
                </Column>
                <Text className="font-normal font-urbanist lg:leading-[26px] xl:leading-[29px] 2xl:leading-[33px] 3xl:leading-[40px] ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-bluegray_800 w-[79%]">
                  Nike sports running shoes for men
                </Text>
                <Text className="font-lato font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-green_601 w-[auto]">
                  <span className="text-colors4 font-urbanist font-semibold">
                    $10
                  </span>
                  <span className="text-colors5"> </span>
                  <span className="text-colors6 font-urbanist font-medium line-through lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
                    $13
                  </span>
                </Text>
              </Column>
            </List>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AdvancedSearchPage;
