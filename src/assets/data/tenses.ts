export const headers = ['Past', 'Present', 'Future']
export const conditionalHeaders = ['If/When - clause', 'Main clause', 'Usage']

export const conditionalRows = [
  {
    name: 'Zero',
    'If/When - clause': 'If + present simple',
    'Main clause': 'Present simple',
    Usage: 'Real condition + inevitable result',
  },
  {
    name: 'First',
    'If/When - clause': 'If + present simple',
    'Main clause': 'Will/Can/Must + verb (inf.), Imperative form',
    Usage: 'Possible condition + probable result',
  },
  {
    name: 'Second',
    'If/When - clause': 'If + past simple',
    'Main clause': 'Would/Could + verb (inf.)',
    Usage: 'Hypothetical condition + possible result',
  },
  {
    name: 'Third',
    'If/When - clause': 'If + past perfect',
    'Main clause': 'Would have/Could have + past participle',
    Usage: 'Expired past condition + possible past result',
  },
]

export const activeRows = [
  {
    name: 'Simple',
    Past: 'S + V2',
    Present: 'S + V1',
    Future: `S + will + V`,
  },
  {
    name: 'Continues',
    Past: `S + was/were + (V + ing)`,
    Present: `S + am/is/are + (V + ing)`,
    Future: `S + will be + (V + ing)`,
  },
  {
    name: 'Perfect',
    Past: `S + had + V3`,
    Present: `S + have/has + V3`,
    Future: `S + will have + V3`,
  },
  {
    name: 'Perfect Continues',
    Past: `S + had been + (V + ing)`,
    Present: `S + have/has been + (V + ing)`,
    Future: `S + will have been + (V + ing)`,
  },
]

export const passiveRows = [
  {
    name: 'Simple',
    Past: 'O + was/were + V3',
    Present: 'O + am/is/are + V3',
    Future: `O + will be + V3`,
  },
  {
    name: 'Continues',
    Past: `O + was/were being + V3`,
    Present: `O + am/is/are being + V3`,
    Future: `-`,
  },
  {
    name: 'Perfect',
    Past: `O + had been + V3`,
    Present: `O + have/has been + V3`,
    Future: `O + will have been + V3`,
  },
]
