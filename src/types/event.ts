export interface Event {
  id: string;
  image: string[];
  category: string;
  name: string;
  location: string;
  date: string;
  time: string;
  ageRestriction: string;
  targetAudience: string;
  organizer: string[];
  description: string;
}

export interface EventsData {
  events: Event[];
} 