import { Review } from "../../types/Review";

interface ReviewCountType {
  count: number;
  rating: number;
}

export interface ReviewAggregateType {
  counts: ReviewCountType[];
  rating: number;
  total: number;
}

interface ReviewPaginationType {
  has_more: boolean;
  page: number;
  per_page: number;
  total: number;
}

export interface ReviewResponseType {
  aggregate: ReviewAggregateType;
  data: Review[];
  pagination: ReviewPaginationType;
}
