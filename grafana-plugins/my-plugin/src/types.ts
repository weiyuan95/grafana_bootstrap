type SeriesSize = 'sm' | 'md' | 'lg';
type CircleColor = 'green' | 'red' | 'pink';
type CellColor = 'green' | 'red' | 'none' | 'yellow';

export interface SimpleOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  circleColor: CircleColor;
}

export interface CellContent {
  value: number | string;
  color: CellColor;
}
