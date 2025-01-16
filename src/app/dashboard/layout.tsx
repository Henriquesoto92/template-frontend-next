import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../_components/AppSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 md:p-10">
      <SidebarProvider>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </div>
  );
}
