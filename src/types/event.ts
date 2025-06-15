export interface Event {
  id: number;
  image: string;
  category: string;
  name: string;
  location: string;
  date: string;
  time: string;
  ageRestriction: string;
  targetAudience: string;
  organizer: string;
  description: string;
}

export interface EventsData {
  events: Event[];
} 