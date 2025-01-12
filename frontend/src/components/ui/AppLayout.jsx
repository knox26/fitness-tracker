import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import NavBar from "@/projectcomponents/NavBar/NavBar"

export default function Layout({ children }) {
  return (
     <>
 
     <SidebarProvider   >
      <AppSidebar  />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
     </>
  )
}
