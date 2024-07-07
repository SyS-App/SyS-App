// Blog 
import { BlogPost } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "blogs");

const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory);
}

const getPostBySlug = (slug: string) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as BlogPost;
}

const getAllPosts = (): BlogPost[] => {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

const getLatestPost = () => {
    const posts = getAllPosts();
    return posts[0];
}

export { getPostSlugs, getPostBySlug, getAllPosts, getLatestPost };