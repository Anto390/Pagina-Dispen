import { supabase } from "./client";

export const signInWithEmail = async (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

export const signUpWithEmail = async (
  email: string,
  password: string,
  options?: { name?: string }
) =>
  supabase.auth.signUp({
    email,
    password,
    options: {
      data: options ?? {},
    },
  });

export const signOut = async () => supabase.auth.signOut();

export const getCurrentSession = async () => supabase.auth.getSession();

export const getCurrentUser = async () => supabase.auth.getUser();
