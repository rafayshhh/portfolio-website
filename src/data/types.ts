export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  isPrimary?: boolean;
  /** Hints best frame style in galleries: widescreen captures vs square emblems vs mobile portrait */
  aspect?: "video" | "square" | "portrait";
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface DocumentationSection {
  title: string;
  slug: string;
  content: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface ControlBinding {
  action: string;
  key: string;
  category?: string;
  description: string;
}

export interface CommandEntry {
  command: string;
  description: string;
}

export interface DependencyLink {
  name: string;
  href?: string;
  required: boolean;
  notes?: string;
}

export interface ItemSeo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}
