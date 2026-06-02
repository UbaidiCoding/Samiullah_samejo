import React, { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowLeft, Search, Bookmark, Tag, Share2 } from "lucide-react";
import { BlogPost } from "../types";
import { BLOGS } from "../data/portfolioData";

export default function BlogSection() {
  const [posts] = useState<BlogPost[]>(BLOGS);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ["All", "Programming", "Cybersecurity", "AI Tools", "Freelancing"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  const handleShare = (post: BlogPost) => {
    const dummyUrl = `${window.location.origin}/blog/${post.slug}`;
    navigator.clipboard.writeText(dummyUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Safe client-side markdown segment formatter. Translates simple blocks like headings, lists and code snippets.
  const formatMarkdown = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // 1. Headers ##
      if (line.startsWith("## ")) {
        return (
          <h3 key={idx} className="text-lg font-bold text-white mt-6 mb-3 font-display border-b border-purple-500/10 pb-1.5">
            {line.replace("## ", "")}
          </h3>
        );
      }
      
      // 2. Bold text inside codes e.g. **text**
      let renderedLine: React.ReactNode = line;

      // 3. Mini lists - 
      if (line.startsWith("- ")) {
        return (
          <li key={idx} className="ml-5 list-disc text-xs text-slate-300 leading-relaxed mb-1 font-mono">
            {line.replace("- ", "")}
          </li>
        );
      }

      // 4. Specific inline code segments
      if (line.includes("`") && !line.startsWith("```")) {
        const parts = line.split("`");
        renderedLine = parts.map((part, i) => 
          i % 2 === 1 ? (
            <code key={i} className="bg-slate-900 border border-slate-800 text-purple-400 px-1 py-0.5 rounded text-[11px] font-mono">
              {part}
            </code>
          ) : part
        );
      }

      // 5. Code block indicators ```
      if (line.startsWith("```")) {
        if (line === "```" || line.includes("```")) {
          return null; // Ignore simple boundaries, we can block wrap manually or let them format cleanly
        }
      }

      // Raw formatting
      if (line.trim() === "") {
        return <div key={idx} className="h-4" />;
      }

      return (
        <p key={idx} className="text-xs text-slate-300 leading-relaxed mb-4">
          {renderedLine}
        </p>
      );
    });
  };

  if (activePost) {
    return (
      <div id="blog-reader-view" className="bg-black/40 rounded-3xl p-6 md:p-8 border border-slate-800/80 max-w-4xl mx-auto shadow-2xl relative animate-fade-in">
        {/* Back button */}
        <button
          id="back-to-blogs-list"
          onClick={() => setActivePost(null)}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white mb-6 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </button>

        {/* Post Metadata Header */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-500 mb-3">
          <span className="px-2.5 py-1 rounded bg-purple-950/40 text-purple-400 border border-purple-900/40 uppercase">
            {activePost.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {activePost.publishDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {activePost.readTime}
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-display mb-6 leading-tight">
          {activePost.title}
        </h2>

        {/* Share & Actions Toolbar */}
        <div className="flex items-center gap-4 py-3 border-t border-b border-slate-900/80 mb-8 justify-between text-xs font-mono text-slate-400">
          <span className="italic text-slate-500">
            Authored by Samiullah Samejo
          </span>

          <button
            id="share-article-btn"
            onClick={() => handleShare(activePost)}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            {copiedLink ? "Link Copied!" : "Share Article"}
          </button>
        </div>

        {/* Main interactive body */}
        <div className="prose prose-invert max-w-none text-slate-300">
          {formatMarkdown(activePost.content)}
        </div>

        {/* Footer info box */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-950/60 border border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Join SamiUbaidi's Tech Guild</p>
              <p className="text-[10px] text-slate-400">Learn cybersecurity and advanced web dev daily.</p>
            </div>
          </div>
          <a
            href="https://github.com/UbaidiCoding"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold shadow-[0_4px_15px_rgba(147,51,234,0.3)] transition-all"
          >
            Follow on GitHub
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="blog-catalogue-showcase" className="relative">
      {/* Blog query toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-1 bg-black/50 border border-slate-800 p-1 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`blog-filter-${cat.replace(/\s/g, "-").toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-purple-950 border border-purple-500/30 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative max-w-md w-full md:w-72">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            id="blog-search-input"
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-black/50 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 font-mono transition-all"
          />
        </div>
      </div>

      {/* Grid of articles */}
      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center glass-morph border border-slate-800 rounded-2xl">
          <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-400">No blog articles match search parameters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer flex flex-col justify-between p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.06)] transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800/60 uppercase">
                    {post.category}
                  </span>

                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-600" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors tracking-tight line-clamp-2 min-h-[40px] font-display mb-2.5">
                  {post.title}
                </h4>

                {/* Excerpt */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              {/* Tags & footer */}
              <div className="pt-3 border-t border-slate-900/60 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3 text-slate-600" />
                  <span className="text-[9px] font-mono text-slate-500 lowercase truncate max-w-[120px]">
                    {post.tags.join(", ")}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1">
                  Read Article
                  <BookOpen className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
