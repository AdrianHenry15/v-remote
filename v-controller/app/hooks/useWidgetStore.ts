import { create } from "zustand"

export enum ClimateTemp {
  LO,
  LVL1,
  LVL2,
  LVL3,
  LVL4,
  LVL5,
  LVL6,
  LVL7,
  LVL8,
  LVL9,
  LVL10,
  LVL11,
  HI,
}

interface WidgetStore {
  // STATE
  headLightsOn: boolean
  rearLightsOn: boolean
  honk: boolean
  climate: ClimateTemp
  locked: boolean
  trunkOpen: boolean
  hoodOpen: boolean
  carStarted: boolean
  windowDown: boolean
  windowUp: boolean

  // ACTIONS
  setHeadLights: () => void
  setRearLights: () => void
  setHonk: () => void
  setClimate: (temp: ClimateTemp) => void
  setLocked: () => void
  setTrunkOpen: () => void
  setHoodOpen: () => void
  setCarStart: () => void
  setWindowDown: () => void
  setWindowUp: () => void
}

export const useWidgetStore = create<WidgetStore>((set, get) => ({
  // STATE
  headLightsOn: false,
  rearLightsOn: false,
  honk: false,
  climate: ClimateTemp.LVL11,
  locked: false,
  trunkOpen: false,
  hoodOpen: false,
  carStarted: false,
  windowDown: false,
  windowUp: false,

  // ACTIONS
  setHeadLights: () => set({ headLightsOn: !get().headLightsOn }),
  setRearLights: () => set({ rearLightsOn: !get().rearLightsOn }),
  setHonk: () => set({ honk: !get().honk }),
  setClimate: (temp: ClimateTemp) => set({ climate: temp }),
  setLocked: () => set({ locked: !get().locked }),
  setTrunkOpen: () => set({ trunkOpen: !get().trunkOpen }),
  setHoodOpen: () => set({ hoodOpen: !get().hoodOpen }),
  setCarStart: () => set({ carStarted: !get().carStarted }),
  setWindowDown: () => set({ windowDown: !get().windowDown }),
  setWindowUp: () => set({ windowUp: !get().windowUp }),
}))
