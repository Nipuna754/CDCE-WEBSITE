import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIndex } from "../data/content";

function score(label, query) {
  const text = label.toLowerCase();
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  let total = 0;
  for (const word of words) {
    const at = text.indexOf(word);
    if (at === -1) return -1;
    if (at === 0) total += 40;
    else if (text[at - 1] === " " || text[at - 1] === "(" || text[at - 1] === "-") total += 25;
    else total += 10;
  }
  return total - label.length * 0.05;
}

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return searchIndex.slice(0, 8);
    return searchIndex
      .map((item) => ({ item, s: score(item.label, q) }))
      .filter((r) => r.s >= 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.item);
  }, [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const row = listRef.current?.children[activeIndex];
    row?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const go = (item) => {
    if (!item) return;
    navigate(item.to);
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div className="search-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="search-panel" role="dialog" aria-modal="true" aria-label="Site search">
        <div className="search-input-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M20 20l-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search pages, programmes, notices…"
            aria-label="Search"
            autoComplete="off"
          />
          <kbd>Esc</kbd>
        </div>
        <ul className="search-results" ref={listRef} role="listbox">
          {results.length === 0 && <li className="search-empty">No matches for "{query}"</li>}
          {results.map((item, i) => (
            <li key={item.to + item.label} role="option" aria-selected={i === activeIndex}>
              <button
                type="button"
                className={i === activeIndex ? "active" : ""}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => go(item)}
              >
                <span className="search-group">{item.group}</span>
                <span className="search-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
