import * as React from "react";
const currentDate = new Date();
const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

import { cn } from "./lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {}

const Input = React.forwardRef<HTMLSelectElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const p1="Does the workspace portrayed in the image adhere to the generally accepted standards of cleanliness and organization?"
    var p2 = `Today is ${formattedDate}. Is the object in the image within a valid date? Please provide a short response.`;
    const p3="Provide an alternative title for the image. Please limit reponse to within 20 words."
    const p4="Is the document legibile according to common standards? Please answer with Yes or No."

    return (
      <select
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      <option value={""} disabled>
              --What to Check?--
      </option>
      <option value={p1}>1. check desk (Line Clearance)</option>
      <option value={p2}>2. check parts labels (UDI and Expiration)</option>
      <option value={p3}>3. check work (Common Defects)</option>
      <option value={p4}>4. check WO (Document Comliance)</option>
    </select>
    );
  },
);
Input.displayName = "Input";

export { Input };
