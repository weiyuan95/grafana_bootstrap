import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { DataTablePanel } from './DataTablePanel';

export const plugin = new PanelPlugin<SimpleOptions>(DataTablePanel).setPanelOptions(builder => {
  // panel option builder
  // shows up in display options in panel
  // everything added below are called option controls
  return (
    builder
      // text box
      .addTextInput({
        path: 'text',
        name: 'Simple text option',
        description: 'Description of panel option',
        defaultValue: 'Default value of text input option',
      })
      // toggle
      .addBooleanSwitch({
        path: 'showSeriesCount',
        name: 'Show series counter',
        defaultValue: false,
      })
      // radio group
      .addRadio({
        path: 'seriesCountSize', // <- binds to SimpleOptions in types.ts
        defaultValue: 'sm',
        name: 'Series counter size',
        settings: {
          options: [
            {
              value: 'sm',
              label: 'Small',
            },
            {
              value: 'md',
              label: 'Medium',
            },
            {
              value: 'lg',
              label: 'Large',
            },
          ],
        },
        showIf: config => config.showSeriesCount,
      })
      .addRadio({
        path: 'circleColor',
        name: 'Circle color',
        defaultValue: 'red',
        settings: {
          options: [
            {
              value: 'red',
              label: 'Red',
            },
            {
              value: 'green',
              label: 'Green',
            },
            {
              value: 'blue',
              label: 'Blue',
            },
          ],
        },
      })
  );
});
