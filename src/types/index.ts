export interface ContentMetadata {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	excerpt: string;
	tags: string[];
}

export interface Project extends ContentMetadata {
	type: "project";
	url?: string;
	repo?: string;
	contentHtml?: string;
}

export interface Blog extends ContentMetadata {
	type: "blog";
	contentHtml?: string;
}
