export interface Event {
  id: string; // или "_id" если API возвращает "_id"
  image: string; // строка, не массив
  category: string;
  name: string;
  location: string;
  date: string;
  time: string;
  ageRestriction: string;
  targetAudience: string;
  organizer: string[]; // если точно массив
  description: string;
}

export interface EventsData {
  events: Event[];
}
