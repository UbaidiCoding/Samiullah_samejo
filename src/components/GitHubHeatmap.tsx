import React, { useState, useMemo } from "react";
import { Github, Calendar, FlameKindling, Info, Award, Zap, Sparkles } from "lucide-react";

// Generate realistic simulated GitHub contribution data for Samiullah Samejo (@UbaidiCoding)
// 53 weeks * 7 days = 371 contributions cell data points
interface HeatmapCell {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4; // 0: None, 1: Low, 2: Medium, 3: High, 4: Advanced
}

const MONTHS = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];
const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function GitHubHeatmap() {
  const [hoveredCell, setHoveredCell] = useState<HeatmapCell | null>(null);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<number | null>(null);

  // Generate deterministic contribution counts matching an expert developer lifecycle
  const heatmapData = useMemo(() => {
    const data: HeatmapCell[] = [];
    const baseDate = new Date(2025, 5, 1); // June 1st, 2025
    
    // 371 days count
    for (let i = 0; i < 371; i++) {
      const currentDate = new Date(baseDate);
      currentDate.setDate(baseDate.getDate() + i);
      
      const dateString = currentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      // Days of week index
      const dayOfWeek = currentDate.getDay();
      
      // Determine pseudo-random but highly realistic commitment levels
      // Samiullah is extremely active on weekdays, slight rest on Sundays
      let count = 0;
      const seed = Math.sin(i * 0.15) * Math.cos(i * 0.05);
      
      if (dayOfWeek !== 0) { // Weekdays
        if (seed > 0.6) count = Math.floor(6 + Math.random() * 5); // Peak commits
        else if (seed > 0.2) count = Math.floor(3 + Math.random() * 3);
        else if (seed > -0.3) count = Math.floor(1 + Math.random() * 2);
        else count = 0;
      } else { // Weekend
        if (seed > 0.7) count = Math.floor(2 + Math.random() * 3);
        else count = 0;
      }

      // Specific mock peak releases for Ubaidi IT Solutions
      if (i % 45 === 0) count = 12; 
      if (i % 80 === 0) count = 15;

      // Map commit count to contribution levels
      let level: 0 | 1 | 2 | 3 | 4 = 0;
      if (count === 0) level = 0;
      else if (count <= 2) level = 1;
      else if (count <= 4) level = 2;
      else if (count <= 7) level = 3;
      else level = 4;

      data.push({
        date: dateString,
        count,
        level,
      });
    }
    return data;
  }, []);

  // Compute stats on the fly
  const stats = useMemo(() => {
    const totalCommits = heatmapData.reduce((acc, curr) => acc + curr.count, 0);
    const activeDays = heatmapData.filter(d => d.count > 0).length;
    const activePercent = ((activeDays / heatmapData.length) * 100).toFixed(1);
    
    // Calculate simulated streaks
    let longestStreak = 0;
    let currentStreak = 0;
    let tempStreak = 0;

    heatmapData.forEach((day) => {
      if (day.count > 0) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else {
        tempStreak = 0;
      }
    });

    // Current streak ending towards the end of the array (mocked at last 14 days)
    currentStreak = 14;

    return {
      totalCommits,
      activeDays,
      activePercent,
      longestStreak,
      currentStreak,
    };
  }, [heatmapData]);

  // Handle cell colors matching the Elegant Dark accent paths
  const getCellColorClass = (level: number) => {
    switch (level) {
      case 0:
        return "bg-white/[0.04] border-white/[0.02]";
      case 1:
        return "bg-cyan-950/40 border-cyan-900/40 text-cyan-300";
      case 2:
        return "bg-cyan-800/60 border-cyan-700/60 text-cyan-200";
      case 3:
        return "bg-cyan-500/80 border-cyan-400/50 text-black";
      case 4:
        return "bg-gradient-to-br from-cyan-400 to-purple-600 border-purple-400/50 text-white shadow-[0_0_10px_rgba(6,182,212,0.3)]";
      default:
        return "bg-white/[0.03]";
    }
  };

  return (
    <div id="github-heatmap-widget" className="glass-morph p-6 md:p-8 rounded-3xl border border-white/10 relative transition-all duration-300">
      
      {/* Dynamic Glow Auras */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[250px] h-[100px] bg-purple-500/10 rounded-full blur-[60px] pointer-events-none"></div>

      {/* Widget Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
            <Github className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5 font-display">
              Open-Source Activity Engine
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono tracking-wider">
                @UbaidiCoding
              </span>
            </h4>
            <p className="text-[11px] text-white/50">
              Interactive commits, open source directives, and localized template distributions.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-white/40">Highlight Tier:</span>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((lvl) => (
              <button
                key={lvl}
                id={`heatmap-filter-level-${lvl}`}
                onClick={() => setSelectedLevelFilter(selectedLevelFilter === lvl ? null : lvl)}
                className={`w-5 h-5 rounded-md flex items-center justify-center transition-all border ${getCellColorClass(lvl)} ${
                  selectedLevelFilter === lvl 
                    ? "ring-2 ring-purple-500 scale-110" 
                    : "hover:scale-105"
                }`}
                title={`Level ${lvl} contributions`}
              >
                {selectedLevelFilter === lvl && <span className="text-[8px]">✓</span>}
              </button>
            ))}
          </div>
          {selectedLevelFilter !== null && (
            <button
              id="clear-heatmap-filter"
              onClick={() => setSelectedLevelFilter(null)}
              className="text-[9px] text-purple-400 hover:text-white underline ml-1 cursor-pointer"
            >
              clear
            </button>
          )}
        </div>
      </div>

      {/* Summary Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            {stats.totalCommits}
          </span>
          <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">Total Commits</p>
        </div>
        
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
          <div className="flex items-center justify-center gap-1">
            <FlameKindling className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
            <span className="text-2xl font-black text-white">
              {stats.longestStreak} Days
            </span>
          </div>
          <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">Longest Streak</p>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
          <span className="text-2xl font-black text-cyan-400">
            {stats.currentStreak} Days
          </span>
          <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">Current Streak</p>
        </div>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
          <span className="text-2xl font-black text-white">
            {stats.activePercent}%
          </span>
          <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mt-1">Annual Consistency</p>
        </div>
      </div>

      {/* Heatmap Grid Wrapper */}
      <div className="relative overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10">
        <div className="min-w-[680px] flex flex-col gap-2">
          
          {/* Month Labels Row */}
          <div className="flex text-[10px] text-white/40 font-mono pl-8 mb-1">
            {MONTHS.map((mon, index) => (
              <div 
                key={mon} 
                style={{ width: `${100 / 12}%` }}
                className="text-center font-bold"
              >
                {mon}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            
            {/* Weekday indicators column */}
            <div className="flex flex-col justify-between text-[9px] text-white/30 font-mono py-1 w-6 shrink-0 h-[105px]">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Matrix of days */}
            <div className="flex-1 grid grid-flow-col grid-rows-7 gap-1 h-[105px]">
              {heatmapData.map((cell, idx) => {
                const isFilteredOut = selectedLevelFilter !== null && cell.level !== selectedLevelFilter;
                
                return (
                  <div
                    key={idx}
                    id={`heatmap-cell-${idx}`}
                    onMouseEnter={() => setHoveredCell(cell)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-3.5 h-3.5 rounded-sm border transition-all duration-200 cursor-pointer ${
                      isFilteredOut 
                        ? "bg-white/[0.01] border-transparent opacity-10" 
                        : getCellColorClass(cell.level)
                    } ${hoveredCell?.date === cell.date ? "ring-1 ring-white/50 scale-125 z-10" : ""}`}
                  />
                );
              })}
            </div>

          </div>

          {/* Footer Grid Row */}
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 mt-3 pt-3 border-t border-white/5 pl-8">
            <div className="flex items-center gap-1.5 ">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hover cells to audit daily deployments, releases, and codebase expansions.</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <div key={lvl} className={`w-2.5 h-2.5 rounded-sm border ${getCellColorClass(lvl)}`} />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredCell && (
        <div className="absolute bottom-4 left-6 bg-slate-950/95 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-left shadow-2xl z-20 animate-fade-in">
          <p className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Activity Log</p>
          <p className="text-xs font-bold text-white mt-0.5">
            {hoveredCell.count === 0 ? "No commits" : `${hoveredCell.count} Contributions`}
          </p>
          <p className="text-[10px] text-cyan-400 font-mono mt-0.2">{hoveredCell.date}</p>
        </div>
      )}
    </div>
  );
}
