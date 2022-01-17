declare module 'global-types' {
  // 0: pending, 1: done
  export type TPlan = 0 | 1;

  export type TPlans = {
    goal: TGoal;
  }


  export type TGoal = {
    _id?: string;
    userId: string;
    goalName: string;
    goalTags: string[];
    period: number;
    plan: string;
    planDone: TPlan[];
    startedAt: string | Date;
  }
}