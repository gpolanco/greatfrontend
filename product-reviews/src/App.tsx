import { useState } from "react";
import { ReviewProvider } from "./product-reviews/content/ReviewContext";
import { Dialog } from "./product-reviews/components/dialog";
import { ProductReview } from "./product-reviews";

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ReviewProvider>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ProductReview />
      </Dialog>
    </ReviewProvider>
  );
};
