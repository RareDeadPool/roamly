import { TRAVEL_STYLES } from "../lib/constants";

export const TRAVEL_STYLES_DATA = TRAVEL_STYLES.map((style) => ({
  ...style,
  imageUrl: `https://images.unsplash.com/photo-${
    style.id === "backpacking"
      ? "1501555088652-021faa106b9b"
      : style.id === "luxury"
      ? "1566073771259-6a8506099945"
      : style.id === "adventure"
      ? "1533240332313-0db49b439ad3"
      : "1488646953014-85cb44e25828"
  }?q=80&w=400&auto=format&fit=crop`,
}));
