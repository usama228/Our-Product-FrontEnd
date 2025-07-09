const menus = [
 {
  id: 1,
  name: "Home",
  path: "/", // ✅
},
  {
    id: 2,
    name: "Browse Jobs",
    children: [
      {
        id: 1,
        name: "Services",

        children: [
          { id: 1, name: "Service v1", path: "/service-1" },
         
         
          { id: 9, name: "Service Single v1", path: "/service-single" },
       
        ],
      },
      {
        id: 2,
        name: "Projects",
        children: [
          { id: 1, name: "Project v1", path: "/project-1" },
      
          { id: 2, name: "Project Single v1", path: "/project-single" },
       
        ],
      },
      {
        id: 3,
        name: "Job View",
        children: [
          { id: 1, name: "Job list v1", path: "/job-1" },
      
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Users",
    children: [
      {
        id: 1,
        name: "Dashboard",
        children: [
          { id: 1, name: "Dashboard", path: "/dashboard" },
          { id: 2, name: "Proposal", path: "/proposal" },
          { id: 3, name: "Saved", path: "/saved" },
          { id: 4, name: "Message", path: "/message" },
          { id: 5, name: "Reviews", path: "/reviews" },
          { id: 6, name: "Invoice", path: "/invoice" },
          { id: 7, name: "Payouts", path: "/payouts" },
          { id: 8, name: "Statement", path: "/statements" },
          { id: 9, name: "Manage Service", path: "/manage-services" },
          { id: 10, name: "Add Services", path: "/add-services" },
          { id: 11, name: "Manage Jobs", path: "/manage-jobs" },
          {
            id: 12,
            name: "Manage Project",
            path: "/manage-projects",
          },
          {
            id: 13,
            name: "Create Project",
            path: "/create-projects",
          },
          { id: 14, name: "My Profile", path: "/my-profile" },
        ],
      },
      {
        id: 2,
        name: "Employee",
        children: [
          { id: 1, name: "Employee V1", path: "/employee-1" },
        
          {
            id: 3,
            name: "Employee Single",
            path: "/employee-single",
          },
        ],
      },
      // {
      //   id: 3,
      //   name: "Freelancer",
      //   children: [
      //     { id: 1, name: "Freelancer V1", path: "/freelancer-1" },
      //     { id: 2, name: "Freelancer V2", path: "/freelancer-2" },
      //     { id: 3, name: "Freelancer V3", path: "/freelancer-3" },
      //     {
      //       id: 4,
      //       name: "Freelancer Single v1",
      //       path: "/freelancer-single",
      //     },
      //     {
      //       id: 5,
      //       name: "Freelancer Single v2",
      //       path: "/freelancer-single-v2",
      //     },
      //     {
      //       id: 6,
      //       name: "Freelancer Single v3",
      //       path: "/freelancer-single-v3",
      //     },
      //   ],
      // },
      {
        id: 4,
        name: "Become Seller",
        path: "/become-seller",
      },
    ],
  },
  {
    id: 4,
    name: "Pages",
    children: [
      {
        id: 1,
        name: "About",
        children: [
          { id: 1, name: "About v1", path: "/about-1" },
        
        ],
      },
      {
        id: 2,
        name: "Blog",
        children: [
          { id: 1, name: "List 1", path: "/blog-1" },
          // { id: 2, name: "List 2", path: "/blog-2" },
          // { id: 3, name: "List 3", path: "/blog-3" },
          // { id: 4, name: "Single", path: "/blog-single" },
        ],
      },
      // {
      //   id: 3,
      //   name: "Shop",
      //   children: [
      //     { id: 1, name: "List", path: "/shop-list" },
      //     { id: 2, name: "Single", path: "/shop-single" },
      //     { id: 3, name: "Cart", path: "/shop-cart" },
      //     { id: 4, name: "Checkout", path: "/shop-checkout" },
      //     { id: 5, name: "Order", path: "/shop-order" },
      //   ],
      // },
      {
        id: 4,
        name: "Contact",
        path: "/contact",
      },
      {
        id: 5,
        name: "404",
        path: "/not-found",
      },
      // {
      //   id: 6,
      //   name: "Faq",
      //   path: "/faq",
      // },
      // {
      //   id: 7,
      //   name: "Help",
      //   path: "/help",
      // },
      // {
      //   id: 8,
      //   name: "Invoices",
      //   path: "/invoices",
      // },
      {
        id: 9,
        name: "Login",
        path: "/login",
      },
      {
        id: 10,
        name: "Pricing",
        path: "/pricing",
      },
      {
        id: 11,
        name: "Register",
        path: "/register",
      },
      {
        id: 12,
        name: "Terms",
        path: "/terms",
      },
      {
        id: 13,
        name: "UI Elements",
        path: "/ui-elements",
      },
    ],
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

export default menus;
