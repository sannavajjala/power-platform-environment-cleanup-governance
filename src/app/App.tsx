import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Bell,
  Database,
  Trash2,
  Shield,
} from "lucide-react";

// ─── Arrow connectors ────────────────────────────────────────────────────────

function ArrowDown({ label, color = "default" }: { label?: string; color?: "default" | "amber" | "violet" }) {
  const lineClass =
    color === "amber" ? "bg-amber-500/35" : color === "violet" ? "bg-violet-500/35" : "bg-slate-600/45";
  const arrowClass =
    color === "amber"
      ? "border-t-amber-500/35"
      : color === "violet"
      ? "border-t-violet-500/35"
      : "border-t-slate-600/45";
  return (
    <div className="flex flex-col items-center my-1.5 gap-0.5">
      <div className={`w-px h-5 ${lineClass}`} />
      {label && (
        <span className="text-[9px] font-mono text-muted-foreground px-2 py-0.5 rounded border border-border/25 bg-card/60 my-0.5 whitespace-nowrap tracking-wide">
          {label}
        </span>
      )}
      <div
        className={`w-0 h-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent ${arrowClass}`}
      />
    </div>
  );
}

// ─── Phase header ─────────────────────────────────────────────────────────────

const PHASE_COLOR: Record<string, string> = {
  blue: "text-blue-400 border-blue-400/30",
  purple: "text-purple-400 border-purple-400/30",
  amber: "text-amber-400 border-amber-400/30",
  violet: "text-violet-400 border-violet-400/30",
  teal: "text-teal-400 border-teal-400/30",
};

