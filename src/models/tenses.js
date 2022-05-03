export const headers = ["Past", "Present", "Future"]

export const activeRows = [
  {
    name: "Simple",
    Past: "S + V2",
    Present: "S + V1",
    Future: `S + will + V`,
  },
  {
    name: "Continues",
    Past: `S + was/were + (V + ing)`,
    Present: `S + am/is/are + (V + ing)`,
    Future: `S + will be + (V + ing)`,
  },
  {
    name: "Perfect",
    Past: `S + had + V3`,
    Present: `S + have/has + V3`,
    Future: `S + will have + V3`,
  },
  {
    name: "Perfect Continues",
    Past: `S + had been + (V + ing)`,
    Present: `S + have/has been + (V + ing)`,
    Future: `S + will have been + (V + ing)`,
  },
]

export const passiveRows = [
  {
    name: "Simple",
    Past: "O + was/were + V3",
    Present: "O + am/is/are + V3",
    Future: `O + will be + V3`,
  },
  {
    name: "Continues",
    Past: `O + was/were being + V3`,
    Present: `O + am/is/are being + V3`,
    Future: `-`,
  },
  {
    name: "Perfect",
    Past: `O + had been + V3`,
    Present: `O + have/has been + V3`,
    Future: `O + will have been + V3`,
  },
]