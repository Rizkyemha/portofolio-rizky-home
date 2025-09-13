import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Project, Blog } from "@/src/types";

const contentPathMap = {
	projects: path.resolve(process.cwd(), "src/content/projects"),
	blogs: path.resolve(process.cwd(), "src/content/blogs"),
};

export function getProjects() {
	const fileNames = fs.readdirSync(contentPathMap.projects);
	const projects = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(contentPathMap.projects, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const matterResult = matter(fileContents);

		return {
			slug,
			...matterResult.data,
		};
	});
	return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
	const fullPath = path.join(contentPathMap.projects, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const { data, content } = matter(fileContents);

	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent.toString();

	return {
		type: "project",
		slug,
		contentHtml,
		title: data.title,
		date: data.date,
		coverImage: data.coverImage,
		excerpt: data.excerpt,
		tags: data.tags,
		url: data.url,
		repo: data.repo,
	};
}

export function getBlogs() {
	const fileNames = fs.readdirSync(contentPathMap.blogs);
	const blogs = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(contentPathMap.blogs, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const matterResult = matter(fileContents);

		return {
			slug,
			...matterResult.data,
		};
	});
	return blogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
	const fullPath = path.join(contentPathMap.blogs, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const { data, content } = matter(fileContents);

	const processedContent = await remark().use(html).process(content);
	const contentHtml = processedContent.toString();

	return {
		type: "blog",
		slug,
		contentHtml,
		title: data.title,
		date: data.date,
		coverImage: data.coverImage,
		excerpt: data.excerpt,
		tags: data.tags,
	};
}
