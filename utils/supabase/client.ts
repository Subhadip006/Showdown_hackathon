import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    "https://ntjsvgnveghqzegdieyj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50anN2Z252ZWdocXplZ2RpZXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NDAwNTYsImV4cCI6MjA1MjMxNjA1Nn0.drm9znkG43DLrlq36Ll1F8Ya9dpWdUIRr3HgzqmFXx4"
  )
}