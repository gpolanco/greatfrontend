const reviews = [
  {
    rating: 5,
    content: "I've worn it everywhere, super durable and fashionable.",
    created_at: "2024-05-26",
    user: {
      name: "Lilia McKnight",
      user_id: "lilia-mcknight",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/lilia-mcknight.jpg",
    },
  },
  {
    rating: 4,
    content:
      "I love the comfortable fit and stylish look of this hoodie. Perfect for chilly days out!",
    created_at: "2024-03-11",
    user: {
      name: "Natali Craig",
      user_id: "natali-craig",
      avatar_url: null,
    },
  },
  {
    rating: 5,
    content:
      "Absolutely a must-have for anyone who enjoys outdoor activities. Keeps me warm and looks great!",
    created_at: "2024-03-10",
    user: {
      name: "Kimberly Mastrangelo",
      user_id: "kimberly-mastrangelo",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/kimberly-mastrangelo.jpg",
    },
  },
  {
    rating: 3,
    content:
      "Good hoodie but the color was a bit different from what I expected. Still, it's very practical.",
    created_at: "2024-03-09",
    user: {
      name: "Lorri Warf",
      user_id: "lorri-warf",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/lorri-warf.jpg",
    },
  },
  {
    rating: 5,
    content: null,
    created_at: "2024-03-08",
    user: {
      name: "Darren Holmes",
      user_id: "darren-holmes",
      avatar_url: null,
    },
  },
  {
    rating: 4,
    content:
      "Stylish and functional, this hoodie has become my go-to for chilly beach nights.",
    created_at: "2024-03-07",
    user: {
      name: "Justine Simard",
      user_id: "justine-simard",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/justine-simard.jpg",
    },
  },
  {
    rating: 5,
    content:
      "Fantastic hoodie, offers great insulation and doesn’t sacrifice style.",
    created_at: "2024-03-06",
    user: {
      name: "Emilio Vega",
      user_id: "emilio-vega",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/emilio-vega.jpg",
    },
  },
  {
    rating: 4,
    content:
      "Really like the soft material and the lightweight feel, though it snags easily.",
    created_at: "2024-03-05",
    user: {
      name: "Chadwick Stanton",
      user_id: "chadwick-stanton",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/chadwick-stanton.jpg",
    },
  },
  {
    rating: 3,
    content:
      "It's okay, serves its purpose but I wish the material was a bit softer.",
    created_at: "2024-03-04",
    user: {
      name: "Mariam Whitaker",
      user_id: "mariam-whitaker",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/mariam-whitaker.jpg",
    },
  },
  {
    rating: 5,
    content:
      "This is the best hoodie I've purchased in a while – perfect for chilly days!",
    created_at: "2024-03-03",
    user: {
      name: "Mila Rich",
      user_id: "mila-rich",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/mila-rich.jpg",
    },
  },
  {
    rating: 4,
    content:
      "Great quality, though a bit pricey. Still, I find it worth the cost for its durability.",
    created_at: "2024-03-02",
    user: {
      name: "Harris Cullen",
      user_id: "harris-cullen",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/harris-cullen.jpg",
    },
  },
  {
    rating: 4,
    content:
      "Chic and practical, exactly what I needed for my winter wardrobe.",
    created_at: "2024-03-02",
    user: {
      name: "Helen Norton",
      user_id: "helen-norton",
      avatar_url:
        "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/user-avatars/helen-norton.jpg",
    },
  },
];

export const mockReviewResponse = {
  aggregate: {
    counts: [
      {
        count: 0,
        rating: 1,
      },
      {
        count: 4,
        rating: 2,
      },
      {
        count: 12,
        rating: 3,
      },
      {
        count: 22,
        rating: 4,
      },
      {
        count: 24,
        rating: 5,
      },
    ],
    rating: 4.1,
    total: 62,
  },
  data: reviews,
  pagination: {
    has_more: true,
    page: 1,
    per_page: 12,
    total: 62,
  },
};
