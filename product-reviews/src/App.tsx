import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import { Dialog } from "./product-reviews/components/dialog";
import { ProductReview } from "./product-reviews";

export const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Analytics />
      <ProductReview />
    </Dialog>
  );
};
