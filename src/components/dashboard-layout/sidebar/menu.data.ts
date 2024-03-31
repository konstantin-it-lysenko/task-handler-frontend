import { CalendarRange, KanbanSquare, LayoutDashboard } from "lucide-react";
import { DASHBOARD_PAGES } from "@/config/pages-url.config";
import type { IMenuItem } from "./menu.interface";

export const MENU: IMenuItem[] = [
    {
        icon: LayoutDashboard,
        link: DASHBOARD_PAGES.HOME,
        name: 'Dashboard'
    },
    {
        icon: KanbanSquare,
        link: DASHBOARD_PAGES.TASKS,
        name: 'Tasks'
    },
    {
        icon: CalendarRange,
        link: DASHBOARD_PAGES.TIME_BLOCKING,
        name: 'Time bloacking'
    }
]