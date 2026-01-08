import { getBlogById, getBlogs, getMyBlogs } from "@/lib/fetch"
import { useQuery } from "@tanstack/react-query"





export const useGetBlogsQueries= ()=>{
    return useQuery({
        queryKey:['blogs'],
        queryFn:getBlogs
})}



export const useGetMyBlogsQueries= ()=>{
    return useQuery({
        queryKey:['myBlogs'],
        queryFn:getMyBlogs
})}


export const useGetBlogsByIdQueries= (blogId:string)=>{
    return useQuery({
        queryKey:['blog',blogId],
        queryFn:()=>getBlogById(blogId)
})}


