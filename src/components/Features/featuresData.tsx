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
    title: "Core Drill",
    paragraph:
      "Core drilling is a specialized technique used to create precise, circular holes in hard materials like concrete, masonry, and asphalt.",
    children: (
      <div className="mt-5">
        <List text="Geotechnical and environmental investigations" />
        <List text="Utility and HVAC ducting installment" />
        <List text="Structural modifications and testing" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Saw Cutting",
    paragraph:
      "Saw Cutting is a specialized technique used to create straight precise cuts for small to large rectangular openings in hard materials like concrete, masonry, and asphalt.",
    children: (
      <div className="mt-5">
        <List text="Geotechnical and environmental investigations" />
        <List text="Utility and HVAC ducting installment" />
      </div>
    ),
  },
];
export default featuresData;
