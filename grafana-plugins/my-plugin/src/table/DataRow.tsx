import React from 'react';
import { stylesFactory, useTheme } from '@grafana/ui';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';
import { CellContent } from 'types';

interface Props {
  rowData: CellContent[];
  isHeader: boolean;
  colWidth: number;
}

export const DataRow: React.FC<Props> = ({ rowData, isHeader, colWidth }) => {
  const tableStyles = getTableStyles();

  return (
    <tr>
      {rowData.map(({ value, color }) => (
        <td
          className={cx(
            tableStyles.border,
            tableStyles.tableTd,
            isHeader && tableStyles.header,
            css`
              width: ${colWidth};
              background-color: ${color === 'none' ? '' : color};
            `
          )}
        >
          <span className={cx(tableStyles.cellContent)}> {value} </span>
        </td>
      ))}
    </tr>
  );
};
