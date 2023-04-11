import mongoose, { Schema } from 'mongoose';

interface IPlace {
  image_lastmod: number;
  region: string;
  population: string;
  descriptionFromReview: string;
  slug: string;
  short_slug: string;
  long_slug: string;
  users_count: number;
  users_count_est: number;
  users_count_been: number;
  users_count_been_est: number;
  boost: number;
  last_2_year_growth: number;
  image: string;
  name_chinese: string;
  name: string;
  country_chinese: string;
  air_quality_now: number;
  air_quality: any;
  latitude: string;
  longitude: string;
  country: string;
  country_code: string;
  country_slug: string;
  state_code: string;
  state_chinese: string;
  state: string;
  internet_speed: number;
  air_quality_score: number;
  air_quality_now_score: number;
  humidity: number;
  rank: number;
  weather_icon: string;
  weather_emoji: string;
  temperatureC: number;
  temperatureF: string;
  temperatureC_feels_like: number;
  temperatureF_feels_like: number;
  cost_for_nomad_in_usd: number;
  cost_for_expat_in_usd: number;
  cost_for_local_in_usd: number;
  cost_for_family_in_usd: number;
  total_score: number;
  overall_score: number;
  cost_score: number;
  internet_score: number;
  leisure_quality: number;
  safety_level: number;
}

const tokenSchema = new Schema<IPlace>(
  {
    image_lastmod: {
      type: 'Number',
    },
    region: {
      type: 'String',
    },
    population: {
      type: 'String',
    },
    descriptionFromReview: {
      type: 'String',
    },
    slug: {
      type: 'String',
    },
    short_slug: {
      type: 'String',
    },
    long_slug: {
      type: 'String',
    },
    users_count: {
      type: 'Number',
    },
    users_count_est: {
      type: 'Number',
    },
    users_count_been: {
      type: 'Number',
    },
    users_count_been_est: {
      type: 'Number',
    },
    boost: {
      type: 'Number',
    },
    last_2_year_growth: {
      type: 'Number',
    },
    image: {
      type: 'String',
    },
    name_chinese: {
      type: 'String',
    },
    name: {
      type: 'String',
    },
    country_chinese: {
      type: 'String',
    },
    air_quality_now: {
      type: 'Number',
    },
    air_quality: {
      type: 'Mixed',
    },
    latitude: {
      type: 'String',
    },
    longitude: {
      type: 'String',
    },
    country: {
      type: 'String',
    },
    country_code: {
      type: 'String',
    },
    country_slug: {
      type: 'String',
    },
    state_code: {
      type: 'String',
    },
    state_chinese: {
      type: 'String',
    },
    state: {
      type: 'String',
    },
    internet_speed: {
      type: 'Number',
    },
    air_quality_score: {
      type: 'Number',
    },
    air_quality_now_score: {
      type: 'Number',
    },
    humidity: {
      type: 'Number',
    },
    rank: {
      type: 'Number',
    },
    weather_icon: {
      type: 'String',
    },
    weather_emoji: {
      type: 'String',
    },
    temperatureC: {
      type: 'Number',
    },
    temperatureF: {
      type: 'String',
    },
    temperatureC_feels_like: {
      type: 'Number',
    },
    temperatureF_feels_like: {
      type: 'Number',
    },
    cost_for_nomad_in_usd: {
      type: 'Number',
    },
    cost_for_expat_in_usd: {
      type: 'Number',
    },
    cost_for_local_in_usd: {
      type: 'Number',
    },
    cost_for_family_in_usd: {
      type: 'Number',
    },
    total_score: {
      type: 'Number',
    },
    overall_score: {
      type: 'Number',
    },
    cost_score: {
      type: 'Number',
    },
    internet_score: {
      type: 'Number',
    },
    leisure_quality: {
      type: 'Number',
    },
    safety_level: {
      type: 'Number',
    },
  },
  { collection: 'Place' },
);

const Place =
  (mongoose.models.Place as mongoose.Model<
    IPlace,
    {},
    {},
    {},
    mongoose.Document<unknown, {}, IPlace> &
      Omit<
        IPlace & {
          _id: mongoose.Types.ObjectId;
        },
        never
      >,
    any
  >) || mongoose.model<IPlace>('Place', tokenSchema);

export default Place;
