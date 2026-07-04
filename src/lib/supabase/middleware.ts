import { supabase } from "./client";

export const initializeSupabaseSession = () => {
  const refreshSession = async () => {
    await supabase.auth.getSession();
    await supabase.auth.refreshSession();
  };

  void refreshSession();

  window.addEventListener("focus", () => {
    void refreshSession();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      void refreshSession();
    }
  });
};
