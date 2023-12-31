// Generated by https://quicktype.io

export interface PlacesResponse {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:                   string;
  type:                 string;
  place_type:           string[];
  relevance:            number;
  properties:           Properties;
  text_es:              string;
  language_es?:         Language;
  place_name_es:        string;
  text:                 string;
  language?:            Language;
  place_name:           string;
  center:               number[];
  geometry:             Geometry;
  context:              Context[];
  bbox?:                number[];
  matching_text?:       string;
  matching_place_name?: string;
}

export interface Context {
  id:           string;
  mapbox_id:    string;
  text_es:      string;
  text:         string;
  language_es?: Language;
  language?:    Language;
  wikidata?:    string;
  short_code?:  string;
}

export enum Language {
  En = "en",
  Es = "es",
}

export interface Geometry {
  coordinates: number[];
  type:        string;
}

export interface Properties {
  wikidata?:   string;
  address?:    string;
  category?:   string;
  landmark?:   boolean;
  foursquare?: string;
  maki?:       string;
  mapbox_id?:  string;
}
