import { WidgetItem } from "@/components";
import { auth } from "../api/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

  const session = await auth()
  if (!session) return redirect('/api/auth/signin')
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
      <div className="w-full">
        <WidgetItem title="Profile Server Side">
          <div className="flex flex-col">
            <span>{session.user?.name}</span>
            <span>{session.user?.image}</span>
            <span>{session.user?.email}</span>
          </div>
        </WidgetItem>
      </div>

    </div>
  );
}