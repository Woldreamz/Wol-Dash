import { DashboardOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resource: IResourceItem[] = [
{
    name: 'dashboard',
    list: '/',
    meta: {
        label: 'Dashboard',
        icon: <DashboardOutlined />
    }
}
]