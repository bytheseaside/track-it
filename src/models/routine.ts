import Exercise from './exercise';

type Routine = {
  id: number;
  name: string;
  exercises: Exercise[];
  isActive: boolean;
};

export default Routine;
