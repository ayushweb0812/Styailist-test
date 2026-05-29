import { useState, lazy, Suspense } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const LazyLeadModalContent = lazy(() => import("./LeadModalContent"));

export function LeadModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // We only want to trigger the lazy load when the dialog is opened (or hovered, but let's stick to open for simplicity)
  // Radix Dialog handles its own rendering of content when open
  
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen && !shouldRender) {
      setShouldRender(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {shouldRender && (
        <Suspense fallback={null}>
          <LazyLeadModalContent />
        </Suspense>
      )}
    </Dialog>
  );
}
