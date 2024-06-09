import { DashboardPage } from '@/_pages/admin/dashboard/DashboardPage';
import AdminLayout from '@/shared/ui/layouts/admin-layout';

export default function Admin() {
  return (
    <AdminLayout>
      <DashboardPage />
    </AdminLayout>
  );
}
