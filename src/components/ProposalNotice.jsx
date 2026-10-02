import { useState } from "react";

const KEY = "cdce-proposal-notice-dismissed";

/* Marks this deployment as a redesign preview rather than the official CDCE
   site. Paired with public/_headers, which keeps it out of search results. */
export default function ProposalNotice() {
  const [hidden, setHidden] = useState(() => {
    // sessionStorage throws in private windows and with site data blocked.
    try {
      return sessionStorage.getItem(KEY) === "1";
    } catch {
      return false;
    }
  });

  if (hidden) return null;

  const dismiss = () => {
    setHidden(true);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* non-fatal — the notice simply returns on the next page load */
    }
  };

  return (
    <div className="proposal-notice" role="note">
      <p>
        <strong>Design proposal.</strong> A redesign preview, not the official site — the live CDCE website is{" "}
        <a href="https://cdce.pdn.ac.lk/">cdce.pdn.ac.lk</a>.
      </p>
      <button type="button" onClick={dismiss} aria-label="Dismiss this notice">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}
