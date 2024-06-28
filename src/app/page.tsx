"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

function Home() {
  return (
    <main className="min-h-screen p-4">
      <section className="flex flex-col lg:flex-row items-center p-5">
        <div className="left-box w-[100%] lg:w-3/5 m-1 lg:ml-20 animate-[fadeInLeft_0.7s_ease-in-out]">
          <p className="italic text-sm md:text-lg ">
            Your one stop location for
          </p>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl xl:text-7xl text-[#ec552d] italic">
            Healthcare Management and Research Solutions
          </h1>

          <div className="flex items-center mt-2 lg:mt-5 max-h-3 sm:max-h-8 overflow-hidden">
            <p className="font-serif text-sm sm:text-lg lg:text-2xl xl:text-4xl">
              Reliable Solutions for
            </p>
            <ul className="ml-2 w-fit relative bottom-1 sm:bottom-0 sm:pb-0 md:mt-1 xl:mt-0 font-serif text-sm sm:text-lg lg:text-xl xl:text-3xl text-blue-800 animate-text-slide self-start">
              <li>Medical Experts</li>
              <li>Research visionaries</li>
              <li>Laboratory setups</li>
              <li>Clinicians</li>
              <li aria-hidden="true">Medical Experts</li>
            </ul>
          </div>
        </div>
        <div className="right-box sm:w-1/2 lg:w-2/5 m-1 flex-grow-1 relative">
          <img
            className="object-cover"
            src="homeImg1.png"
            height={"inherit"}
            width={"inherit"}
          />
        </div>
      </section>

      <section className="focus-areas flex-col justify-center p-12 ">
        <h1 className="text-center font-serif text-xl lg:text-2xl xl:text-4xl text-[#ec552d] italic">
          {" "}
        </h1>
        <div className="gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                What to watch
              </p>
              <h4 className="text-white font-medium text-large">
                Stream the Acme event
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
              <h4 className="text-white font-medium text-large">
                Contribute to the planet
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-7"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Your day your way
              </p>
              <h4 className="text-white/90 font-medium text-xl">
                Your checklist for better sleep
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">
                    Get a good night's sleep.
                  </p>
                </div>
              </div>
              <Button radius="full" size="sm">
                Get App
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default Home;
