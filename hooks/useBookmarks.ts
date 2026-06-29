"use client";

import { useState } from "react";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((bookmarkId) => bookmarkId !== id) : [...prev, id]
    );
  };

  return {
    bookmarks,
    isBookmarked,
    toggleBookmark,
  };
}
export default useBookmarks;
