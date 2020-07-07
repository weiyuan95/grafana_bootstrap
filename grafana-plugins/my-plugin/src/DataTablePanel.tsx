import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions, CellContent } from 'types';
import { css, cx } from 'emotion';
import { DataTable } from 'table/DataTable';
import { getGlobalStyles } from 'styles/styles';
import { getTableStyles } from '@grafana/ui/components/Table/styles';
import { DataRow } from 'table/DataRow';

interface Props extends PanelProps<SimpleOptions> {}

export const DataTablePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const globalStyles = getGlobalStyles();
  // Grafana consume the datasource, and returns the data in a 'series'
  // data needs to be provisioned in an array
  // loop through data.series to access each element in the array
  console.table(data.series[0].fields); // eslint-disable-line no-console
  let rawData = data.series[0].fields;
  const rowData = extractRowData(rawData);
  const headers = extractHeaders(rawData);
  const numCols = rowData.length;
  const colWidth = width / numCols;

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
      <DataTable>
        <DataRow rowData={headers} isHeader={true} colWidth={colWidth} />
        {rowData.map(row => (
          <DataRow rowData={row} isHeader={false} colWidth={colWidth} />
        ))}
      </DataTable>
    </div>
  );
};

function extractRowData(rawData: any): CellContent[][] {
  let extractedRowData = [];
  let numCols = rawData[0].values.length;

  for (let i = 0; i < numCols; i++) {
    let rowData = [];
    for (const columnData of rawData) {
      // take out name
      // take out value
      // use name to check rule
      // create CellContent obj and push to array
      rowData.push(columnData.values.buffer[i]);
    }
    extractedRowData.push(rowData);
  }

  return extractedRowData;
}

// TODO: create a type instead of using any for the raw data from the datasource
function extractHeaders(rawData: any): CellContent[] {
  // need to explicitly type this so that the json below can be
  // casted to as CellContent
  let headers: CellContent[] = [];
  for (const columnData of rawData) {
    headers.push({ value: columnData.name, color: 'none' });
  }

  return headers;
}
