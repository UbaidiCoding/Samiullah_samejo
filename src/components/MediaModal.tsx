import React from "react";
import { X, ExternalLink, Newspaper, Calendar } from "lucide-react";
import { MEDIA_FEATURES } from "../data/portfolioData";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MediaModal({ isOpen, onClose }: MediaModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="clean-card w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[var(--border-color)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5 text-[var(--accent)]" />
            <h2 id="media-modal-title" className="text-lg font-bold text-[var(--text-primary)]">
              Media &amp; Press Features
            </h2>
          </div>
          <button
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--bg-surface-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Close media dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-4">
          {MEDIA_FEATURES.map((item) => (
            <article
              key={item.id}
              className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] space-y-2"
            >
              <div className="flex items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--accent)]">{item.outlet}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline min-h-[36px]"
                >
                  <span>View feature coverage on {item.outlet}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
