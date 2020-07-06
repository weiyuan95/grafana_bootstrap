import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { DataTable } from 'table/DataTable';
import { getGlobalStyles } from 'styles/styles';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  const globalStyles = getGlobalStyles();
  // Grafana consume the datasource, and returns the data in a 'series'
  // data needs to be provisioned in an array
  // loop through data.series to access each element in the array
  console.table(data.series[0].fields); // eslint-disable-line no-console

  return (
    <div
      className={cx(
        globalStyles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <DataTable rawData={data} />
    </div>
  );
};
