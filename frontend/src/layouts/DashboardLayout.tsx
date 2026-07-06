import "./DashboardLayout.css";
import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />

        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
}