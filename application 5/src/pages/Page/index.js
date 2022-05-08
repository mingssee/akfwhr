import React from "react";

import { Column } from "components/Column";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";

const Page = () => {
  return (
    <>
      <Column className="bg-gray_100 font-notosans items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-start justify-start lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
          <Text className="bg-white_A700 border-black_900 border-bw05 border-solid font-normal leading-lh lg:mx-[41px] xl:mx-[47px] 2xl:mx-[53px] mx-[56px] 3xl:mx-[64px] not-italic p-[0] text-black_900 text-center lg:text-fs16 xl:text-fs18 2xl:text-fs20 text-fs22 3xl:text-fs25 w-[13%]">{`(로고/나중에 완성)`}</Text>
          <Column className="xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]">
            <Line className="bg-black_900 h-[1px] w-[100%]" />
          </Column>
        </Column>
        <Stack className="font-notosanskr lg:h-[275px] xl:h-[314px] 2xl:h-[353px] h-[370px] 3xl:h-[424px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] mt-[57px] 3xl:mt-[65px] mx-[auto] w-[93%]">
          <Stack className="absolute lg:h-[275px] xl:h-[314px] 2xl:h-[353px] h-[370px] 3xl:h-[424px] inset-[0] w-[100%]">
            <Line className="absolute bg-black_900 lg:h-[275px] xl:h-[314px] 2xl:h-[353px] h-[370px] 3xl:h-[424px] inset-x-[50%] inset-y-[0] rotate-[90deg] w-[0.5px]" />
            <Column className="absolute bg-white_A700_75 border-black_900 border-bw05 border-solid inset-[0] rounded-radius15 shadow-bs w-[100%]">
              <Column className="w-[100%]">
                <Column className="w-[100%]">
                  <Row className="lg:gap-[444px] xl:gap-[508px] 2xl:gap-[571px] gap-[600px] 3xl:gap-[686px] grid grid-cols-2 items-center justify-between lg:px-[222px] xl:px-[254px] 2xl:px-[285px] px-[300px] 3xl:px-[343px] w-[100%]">
                    <Text className="font-normal leading-lh not-italic text-black_900 text-center lg:text-fs11 xl:text-fs12 2xl:text-fs14 text-fs15 3xl:text-fs17 w-[100%]">{`첫글자`}</Text>
                    <Text className="font-normal leading-lh not-italic text-black_900 text-center lg:text-fs11 xl:text-fs12 2xl:text-fs14 text-fs15 3xl:text-fs17 w-[100%]">{`말족`}</Text>
                  </Row>
                  <Row className="font-notosans items-start justify-start lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] mt-[20px] 3xl:mt-[22px] w-[100%]">
                    <Text className="font-normal leading-lh lg:mb-[24px] xl:mb-[27px] 2xl:mb-[31px] mb-[33px] 3xl:mb-[37px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] ml-[24px] 3xl:ml-[27px] not-italic text-black_900 lg:text-fs17 xl:text-fs20 2xl:text-fs22 text-fs24 3xl:text-fs27 text-left w-[7%]">
                      {
                        <>
                          {`emotion`}
                          <br />
                          {`behavior`}
                          <br />
                          {`drive`}
                          <br />
                          {`memory`}
                        </>
                      }
                    </Text>
                    <Image
                      src="img_group7.svg"
                      className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] h-[48px] 3xl:h-[55px] lg:ml-[413px] xl:ml-[472px] 2xl:ml-[531px] ml-[558px] 3xl:ml-[638px] 2xl:mt-[111px] mt-[117px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[99px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] w-[48px] 3xl:w-[54px]"
                      alt="Group7"
                    />
                    <Text className="font-normal leading-lh 3xl:mb-[113px] lg:mb-[73px] xl:mb-[83px] 2xl:mb-[94px] mb-[99px] lg:mr-[287px] xl:mr-[328px] 2xl:mr-[369px] mr-[388px] 3xl:mr-[443px] not-italic text-black_900 lg:text-fs17 xl:text-fs20 2xl:text-fs22 text-fs24 3xl:text-fs27 text-left w-[21%]">
                      {
                        <>
                          {`“이모” “비”랑 “드라이브” 간거`}
                          <br />
                          {`“기억”나요?`}
                        </>
                      }
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="items-end lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] mt-[81px] 3xl:mt-[92px] w-[100%]">
                <Image
                  src="img_.png"
                  className="lg:h-[36px] xl:h-[41px] 2xl:h-[46px] h-[48px] 3xl:h-[55px] xl:mx-[10px] 2xl:mx-[11px] mx-[12px] 3xl:mx-[13px] lg:mx-[8px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] w-[48px] 3xl:w-[54px]"
                  alt=""
                />
              </Column>
            </Column>
          </Stack>
          <Line className="absolute bg-black_900 h-[1px] inset-x-[0] top-[13%] w-[100%]" />
        </Stack>
        <Stack className="bg-white_A700 border border-black_900 border-solid lg:h-[54px] xl:h-[61px] 2xl:h-[69px] h-[72px] 3xl:h-[83px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[19px] mb-[20px] 3xl:mb-[22px] lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] mt-[60px] 3xl:mt-[68px] mx-[auto] rounded-radius50 lg:w-[53px] xl:w-[61px] 2xl:w-[68px] w-[72px] 3xl:w-[82px]">
          <Image
            src="img__1.png"
            className="absolute lg:h-[36px] xl:h-[41px] 2xl:h-[46px] h-[48px] 3xl:h-[55px] inset-[0] justify-center m-[auto] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] w-[48px] 3xl:w-[54px]"
            alt=""
          />
        </Stack>
      </Column>
    </>
  );
};

export default Page;
