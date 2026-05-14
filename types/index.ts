export interface User {
  id: string
  email: string
  name: string
  phone?: string
  company?: string
  role: "user" | "admin"
  created_at: string
}

export interface Shipment {
  id: string
  tracking_id: string
  sender_name: string
  sender_address: string
  sender_pincode: string
  receiver_name: string
  receiver_address: string
  receiver_pincode: string
  weight: number
  dimensions: string
  service_type: "air" | "surface" | "rail" | "express"
  status: ShipmentStatus
  current_location: string
  estimated_delivery: string
  actual_delivery?: string
  created_at: string
  updated_at: string
  timeline: ShipmentTimeline[]
  user_id?: string
}

export type ShipmentStatus = 
  | "ordered"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "returned"
  | "cancelled"

export interface ShipmentTimeline {
  status: ShipmentStatus
  location: string
  timestamp: string
  description: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  image: string
  price_starting?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  image: string
}

export interface Stat {
  label: string
  value: string
  suffix?: string
  icon: string
}

export interface Director {
  name: string
  role: string
  image: string
  bio: string
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export interface PincodeService {
  pincode: string
  city: string
  state: string
  available: boolean
  services: string[]
  estimated_days: number
  dispatchCenter?: string
  isODA?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
  service_interest?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupData {
  name: string
  email: string
  phone: string
  password: string
  company?: string
}
