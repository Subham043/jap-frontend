interface DropdownItem {
  link: string;
  title: string;
}

interface NavMenuItem {
  id: number;
  link: string;
  title: string;
  hasDropdown?: boolean;
  megamenu?: boolean;
  dropdownItems?: DropdownItem[];
}

const nav_menus_list:NavMenuItem[] = [
  {id:1,
    link: '/',
    title: 'Home',
  },
  {id:2,
    link: '/about',
    title: 'About Us',
  },
  {id:3,
    link: '/products',
    title: 'Products',
  },
  {id:4,
    link: '/certifications',
    title: 'Certifications',
  },
  {id:5,
    link: '/gallery',
    title: 'Gallery',
  },
  {id:6,
    link: '/',
    title: 'Enquiry',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/contact', title: 'Contact Us' },
      { link: '/b2b', title: 'B2B Enquiry' },
    ]
  }
]

export default nav_menus_list;