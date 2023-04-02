import { getPublicDirectoryPrefix } from "../helpers/getPublicDirPrefix";

interface SidebarLink {
    icon: string,
    title: string,
    href?: string,
};

export const SidebarLinks: Array<SidebarLink> = [
    {
        icon: `${getPublicDirectoryPrefix()}emojis/waving-hand.png`,
        title: 'Welcome',
        href: '/'
    },
    {
        icon: `${getPublicDirectoryPrefix()}emojis/open-file-folder.png`,
        title: 'Shared folders',
        href: '/folders'
    }
];