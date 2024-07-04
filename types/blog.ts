// Blog types

import { ReactNode } from "react";

interface Author {
    name: string,
    picture?: string
}

interface BlogPost {
    slug: string,
    title: string,
    date: string,
    authors: Author[],
    excerpt: string,
    content: string
}

interface BaseBlogComponentProps {
    children: ReactNode,
}


export type { BlogPost, Author, BaseBlogComponentProps };