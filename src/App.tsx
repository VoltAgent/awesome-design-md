import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Dashboard } from "@/pages/Dashboard";
import { MemberDetail } from "@/pages/MemberDetail";
import { ProjectDetail } from "@/pages/ProjectDetail";
import { TeamPage } from "@/pages/TeamPage";
import { ReportsPage } from "@/pages/ReportsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { DailyReport } from "@/pages/DailyReport";
import { MBTIPage } from "@/pages/MBTIPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/member/:id" element={<MemberDetail />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/daily" element={<DailyReport />} />
            <Route path="/mbti" element={<MBTIPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
