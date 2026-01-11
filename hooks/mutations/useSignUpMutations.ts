import {
  createBlog,
  CreateBlogPayloadProps,
  deleteBlog,
  login,
  LoginProps,
  register,
  RegisterPayloadProps,
  updateBlog,
} from "@/lib/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../store";
import { toast } from "@/components/ui/use-toast";
import { isAxiosError } from "axios";

// Register
export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterPayloadProps) => register(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

// Create Blog
export const useCreateBlogsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateBlogPayloadProps) => createBlog(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

// Login

export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload: LoginProps) => login(payload),

    onSuccess: (data) => {
      setAuth({
        user: {
          id: data.user.id,
          username: data.user.username,
          email: data.user.email,
          role: data.user.role,
        },
        token: data.token,
      }

    
    );
    },
    onError: (error) => {
  if(isAxiosError(error)){
console.log("Axios error response:", error.response?.data.error || error.message);
toast({
  title: "Login Failed",
  description: error.response?.data.error || error.message,
  variant: "destructive",
});
  }
    }
  });
};


// Delete Blog
export const useDeleteBlogsMutation = (blogId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteBlog(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myBlogs"] });
    },
  });
};

// Update Blog
export const useUpdateBlogsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({blogId, payload}: {blogId: string, payload: CreateBlogPayloadProps}) =>
      updateBlog(blogId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myBlogs"] });
    },
  });
};
