declare module 'global-types' {
  // 0: pending, 1: done
  export type TPlanDone = number[ 0 | 1 ];

  export type TGoal = {
    _id?: string;
    userId: string;
    goalName: string;
    goalTags: string[];
    period: number;
    plan: string;
    planDone: TPlanDone;
    startedAt: string | Date;
  }
}