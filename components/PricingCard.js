import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function PricingCard({ title, items, price, buttonText, headerColor, headerVariant, textColor }) {
  return (
    <Card color="transparent" shadow={false} variant="gradient" className="w-full max-w-[20rem] p-15 my-5">
      <CardHeader
        floated={false}
        shadow={true}
        color={headerColor}
        variant={headerVariant}
        className="m-0 mb-8 rounded-3xl border border-white/10 pb-8 text-center"
      >
        <Typography variant="h3" color={textColor} className="font-bold pt-3">
          {title}
        </Typography>
        <Typography
          variant="h1"
          color={textColor}
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="">$</span>
          {price} 
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-left">{item}</Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <a href="/contact-us">
        <Button
          size="lg"
          color={headerColor}
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        ><span className={textColor}>
          {buttonText}
          </span>
        </Button>
        </a>
      </CardFooter>
    </Card>
  );
}