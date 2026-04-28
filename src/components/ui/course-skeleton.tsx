"use client";

export function CourseSkeleton() {
  return (
    <div className="h-[400px] rounded-[2rem] bg-slate-100 dark:bg-slate-800 animate-pulse overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
        <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded-full" />
        <div className="h-8 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-lg" />
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-lg" />
        <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-lg" />
      </div>
    </div>
  );
}
