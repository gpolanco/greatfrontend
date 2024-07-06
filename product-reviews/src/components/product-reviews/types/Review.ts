export interface Review {
  product_id: string;
  user_id: string;
  rating: number;
  content: string | null;
  created_at: string;
  avatar?: string;
}
