import { Feature } from "@/types/feature";
import { checkIcon } from "../Hero";

const List = ({ text }) => (
  <p className="mt-3 flex items-center text-lg font-medium text-white">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Core Drilling",
    paragraph: "Applications include:",
    children: (
      <div className="mt-5">
        <List text="Geotechnical and Environmental Site Investigations" />
        <List text="Utility and HVAC Ducting Installment" />
        <List text="Structural Testing and Modifications" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Saw Cutting",
    paragraph: "Generally used for:",
    children: (
      <div className="mt-5">
        <List text="Flat Sawing for trenches and rectangular openings" />
        <List text="Wall Sawing for structural and cosmetic modifications" />
        <List text="Utility installment and repairs" />
      </div>
    ),
  },
];
export default featuresData;
