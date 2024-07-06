// // import { Metadata } from "next";
// // import { notFound } from "next/navigation";
// // import { getAllPosts, getPostBySlug } from "@/lib/api";
// // import { CMS_NAME } from "@/lib/constants";
// // import markdownToHtml from "@/lib/markdownToHtml";
// // import Alert from "@/app/_components/alert";
// // import Container from "@/app/_components/container";
// // import Header from "@/app/_components/header";
// // import { PostBody } from "@/app/_components/post-body";
// // import { PostHeader } from "@/app/_components/post-header";

// import MarkdownCSS from "@/css/markdown.module.css";
// import { BaseErrorComponent, BaseErrorComponentDescription, BaseErrorComponentTitle } from "@/components/base/errors";
// import { BaseBlogComponent, BaseBlogComponentTitle } from "@/components/blog/components";
// import { getAllPosts, getPostBySlug } from "@/lib/blogApi";
// import markdownToHtml from "@/lib/markdownToHtml";
// import { Metadata } from "next/types";
// import { notFound } from "next/navigation";

// type Params = {
//     params: {
//         slug: string;
//     };
// };

// const BlogPost = async ({ params }: Params) => {
//     // Get slug from Params
//     const blogpost = getPostBySlug(params.slug);

//     // Check the blog using slug if exists
//     if (!blogpost) {
//         return notFound()
//     }

//     // 

//     const content = await markdownToHtml(blogpost.content || "");

//     return (
//         <BaseBlogComponent>
//             <BaseBlogComponentTitle>
//                 {blogpost.title}
//             </BaseBlogComponentTitle>
//             <div className={MarkdownCSS.markdown} dangerouslySetInnerHTML={{ __html: content }} />
//         </BaseBlogComponent>
//     )
// }

// // export default async function Post({ params }: Params) {
// //     const post = getPostBySlug(params.slug);

// //     if (!post) {
// //         return notFound();
// //     }

// //     const content = await markdownToHtml(post.content || "");

// //     return (
// //         <main>
// //             <Alert preview={post.preview} />
// //             <Container>
// //                 <Header />
// //                 <article className="mb-32">
// //                     <PostHeader
// //                         title={post.title}
// //                         coverImage={post.coverImage}
// //                         date={post.date}
// //                         author={post.author}
// //                     />
// //                     <PostBody content={content} />
// //                 </article>
// //             </Container>
// //         </main>
// //     );
// // }

// const generateMetadata = ({ params }: Params): Metadata => {
//     const post = getPostBySlug(params.slug);

//     if (!post) {
//         return {

//         }
//     }

//     const { title, authors } = post;

//     return {
//         title,
//         openGraph: {
//             title
//         },
//     };
// }

// const generateStaticParams = async () => {
//     const posts = getAllPosts();

//     return posts.map((post) => ({
//         slug: post.slug,
//     }));
// }


// export { generateMetadata, generateStaticParams };
// export default BlogPost;