function PhaseHeader({ phase, title, color }: { phase: string; title: string; color: string }) {
  const c = PHASE_COLOR[color] ?? PHASE_COLOR.blue;
  return (
    <div className="flex items-center gap-3 my-6">
      <div className={`h-px flex-1 border-t border-dashed opacity-30 ${c.split(" ")[1]}`} />
      <div
        className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[9px] font-mono font-bold tracking-widest ${c}`}
      >
        <span className="opacity-50">PHASE {phase}</span>
        <span className="opacity-30">·</span>
        <span>{title}</span>
      </div>
      <div className={`h-px flex-1 border-t border-dashed opacity-30 ${c.split(" ")[1]}`} />
    </div>
  );
}

// ─── Source node (tool input) ─────────────────────────────────────────────────

function SourceNode({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border border-slate-600/35 bg-slate-800/25 rounded-lg px-4 py-3 flex items-start gap-2.5">
      <Database size={13} className="text-slate-400 mt-0.5 flex-shrink-0" />
      <div>
        <div className="text-xs font-semibold text-slate-200">{title}</div>
        <div className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">{subtitle}</div>
      </div>
    </div>
  );
}

// ─── Decision diamond ─────────────────────────────────────────────────────────

function DecisionNode({ title }: { title: string }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md border border-purple-500/45 bg-purple-950/25 rounded-lg px-5 py-3.5 text-center">
        <div className="text-[9px] font-mono text-purple-400/60 mb-1 tracking-widest">DECISION</div>
        <div className="text-xs font-semibold text-purple-100">{title}</div>
      </div>
    </div>
  );
}

// ─── Branch arrows spreading to 3 columns ────────────────────────────────────

function BranchArrows() {
  return (
    <div className="relative h-10 my-1">
      {/* vertical from decision center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-purple-500/35" />
      {/* horizontal bridge */}
      <div className="absolute top-4 left-[16.67%] right-[16.67%] h-px bg-slate-600/40" />
      {/* left drop (KEEP) */}
      <div className="absolute top-4 bottom-0 left-[16.67%] w-px bg-emerald-500/40" />
      <div
        className="absolute bottom-0 left-[16.67%] -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-emerald-500/40"
      />
      {/* center drop (REVIEW) */}
      <div className="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-px bg-amber-500/40" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-amber-500/40"
      />
      {/* right drop (RETIRE) */}
      <div className="absolute top-4 bottom-0 right-[16.67%] w-px bg-red-500/40" />
      <div
        className="absolute bottom-0 right-[16.67%] translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-500/40"
      />
    </div>
  );
}

// ─── Classification branch node ───────────────────────────────────────────────

const CLASS_STYLE: Record<string, { border: string; bg: string; text: string; headerBg: string; icon: string }> = {
  keep: {
    border: "border-emerald-500/45",
    bg: "bg-emerald-950/20",
    text: "text-emerald-100",
    headerBg: "bg-emerald-600/80 text-white",
    icon: "text-emerald-400",
  },
  review: {
    border: "border-amber-500/45",
    bg: "bg-amber-950/20",
    text: "text-amber-100",
    headerBg: "bg-amber-600/80 text-white",
    icon: "text-amber-400",
  },
  retire: {
    border: "border-red-500/45",
    bg: "bg-red-950/20",
    text: "text-red-100",
    headerBg: "bg-red-600/80 text-white",
    icon: "text-red-400",
  },
};

function ClassNode({
  type,
  label,
  title,
  items,
  expanded,
  onToggle,
}: {
  type: "keep" | "review" | "retire";
  label: string;
  title: string;
  items: string[];
  expanded: boolean;
  onToggle: () => void;
}) {
  const s = CLASS_STYLE[type];
  return (
    <div className={`border rounded-lg overflow-hidden ${s.border} ${s.bg}`}>
      <button
        onClick={onToggle}
        className={`w-full px-3.5 py-2 flex items-center justify-between text-[10px] font-mono font-bold tracking-widest ${s.headerBg} cursor-pointer`}
      >
        <span>{label}</span>
        {expanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
      </button>
      <div className="px-3.5 py-3">
        <div className={`text-[11px] font-semibold ${s.text} mb-2`}>{title}</div>
        {expanded && (
          <ul className="space-y-1.5">
            {items.map((item, i) => (
              <li key={i} className={`flex items-start gap-1.5 text-[10px] ${s.text} opacity-75`}>
                <span className={`${s.icon} mt-0.5 opacity-50 flex-shrink-0`}>›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// ─── Merge arrow from center REVIEW column ────────────────────────────────────

function ReviewMergeArrow() {
  return (
    <div className="flex my-1">
      <div className="flex-1" />
      <div className="flex-1 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="w-px h-5 bg-amber-500/40" />
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[7px] border-l-transparent border-r-transparent border-t-amber-500/40" />
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
}

// ─── Notification timeline step ───────────────────────────────────────────────

const NOTIFY_STYLE: Record<string, { border: string; bg: string; text: string; pill: string }> = {
  sky: { border: "border-sky-500/35", bg: "bg-sky-950/25", text: "text-sky-100", pill: "bg-sky-500/20 text-sky-300" },
  amber: { border: "border-amber-500/35", bg: "bg-amber-950/25", text: "text-amber-100", pill: "bg-amber-500/20 text-amber-300" },
  red: { border: "border-red-500/35", bg: "bg-red-950/25", text: "text-red-100", pill: "bg-red-500/20 text-red-300" },
};

function NotifyStep({
  day,
  color,
  title,
  message,
  icon,
}: {
  day: string;
  color: "sky" | "amber" | "red";
  title: string;
  message: string;
  icon: React.ReactNode;
}) {
  const s = NOTIFY_STYLE[color];
  return (
    <div className={`flex-1 border rounded-lg px-3.5 py-3 ${s.border} ${s.bg}`}>
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold mb-2 ${s.pill}`}>
        {icon}
        <span>{day}</span>
      </div>
      <div className={`text-[11px] font-semibold ${s.text} mb-1.5 leading-snug`}>{title}</div>
      <p className={`text-[10px] leading-relaxed ${s.text} opacity-55`}>{message}</p>
    </div>
  );
}

// ─── Process / checklist node ─────────────────────────────────────────────────

const NODE_STYLE: Record<string, { border: string; bg: string; text: string; badge: string; accent: string }> = {
  process: {
    border: "border-blue-500/45",
    bg: "bg-blue-950/25",
    text: "text-blue-100",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25",
    accent: "text-blue-400",
  },
  checklist: {
    border: "border-violet-500/45",
    bg: "bg-violet-950/25",
    text: "text-violet-100",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    accent: "text-violet-400",
  },
  approval: {
    border: "border-teal-500/45",
    bg: "bg-teal-950/25",
    text: "text-teal-100",
    badge: "bg-teal-500/15 text-teal-300 border-teal-500/25",
    accent: "text-teal-400",
  },
};

