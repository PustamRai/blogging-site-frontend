import api from "./api";
import apiEndpoints from "./apiEndpints";

export type LoginProps = {
  email: string;
  password: string;
};
export const login = async (paylod: LoginProps) => {
  console.log("fetch login called", paylod);
  const { data } = await api.post(apiEndpoints.LOGIN, paylod);

  console.log("login data: ", data);
  return data;
};

export type RegisterPayloadProps = {
  username: string;
  email: string;
  password: string;
};

export const register = async (paylod: RegisterPayloadProps) => {
  const { data } = await api.post(apiEndpoints.REGISTER, paylod);
  return data;
};

export const getBlogs = async () => {
  const { data } = await api.get(apiEndpoints.GET_BLOG);
  return data;
};

export const getMyBlogs = async () => {
  const { data } = await api.get(apiEndpoints.GET_MY_BLOGS);
  return data;
};

export type CreateBlogPayloadProps = {
  title: string;
  content: string;
  imageUrl: string;
};
export const createBlog = async (payload: CreateBlogPayloadProps) => {
  const { data } = await api.post(apiEndpoints.CREATE_BLOG, payload);
  return data;
};

export const updateBlog = async (
  blogId: string,
  payload: CreateBlogPayloadProps,
) => {
  const { data } = await api.put(
    `${apiEndpoints.UPDATE_BLOG}/${blogId}`,
    payload,
  );
  return data;
};

export const deleteBlog = async (blogId: string) => {
  const { data } = await api.delete(`${apiEndpoints.DELETE_BLOG}/${blogId}`);
  return data;
};

export const getBlogById = async (blogId: string) => {
  const { data } = await api.get(`${apiEndpoints.GET_SINGLE_BLOG}/${blogId}`);
  return data;
};
