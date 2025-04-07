import dynamic from "next/dynamic";

// Dynamically import the AdminPanel component with SSR disabled
const AdminPanel = dynamic(() => import("../components/AdminPanel.jsx"), {
  ssr: false,
});

export default function AdminPage() {
  return (
    <div>
      <AdminPanel />
    </div>
  );
}
