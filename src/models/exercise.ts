type Exercise = {
  id: string;
  name: string;
  description?: string;
  sets: number;
  reps: number;
  rest?: number;
  lastWeight?: number;
};

export default Exercise;
