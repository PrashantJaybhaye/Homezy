# Homezy 🏠

> **Find & Book Home Services Near You**

A modern, intuitive home service booking platform built with Next.js that connects homeowners with trusted service providers. From plumbing to cleaning, electrical work to landscaping — Homezy makes it easy to find and book the services you need.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

### For Homeowners

- 🔍 **Browse Service Categories** - Explore various home service categories
- 🏢 **Discover Local Businesses** - Find trusted service providers near you
- 📅 **Easy Booking System** - Book services with an intuitive calendar interface
- 📋 **Manage Bookings** - View and track all your bookings in one place
- 🔐 **Secure Authentication** - Sign up/sign in with Clerk authentication

### For Administrators

- 🛡️ **Admin Dashboard** - Secure panel for platform administration and business management
- 🔐 **Role-Based Access** - Dedicated administrative privileges for authorized emails

### Platform Features

- 🌗 **Dark/Light Mode** - Theme switching for comfortable viewing
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js for optimal loading speeds
- 🎨 **Modern UI** - Beautiful interface with Radix UI components
- 🔔 **Toast Notifications** - Real-time feedback with Sonner

---

## 🛠️ Tech Stack

| Category           | Technologies                |
| ------------------ | --------------------------- |
| **Frontend**       | Next.js, React, TailwindCSS |
| **Backend**        | Next.js, GraphQL API        |
| **Authentication** | Clerk                       |
| **Database**       | Hygraph (Headless CMS)      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- A Clerk account for authentication
- A Hygraph (GraphQL CMS) account for content management

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PrashantJaybhaye/Homezy.git
   cd Homezy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Hygraph GraphQL
   NEXT_PUBLIC_MASTER_URL_API=your_hygraph_api_url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
homezy/
├── app/
│   ├── (routes)/           # App routes
│   │   ├── about/          # About page
│   │   ├── admin/          # Admin panel & management tools
│   │   ├── details/        # Business details
│   │   ├── mybooking/      # User bookings
│   │   ├── privacy/        # Privacy policy
│   │   ├── search/         # Search functionality
│   │   ├── services/       # Services page
│   │   ├── sign-in/        # Sign in page
│   │   ├── sign-up/        # Sign up page
│   │   └── terms/          # Terms of service
│   ├── _components/        # Shared components
│   │   ├── BusinessList.jsx
│   │   ├── CategoryList.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skeleton.jsx
│   │   └── Testimonials.jsx
│   ├── _services/          # API services
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/             # UI components
├── lib/                    # Utility functions
├── public/                 # Static assets
└── ...config files
```

---

## 📜 Available Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |

---

## 🎨 Screenshots

<div align="center">

### Home Page

_Hero section with search functionality and service categories_

### Service Categories

_Browse through various home service categories_

### Business Details

_Detailed view of service providers with booking option_

### Booking Calendar

_Premium calendar interface for scheduling appointments_

</div>

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Prashant Jaybhaye**

- GitHub: [@PrashantJaybhaye](https://github.com/PrashantJaybhaye)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication and User Management
- [Hygraph](https://hygraph.com/) - Headless CMS
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons

---

<div align="center">

Made with ❤️ by Prashant Jaybhaye

⭐ Star this repository if you found it helpful!

</div>
