import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User, Shipment } from "@/types"

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  setIsAuthenticated: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setIsAuthenticated: (value) => set({ isAuthenticated: value }),
      setIsLoading: (value) => set({ isLoading: value }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
)

interface TrackingState {
  currentShipment: Shipment | null
  trackingHistory: Shipment[]
  isLoading: boolean
  error: string | null
  setCurrentShipment: (shipment: Shipment | null) => void
  addToHistory: (shipment: Shipment) => void
  setIsLoading: (value: boolean) => void
  setError: (error: string | null) => void
  clearHistory: () => void
}

export const useTrackingStore = create<TrackingState>()(
  persist(
    (set) => ({
      currentShipment: null,
      trackingHistory: [],
      isLoading: false,
      error: null,
      setCurrentShipment: (shipment) => set({ currentShipment: shipment }),
      addToHistory: (shipment) =>
        set((state) => ({
          trackingHistory: [
            shipment,
            ...state.trackingHistory.filter((s) => s.tracking_id !== shipment.tracking_id),
          ].slice(0, 10),
        })),
      setIsLoading: (value) => set({ isLoading: value }),
      setError: (error) => set({ error }),
      clearHistory: () => set({ trackingHistory: [] }),
    }),
    {
      name: "tracking-storage",
    }
  )
)

interface DashboardState {
  shipments: Shipment[]
  stats: {
    total: number
    inTransit: number
    delivered: number
    pending: number
  }
  isLoading: boolean
  setShipments: (shipments: Shipment[]) => void
  setStats: (stats: DashboardState["stats"]) => void
  setIsLoading: (value: boolean) => void
}

export const useDashboardStore = create<DashboardState>()((set) => ({
  shipments: [],
  stats: { total: 0, inTransit: 0, delivered: 0, pending: 0 },
  isLoading: false,
  setShipments: (shipments) => set({ shipments }),
  setStats: (stats) => set({ stats }),
  setIsLoading: (value) => set({ isLoading: value }),
}))
