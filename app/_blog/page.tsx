// import { BaseBlogComponent, BaseBlogComponentTitle } from "@/components/blog/components";
// import { getLatestPost } from "@/lib/blogApi";
// import markdownToHtml from "@/lib/markdownToHtml";
// import { BlogPost } from "@/types/blog";
// import { Metadata } from "next";

// const metadata: Metadata = {
//     title: "Blogs"
// }

// const page = async () => {
//     // Get the latest blog post
//     const post: BlogPost = await getLatestPost();
//     // Convert markdown content in to HTML
//     const content = await markdownToHtml(post.content || "");


//     return (
//         <BaseBlogComponent>
//             <BaseBlogComponentTitle>
//                 {post.title}
//             </BaseBlogComponentTitle>
            
//         </BaseBlogComponent>
//     )
// }

// export { metadata };
// export default page;