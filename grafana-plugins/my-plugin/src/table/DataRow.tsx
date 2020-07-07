import React from 'react';
import { stylesFactory, useTheme } from '@grafana/ui';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';
import { CellContent } from 'types';
import { DataCol } from './DataCol';

interface Props {
  rowData: CellContent[];
  isHeader: boolean;
  colWidth: number;
}

export const DataRow: React.FC<Props> = ({ rowData, isHeader, colWidth }) => {
  const tableStyles = getTableStyles();

  return (
    <tr className={cx(isHeader && tableStyles.header)}>
      {rowData.map(({ value, color }) => (
        <DataCol colWidth={colWidth} cellValue={value} initialColor={color} />
      ))}
    </tr>
  );
};