function ProcessNode({
  type,
  title,
  badge,
  items,
  expandable = false,
  expanded = true,
  onToggle,
}: {
  type: keyof typeof NODE_STYLE;
  title: string;
  badge?: string;
  items?: string[];
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const s = NODE_STYLE[type];
  return (
    <div className={`border rounded-lg px-5 py-4 relative ${s.border} ${s.bg} ${s.text}`}>
      {badge && (
        <span
          className={`absolute -top-2.5 left-4 px-2 py-0.5 rounded text-[9px] font-mono font-semibold border ${s.badge}`}
        >
          {badge}
        </span>
      )}
      <div
        className={`flex items-start justify-between gap-3 ${expandable ? "cursor-pointer select-none" : ""}`}
        onClick={expandable ? onToggle : undefined}
      >
        <div className="text-sm font-semibold leading-snug">{title}</div>
        {expandable && (
          <div className={`${s.accent} opacity-55 flex-shrink-0 mt-0.5`}>
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        )}
      </div>
      {expanded && items && items.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs opacity-75">
              <span className={`mt-0.5 ${s.accent} opacity-55 flex-shrink-0`}>›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Horizontal connector between notification steps ─────────────────────────

function HConnector() {
  return (
    <div className="flex items-center flex-shrink-0 mx-1.5">
      <div className="h-px w-5 bg-slate-600/45" />
      <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-t-transparent border-b-transparent border-l-slate-600/45" />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function App() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    exportList: true,
    keepList: true,
    reviewList: true,
    retireList: true,
    checklist: true,
  });
  const toggle = (k: string) => setOpen((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-border/30 bg-background/85 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-primary/15 border border-primary/25 flex items-center justify-center">
              <Shield size={13} className="text-primary" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-widest text-foreground/80 font-mono leading-none">
                POWER PLATFORM GOVERNANCE
              </div>
              <div className="text-[10px] text-muted-foreground font-mono mt-0.5">
                Environment Cleanup Process · Flowchart
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            {["KEEP", "REVIEW", "RETIRE"].map((label, i) => {
              const colors = [
                "border-emerald-500/30 text-emerald-400/70",
                "border-amber-500/30 text-amber-400/70",
                "border-red-500/30 text-red-400/70",
              ];
              return (
                <span
                  key={label}
                  className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${colors[i]}`}
                >
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </header>

      {/* ── Flow canvas ─────────────────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">

        {/* START pill */}
        <div className="flex justify-center mb-1">
          <div className="px-5 py-1.5 rounded-full bg-primary/12 border border-primary/25 text-primary/75 text-[10px] font-mono font-bold tracking-[0.15em]">
            START CLEANUP PROCESS
          </div>
        </div>

        <ArrowDown />

        {/* ── PHASE 1: INVENTORY ──────────────────────────────────────────── */}
        <PhaseHeader phase="01" title="INVENTORY ENVIRONMENTS" color="blue" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
          <SourceNode
            title="Power Platform Admin Center"
            subtitle="Primary console for environment admin, DLP policies, and capacity"
          />
          <SourceNode
            title="CoE Starter Kit — Admin View"
            subtitle="Enhanced governance telemetry, app/flow inventory, orphan detection"
          />
        </div>

        <ArrowDown label="export data" />

        <ProcessNode
          type="process"
          title="Export Environment List"
          badge="DATA COLLECTION"
          expandable
          expanded={open.exportList}
          onToggle={() => toggle("exportList")}
          items={[
            "Environment name",
            "Type: Developer / Sandbox / Production / Dataverse for Teams / Default",
            "Owner identity and contact email",
            "Created date",
            "Last activity date",
            "App count, flow count, Copilot agent count, active connections",
            "Dataverse table count and data storage consumed",
          ]}
        />

        <ArrowDown />

        {/* ── PHASE 2: CLASSIFY ───────────────────────────────────────────── */}
        <PhaseHeader phase="02" title="CLASSIFY ENVIRONMENTS" color="purple" />

        <DecisionNode title="Evaluate each environment against classification criteria" />

        <BranchArrows />

        <div className="grid grid-cols-3 gap-3">
          <ClassNode
            type="keep"
            label="KEEP"
            title="Retain as-is"
            expanded={open.keepList}
            onToggle={() => toggle("keepList")}
            items={[
              "Dev / QA / Prod environments",
              "Managed department environments",
              "Production support environments",
            ]}
          />
          <ClassNode
            type="review"
            label="REVIEW"
            title="Needs evaluation"
            expanded={open.reviewList}
            onToggle={() => toggle("reviewList")}
            items={[
              "Sandbox environments",
              "Trial environments",
              "Personal developer environments",
              "Orphaned owner environments",
            ]}
          />
          <ClassNode
            type="retire"
            label="RETIRE"
            title="Removal candidate"
            expanded={open.retireList}
            onToggle={() => toggle("retireList")}
            items={[
              "No identified owner",
              "No apps / flows / agents",
              "No recent activity detected",
              "No business justification",
            ]}
          />
        </div>

        {/* Center arrow (REVIEW → notification) */}
        <ReviewMergeArrow />

        {/* ── PHASE 3: NOTIFICATION MODEL ─────────────────────────────────── */}
        <PhaseHeader phase="03" title="3-STEP NOTIFICATION MODEL" color="amber" />

        <p className="text-[10px] text-muted-foreground text-center mb-4 font-mono -mt-2 tracking-wide">
          Applies to REVIEW and RETIRE paths — engage the owner before any destructive action
        </p>

        <div className="flex items-stretch gap-0">
          <NotifyStep
            day="Day 0"
            color="sky"
            title="Notify Owner"
            message='"Environment inactive for 90 days. Please confirm your business need within 14 days or this environment will be reviewed for retirement."'
            icon={<Bell size={9} />}
          />
          <HConnector />
          <NotifyStep
            day="Day 14"
            color="amber"
            title="Reminder + Escalate"
            message="Second notice sent to owner. Escalate to direct manager and team owner if no response received within the window."
            icon={<AlertTriangle size={9} />}
          />
          <HConnector />
          <NotifyStep
            day="Day 30"
            color="red"
            title="Decision Point"
            message="No response received. Proceed to disable, archive, or enter the deletion workflow. No further waiting."
            icon={<XCircle size={9} />}
          />
        </div>

        <ArrowDown color="amber" label="proceed to deletion workflow" />

        {/* ── PHASE 4: PRE-DELETION CHECKLIST ─────────────────────────────── */}
        <PhaseHeader phase="04" title="PRE-DELETION CHECKLIST" color="violet" />

        <ProcessNode
          type="checklist"
          title="Complete all checks before proceeding with deletion"
          badge="MANDATORY"
          expandable
          expanded={open.checklist}
          onToggle={() => toggle("checklist")}
          items={[
            "Export solutions if any apps, flows, or agents exist in the environment",
            "Review cloud flows, desktop flows, Copilot agents, and connection references",
            "Inspect Dataverse tables and data — create backups for any data of record",
            "Confirm no service account or automated integration dependencies",
            "Document the deletion decision and business justification",
            "Record the approval in the SharePoint governance list or IT ticket",
          ]}
        />

        <ArrowDown color="violet" />

        <ProcessNode
          type="approval"
          title="Obtain Formal Approval"
          badge="GOVERNANCE GATE"
          items={[
            "Environment owner or responsible manager has reviewed and signed off",
            "IT governance admin has confirmed all checklist items are complete",
            "Approval entry logged in SharePoint or ticketing system with timestamp",
          ]}
        />

        <ArrowDown />

        {/* DELETE terminal */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs border-2 border-red-600/55 bg-red-900/20 rounded-xl px-6 py-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Trash2 size={15} className="text-red-400" />
              <span className="text-red-100 font-bold text-sm tracking-wider font-mono">DELETE ENVIRONMENT</span>
            </div>
            <p className="text-red-300/50 text-[10px] font-mono leading-relaxed">
              Only after all checklist items are verified and approval is documented
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center my-3">
          <div className="w-px h-5 bg-slate-600/30" />
        </div>

        {/* COMPLETE pill */}
        <div className="flex justify-center mb-10">
          <div className="px-5 py-1.5 rounded-full bg-emerald-500/12 border border-emerald-500/25 text-emerald-400/70 text-[10px] font-mono font-bold tracking-[0.15em]">
            PROCESS COMPLETE
          </div>
        </div>

        {/* ── Special considerations ───────────────────────────────────────── */}
        <div className="border border-border/30 rounded-xl p-5 bg-card/20">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">
            <Shield size={10} />
            Special Considerations by Environment Type
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-emerald-500/22 rounded-lg p-4 bg-emerald-950/12">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={13} className="text-emerald-400" />
                <span className="text-[10px] font-mono font-bold text-emerald-300 tracking-wider">LOW RISK</span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-200 mb-1.5">
                Developer / Trial / Old Sandbox
              </div>
              <p className="text-[10px] text-emerald-100/55 leading-relaxed">
                Deletion is generally acceptable after completing the pre-deletion validation. Standard approval flow
                applies.
              </p>
            </div>
            <div className="border border-red-500/22 rounded-lg p-4 bg-red-950/12">
              <div className="flex items-center gap-2 mb-2">
                <XCircle size={13} className="text-red-400" />
                <span className="text-[10px] font-mono font-bold text-red-300 tracking-wider">HIGH RISK — CAUTION</span>
              </div>
              <div className="text-[11px] font-semibold text-red-200 mb-1.5">
                Production / Department Environments
              </div>
              <p className="text-[10px] text-red-100/55 leading-relaxed">
                Do not delete solely because usage appears low. Escalate to business stakeholders and obtain explicit
                executive sign-off.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
