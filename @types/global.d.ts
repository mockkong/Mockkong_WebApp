declare module 'global-types' {
  export type TGoal = {
    _id?: string;
    userId: string;
    goalName: string;
    goalTags: string[];
    period: number;
    plan: string;
    planDone: number[];
    startedAt: string | Date;
  }
}