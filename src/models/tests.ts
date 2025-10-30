// ============================================
// TEST TYPE
// ============================================

type TestType =
  | 'hormone_panel'
  | 'testosterone'
  | 'estradiol'
  | 'progesterone'
  | 'prolactin'
  | 'lh'
  | 'fsh'
  | 'shbg'
  | 'liver_function'
  | 'lipid_panel'
  | 'complete_blood_count'
  | 'thyroid_panel'
  | 'vitamin_d'
  | 'other';

type Test = {
  id: string;
  testType: TestType[];
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
  TestType,
};

