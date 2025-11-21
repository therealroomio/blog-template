export interface MetricHighlight {
  label: string;
  value: string;
  context: string;
  icon?: string;
}

export const performanceHighlights: MetricHighlight[] = [
  {
    label: "Average Lighthouse Score",
    value: "96",
    context: "Across launched client projects (Performance pillar).",
    icon: "sparkles",
  },
  {
    label: "Core Web Vitals Pass Rate",
    value: "93%",
    context: "URLs passing CWV assessment within 28 days of launch.",
    icon: "gauge",
  },
  {
    label: "Conversion Lift",
    value: "+47%",
    context: "Median uplift for projects with CRO engagement.",
    icon: "trending-up",
  },
  {
    label: "Projects Delivered On-Time",
    value: "100%",
    context: "Twelve-month rolling delivery performance.",
    icon: "clock",
  },
  {
    label: "Client NPS",
    value: "72",
    context: "Net Promoter Score following launch retrospectives.",
    icon: "star",
  },
  {
    label: "Repeat Engagements",
    value: "68%",
    context: "Clients booking phase-two work within six months.",
    icon: "repeat",
  },
];
