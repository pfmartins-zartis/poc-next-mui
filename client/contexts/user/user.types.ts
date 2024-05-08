export interface IUser {
  name: null;
  suportID: null;
  brandsOfInterest: IBrand[];
  selectedSubject: IBrand;
}

export interface IBrand {
  name: string;
  id: string;
  slug: string;
  thumbnail: string;
  "subject-type"?: string;
  overview: {
    impressions: number;
    impressionsSOV: number;
    impressions18: number;
    attentionIndex: number;
    interruptionRate: number;
    industryAverage: number;
    airings: number;
    spend: number;
  };
}
