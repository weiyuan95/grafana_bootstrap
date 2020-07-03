type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'green' | 'red' | 'pink';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  circleColor: CircleColor;
}
