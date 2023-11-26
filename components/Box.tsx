import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={twMerge(
        `bg-neutral-800 rounded-lg h-fit w-full p-2`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
