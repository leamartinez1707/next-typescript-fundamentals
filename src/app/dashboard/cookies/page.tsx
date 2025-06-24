import { TabBar } from "@/components"
import TitleSpan from "@/components/TitleSpan";
import { cookies } from "next/headers"

export const metadata = {
    title: 'Cookies Page',
    description: 'This is the cookies page of the dashboard',
}

const PageCookies = async () => {

    const cookieStore = await cookies();
    const cookieTab = cookieStore.get('selectedTab')?.value ?? '1';

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col">
                <TitleSpan title="Cookies" />
                <TabBar currentTab={+cookieTab} />
            </div>
        </div>
    )
}

export default PageCookies