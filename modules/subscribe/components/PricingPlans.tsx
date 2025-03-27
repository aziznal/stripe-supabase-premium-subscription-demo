import { Button } from "@/lib/client/components/ui/button";
import { cn } from "@/lib/client/utils";
import { LucideCheck, LucideGem, LucideX } from "lucide-react";

export const PricingPlans: React.FC<{ className?: string }> = (props) => {
  return (
    <div
      className={cn(props.className, "flex flex-col lg:flex-row items-center justify-center gap-12")}
    >
      <Plan
        title="Basic"
        price="2.99"
        onSelect={() => {}}
        points={
          <PlanPoints>
            <PlanPoint isIncluded>makes sense for you</PlanPoint>
            <PlanPoint isIncluded>makes sense for us</PlanPoint>
            <PlanPoint>Is the actual most popular</PlanPoint>
            <PlanPoint>What more do you want</PlanPoint>
            <PlanPoint>Security updates</PlanPoint>
            <PlanPoint>SSO or something</PlanPoint>
          </PlanPoints>
        }
        classNames={{
          base: "border-blue-500",
        }}
      />

      <Plan
        title="Standard"
        price="5.99"
        onSelect={() => {}}
        isMostPopular
        points={
          <PlanPoints>
            <PlanPoint isIncluded>makes sense for you</PlanPoint>
            <PlanPoint isIncluded>makes sense for us</PlanPoint>
            <PlanPoint isIncluded>Is the actual most popular</PlanPoint>
            <PlanPoint isIncluded>What more do you want</PlanPoint>
            <PlanPoint>Security updates</PlanPoint>
            <PlanPoint>SSO or something</PlanPoint>
          </PlanPoints>
        }
        classNames={{
          base: "lg:-mt-12 border-lime-400",
        }}
      />

      <Plan
        title="Premium"
        price="9.99"
        onSelect={() => {}}
        points={
          <PlanPoints>
            <PlanPoint isIncluded>makes sense for you</PlanPoint>
            <PlanPoint isIncluded>makes sense for us</PlanPoint>
            <PlanPoint isIncluded>Is the actual most popular</PlanPoint>
            <PlanPoint isIncluded>What more do you want</PlanPoint>
            <PlanPoint isIncluded>Security updates</PlanPoint>
            <PlanPoint isIncluded>SSO or something</PlanPoint>
          </PlanPoints>
        }
        classNames={{
          base: "border-rose-600",
        }}
      />
    </div>
  );
};

const Plan: React.FC<{
  title: string;
  points: React.ReactNode;
  isMostPopular?: boolean;
  price: string;

  classNames?: {
    base?: string;
    title?: string;
    price?: string;
  };
  onSelect: () => void;
}> = (props) => {
  return (
    <div
      className={cn(
        props.classNames?.base,
        "flex flex-col items-center justify-center rounded-lg border-2 p-6 shadow",
      )}
    >
      <h2
        className={cn(
          "mb-3 text-center text-3xl font-medium",
          props.classNames?.title,
        )}
      >
        {props.title}
      </h2>

      <h3 className={cn("mb-4 flex flex-col text-center font-light")}>
        <span className={cn("text-3xl", props.classNames?.price)}>
          ${props.price}
        </span>

        <span>per month *</span>
      </h3>

      <div className="mb-6">{props.points}</div>

      <Button
        size="lg"
        className="bg-gradient-to-r from-indigo-500 to-pink-500 font-black !text-white"
      >
        SELECT <LucideGem />
      </Button>
    </div>
  );
};

const PlanPoints: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = (props) => {
  return (
    <div
      className={cn("flex flex-col gap-3 text-lg font-medium", props.className)}
    >
      {props.children}
    </div>
  );
};

const PlanPoint: React.FC<{
  className?: string;
  children: React.ReactNode;

  /** whether to display a check vs a cross icon and change the text opacity accordingly */
  isIncluded?: boolean;
}> = (props) => {
  return (
    <div className={cn(props.className, "flex gap-2 text-sm")}>
      <div className="shrink-0 [&_*]:shrink-0">
        {props.isIncluded && <LucideCheck className="text-emerald-500" size="20" />}
        {!props.isIncluded && <LucideX className="text-neutral-500" size="20" />}
      </div>

      {props.children}
    </div>
  );
};
