type Dosage = {
  medicationName: string;
  medicationType: 'hormone' | 'blocker';
  dosageAmount: number;
  dosageUnit: 'mg' | 'ml' ;
  route: 'oral' | 'injection' | 'transdermal' | 'sublingual' | 'other';
  isActive: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  doses: Dose[];
}

type Dose = {
  scheduledTime: Date;
  status: 'scheduled' | 'taken' | 'missed' | 'skipped';
  takenAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
export type {
  Dosage,
  Dose
}
