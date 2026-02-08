<div align="center">

# 🏠 Homezy - Home Service Platform

**Find & Book Home Services Near You**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql)](https://graphql.org/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge)](https://clerk.com/)

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## ✨ Features

### 🎯 Core Features

- 🔍 **Smart Search** - Find home services with intelligent search functionality
- 📱 **Fully Responsive** - Seamless experience across all devices (mobile, tablet, desktop)
- 🗂️ **Service Categories** - Browse services by organized categories with beautiful icons
- 📅 **Easy Booking** - Schedule appointments with preferred service providers
- 👤 **User Authentication** - Secure login with Clerk authentication
- 📊 **Booking Management** - Track and manage your service bookings with status tracking
- 🎨 **Modern UI** - Beautiful interface with Radix UI components and smooth animations
- 🌙 **Dark Mode Support** - Toggle between light and dark themes

### 🚀 Additional Features

- ⭐ **Testimonials** - Customer reviews and ratings
- ❓ **FAQ Section** - Comprehensive frequently asked questions
- 📄 **Legal Pages** - Privacy Policy and Terms of Service
- 🎭 **Error Handling** - Custom 404 and error pages
- ⚡ **Loading States** - Smooth loading indicators
- 🔒 **Secure** - Protected routes and data validation

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript/JSX
- **Styling:** TailwindCSS + Tailwind Animate
- **UI Components:** Radix UI + Lucide Icons
- **State Management:** React Hooks
- **Theme:** next-themes

### Backend & Data

- **API:** GraphQL with graphql-request
- **CMS:** Hygraph (Headless CMS)
- **Authentication:** Clerk
- **Date Handling:** date-fns, moment.js
- **Notifications:** Sonner (Toast notifications)

### Development Tools

- **Package Manager:** npm
- **Linting:** ESLint
- **CSS Processing:** PostCSS + Autoprefixer

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn
- Hygraph account (for CMS)
- Clerk account (for Authentication)

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

3. **Environment Setup**

   Create a `.env` file in the root directory and add your environment variables:

   ```env
   # Hygraph CMS
   NEXT_PUBLIC_MASTER_URL_KEY=your_hygraph_content_api_key
   NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN=your_hygraph_auth_token

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Homezy/
├── app/
│   ├── (routes)/              # App routes
│   │   ├── about/            # About us page
│   │   ├── details/          # Service details pages
│   │   │   ├── [businessId]/ # Dynamic business detail page
│   │   │   └── _components/  # Detail page components
│   │   ├── mybooking/        # User booking management
│   │   │   └── _component/   # Booking components
│   │   ├── privacy/          # Privacy policy page
│   │   ├── search/           # Search functionality
│   │   │   ├── [category]/   # Dynamic category search
│   │   │   └── _components/  # Search components
│   │   ├── services/         # Services listing page
│   │   ├── sign-in/          # Sign in page
│   │   ├── sign-up/          # Sign up page
│   │   └── terms/            # Terms of service page
│   ├── _components/          # Reusable components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Footer.jsx        # Footer with links
│   │   ├── Hero.jsx          # Hero section with search
│   │   ├── CategoryList.jsx  # Category grid
│   │   ├── BusinessList.jsx  # Service provider cards
│   │   ├── Testimonials.jsx  # Customer testimonials
│   │   └── FAQ.jsx           # FAQ accordion
│   ├── _services/            # API services
│   │   └── GlobalApi.js      # GraphQL queries & mutations
│   ├── error.jsx             # Error boundary
│   ├── loading.jsx           # Loading component
│   ├── not-found.jsx         # 404 page
│   ├── layout.js             # Root layout
│   ├── page.js               # Home page
│   └── globals.css           # Global styles
├── components/
│   └── ui/                   # Shadcn UI components
│       ├── button.jsx
│       ├── dialog.jsx
│       ├── sheet.jsx
│       ├── tabs.jsx
│       └── ...
├── lib/                      # Utility functions
│   └── utils.js
├── public/                   # Static assets
│   ├── logo.png
│   └── logo.svg
├── middleware.js             # Clerk middleware
├── tailwind.config.js        # Tailwind configuration
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies
```

## 🎯 Key Components

### Pages

- **Home** (`/`) - Landing page with hero, categories, popular services, testimonials, and FAQ
- **Services** (`/services`) - Complete services listing with all categories
- **About** (`/about`) - Company information, mission, values, and stats
- **Search** (`/search/[category]`) - Category-specific service provider listings
- **Details** (`/details/[businessId]`) - Individual service provider details and booking
- **My Bookings** (`/mybooking`) - User's booking history (booked & completed)
- **Privacy Policy** (`/privacy`) - Privacy and data protection information
- **Terms of Service** (`/terms`) - Terms and conditions

### Components

- **Header** - Responsive navigation with mobile menu, auth buttons, and scroll effects
- **Footer** - Multi-column footer with links, contact info, and social media
- **Hero** - Eye-catching hero section with functional search
- **CategoryList** - Grid of service categories with icons
- **BusinessList** - Service provider cards with images and booking CTAs
- **Testimonials** - Customer reviews with ratings
- **FAQ** - Expandable FAQ accordion
- **BookingSection** - Date/time picker and booking form
- **BookingHistoryList** - User's past and upcoming bookings

## 📱 Screenshots

> Add your app screenshots here

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/home-service-web-app)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

- **Netlify:** Follow Next.js deployment guide
- **Railway:** Use the Next.js template
- **Docker:** Create Dockerfile for containerization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Prashant Jaybhaye**

- GitHub: [@PrashantJaybhaye](https://github.com/PrashantJaybhaye)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Hygraph](https://hygraph.com/) for the headless CMS
- [Vercel](https://vercel.com/) for seamless deployment

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

</div>
