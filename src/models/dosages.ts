type Dosage = {
  id: string;
  userId: string;
  medicationName: string;
  medicationType: 'hormone' | 'blocker' | 'other';
  dosageAmount: number;
  dosageUnit: 'mg' | 'ml' | 'mcg' | 'IU';
  route: 'oral' | 'injection' | 'transdermal' | 'sublingual' | 'other';
  frequency: DosageFrequency;

  isActive: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface DosageFrequency {
  type: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'custom';
  times: TimeSlot[];
  daysOfWeek?: number[];
  customInterval?: number;
}

interface TimeSlot {
  hour: number;
  minute: number;
}

interface Dose {
  id: string;
  userId: string;
  dosageId: string;
  scheduledTime: Date;
  status: 'scheduled' | 'taken' | 'missed' | 'skipped';
  takenAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
