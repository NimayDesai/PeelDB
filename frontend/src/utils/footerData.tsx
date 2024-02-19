import { FooterData } from "./types";

export const footerData: FooterData[] = [
    {
        label: 'Pages',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Help', href: '/help' },
            { label: 'Contact', href: '/contact' }
        ]
    },
    {
        label: 'Organization',
        links: [
            { label: 'Add Organization', href: '/create-organizations' },
            { label: 'View Organizations', href: '/app' },
        ]
    },
    {
        label: 'Account Settings',
        links: [
            { label: 'Change Info', href: '/change-info' },
            { label: 'Login', href: '/login' },
            { label: 'Register', href: '/register' }
        ]
    },
    {
        label: 'Social',
        links: [
            { label: 'Github', href: 'https://github.com/NimayDesai/SchoolOrganizationDB' },
        ]
    }
];
