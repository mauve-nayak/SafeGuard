import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const protectionCardVariants = cva(
  "rounded-lg border shadow-card transition-all duration-300 hover:shadow-protection hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default: "bg-gradient-card border-border",
        shield: "bg-shield-light/50 border-shield/20 hover:border-shield/40",
        safety: "bg-safety-light/50 border-safety/20 hover:border-safety/40",
        warning: "bg-warning-light/50 border-warning/30 hover:border-warning/50",
        success: "bg-success-light/50 border-success/20 hover:border-success/40",
      },
      size: {
        default: "p-6",
        sm: "p-4",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ProtectionCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof protectionCardVariants> {}

const ProtectionCard = React.forwardRef<HTMLDivElement, ProtectionCardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(protectionCardVariants({ variant, size, className }))}
      {...props}
    />
  )
);
ProtectionCard.displayName = "ProtectionCard";

const ProtectionCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 mb-4", className)}
    {...props}
  />
));
ProtectionCardHeader.displayName = "ProtectionCardHeader";

const ProtectionCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
ProtectionCardTitle.displayName = "ProtectionCardTitle";

const ProtectionCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
));
ProtectionCardDescription.displayName = "ProtectionCardDescription";

const ProtectionCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
ProtectionCardContent.displayName = "ProtectionCardContent";

const ProtectionCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));
ProtectionCardFooter.displayName = "ProtectionCardFooter";

export {
  ProtectionCard,
  ProtectionCardHeader,
  ProtectionCardFooter,
  ProtectionCardTitle,
  ProtectionCardDescription,
  ProtectionCardContent,
};