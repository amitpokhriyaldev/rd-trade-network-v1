# RD Trade Network Pvt. Ltd. — Next.js 14 Website

A complete, production-ready Next.js 14 website for RD Trade Network Pvt. Ltd., a leading logistics company in India.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI** components
- **Framer Motion** animations
- **Zustand** state management
- **Supabase** (Auth + Database ready)
- **React Hook Form** + **Zod** validation

## 📁 Project Structure

```
rd-trade-network/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Auth group (no navbar/footer)
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── (dashboard)/              # Dashboard group
│   │   └── dashboard/
│   │       ├── page.tsx
│   │       └── shipments/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/page.tsx
│   ├── track/page.tsx
│   ├── pincode/page.tsx
│   ├── api/                      # API Routes
│   │   ├── auth/login/route.ts
│   │   ├── auth/signup/route.ts
│   │   ├── tracking/route.ts
│   │   ├── pincode/route.ts
│   │   └── shipments/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Landing page
├── components/
│   ├── ui/                       # ShadCN UI components
│   ├── layout/                   # Navbar, Footer
│   ├── sections/                 # Page sections
│   └── theme-provider.tsx
├── lib/                          # Utilities
│   ├── utils.ts
│   ├── store.ts                  # Zustand stores
│   ├── supabase.ts
│   └── auth.ts
├── types/                        # TypeScript types
├── data/                         # Mock data
├── public/images/                # Static assets
└── middleware.ts                 # Route protection
```

## 🎯 Features

### Landing Page
- Hero section with animated background
- Quick tracking widget
- Stats counter animation
- Services overview cards
- Why Choose Us section
- Testimonials carousel
- Call-to-action section

### About Page
- Company story and mission/vision
- Director profiles (Rakesh Singh, Saty Prakash Singh, Seema Singh)
- Timeline milestones (2008-2024)

### Services Page
- 6 service categories with detailed tabs
- Air Cargo, Surface Transport, Rail Cargo, Express Delivery, Document Delivery, Warehousing
- Pricing information and feature lists

### Contact Page
- Contact form with validation
- Google Maps embed
- Click-to-call and email integration
- Emergency contact card

### Track Shipment
- Real-time tracking simulation
- Status timeline visualization
- Progress indicator
- Demo tracking IDs for testing

### Pincode Serviceability
- 6-digit PIN code validation
- Service availability check
- Delivery estimates
- Coverage network display

### Authentication
- Login/Signup pages
- Email + password authentication
- Form validation with error handling
- Protected dashboard routes (middleware)

### User Dashboard
- Shipment statistics cards
- Recent shipments list
- Quick action buttons
- Shipment filtering and search

## 🔧 Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment variables:**
   Create `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

- **Primary Color:** #1e3a8a (Deep Blue)
- **Secondary Color:** #f97316 (Orange)
- **Font:** Inter (Google Fonts)
- **Animations:** Framer Motion with scroll-triggered reveals
- **Responsive:** Mobile-first design with breakpoints at sm, md, lg, xl

## 📞 Company Details

- **Company:** RD Trade Network Pvt. Ltd.
- **Directors:** Rakesh Singh, Saty Prakash Singh, Seema Singh
- **Email:** rakesh@rdtradenetwork.in
- **Phone:** +91 98889 23612 / +91 77175 29232
- **Tagline:** Single Window Logistics Solutions

## 📝 License

Proprietary — RD Trade Network Pvt. Ltd.
