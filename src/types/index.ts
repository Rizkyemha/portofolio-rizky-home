export interface ContentMetadata {
	type: "projects" | "blogs";
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	excerpt: string;
	tags: string[];
}

export interface Project extends ContentMetadata {
	url?: string;
	repo?: string;
	contentHtml?: string;
}

export interface Blog extends ContentMetadata {
	contentHtml?: string;
}
