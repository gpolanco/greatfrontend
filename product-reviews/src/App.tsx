import { useState } from "react";
import { Dialog } from "./components/dialog";
import { ProductReview } from "./components/product-reviews";
import { ReviewProvider } from "./components/product-reviews/content/ReviewContext";

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ReviewProvider>
        <ProductReview />
      </ReviewProvider>
    </Dialog>
  );
};
