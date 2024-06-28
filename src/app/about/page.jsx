"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "about",
      label: "About",
      content: (
        <div className="flex-col items-center justify-around">
          HMRS medical alliance is a company, established in 2013 with a
          commitment of introducing latest international and quality products in
          india, at an affordable price backed by unmatched services
          <div className="flex m-4 justify-center ">
            <div className="flex-col lg:flex lg:justify-between m-2 flex-grow">
              <div className="flex-col p-2 shadow-xl mt-2 mb-2">
                <div className="text-primary text-lg">Vision</div>
                <div>
                  To emerge as a leader in the delivery of high quality products
                  at an affordable price by offering wide range of products
                  backed by a dedicated team of application specialist & service
                  engineers ensuring best in class services
                </div>
              </div>
              <div className="flex-col p-2 shadow-xl mt-2 mb-2">
                <div className="text-primary text-lg">Mission</div>
                <div>
                  <ul>
                    <li>
                       To provide best quality international products &
                      services with clear focus on customer first approach and
                      hold firmly on to the quality & ethical values of the
                      noble profession.
                    </li>
                    <li>
                       To be seen as a trustworthy and reliable source of
                      highest quality equipments aiming to win the trust of
                      customers.
                    </li>
                    <li>
                       Provide assistance to the underprivileged, especially
                      towards their education, as a part of corporate social
                      responsibility in accomplising compassionate mission.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-col p-2 shadow-xl mt-2 mb-2">
                <div className="text-primary text-lg">Values</div>
                <div>
                  Quality, trust, compassion and ethics: the pillars of our
                  profession and values we strive to foster in our team and
                  organization
                </div>
              </div>
            </div>
            <img
              className="flex-shrink max-h-['10vh'] max-w-['10vw']"
              src="https://www.focusmobilitymed.com/images/vision.jpg"
            ></img>
          </div>
        </div>
      ),
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex  w-full p-4 ml-3 mr-3 mt-10 flex-col">
      <div className="text-center text-lg sm:text-2xl lg:text-4xl mb-5  italic font">
        <span className="font-bold text-red-500">H</span>ealthcare,{" "}
        <span className="font-bold text-red-500">M</span>edical &{" "}
        <span className="font-bold text-red-500">R</span>esearch{" "}
        <span className="font-bold text-red-500">S</span>olutions
      </div>
      <Tabs
        size="lg"
        color="primary"
        aria-label="Dynamic tabs"
        isVertical
        items={tabs}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={item.label}
            className="flex justify-center items-start w-full"
          >
            <Card className="w-full">
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
