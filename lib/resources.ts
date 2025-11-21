export interface ResourceDownload {
  id: string;
  title: string;
  description: string;
  badge?: string;
  downloadUrl: string;
  coverImage: string;
}

export const resourceDownloads: ResourceDownload[] = [
  {
    id: "innovation-playbook",
    title: "ValeoFx Innovation Playbook 2025",
    description:
      "A 38-page guide covering our discovery framework, delivery rituals, and tooling stack for high-performing product teams.",
    badge: "New",
    downloadUrl: "/contact?resource=innovation-playbook",
    coverImage:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "edge-performance-blueprint",
    title: "Edge Performance Blueprint",
    description:
      "Step-by-step technical checklist for shipping sub-second Next.js experiences with observability baked in.",
    downloadUrl: "/contact?resource=edge-performance-blueprint",
    coverImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
];
