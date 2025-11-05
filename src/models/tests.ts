

type Test = {
  id: string;
  testDate: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  levels: Level[];
};
type Level = {
  id: string;
  marker: string;
  value: number;
  unit: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type {
  Test,
  Level,
};

