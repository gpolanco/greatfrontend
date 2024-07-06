import { useState } from "react";
import { Dialog } from "./product-reviews/components/dialog";
import { ProductReview } from "./product-reviews";

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ProductReview />
    </Dialog>
  );
};
