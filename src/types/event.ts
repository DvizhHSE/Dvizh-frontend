export interface Event {
  _id: string;
  photos: string[]; // массив изображений
  category_id: string;
  name: string;
  location: string;
  date: string;
  time?: string;
  age_limit: string;
  for_roles: string[]; // массив ролей
  organizers: string[]; // массив строк
  description: string;
}

export interface EventsData {
  events: Event[];
}
