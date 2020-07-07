import React from 'react';
import { stylesFactory, useTheme } from '@grafana/ui';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';

interface Props {
  rowData: string[];
  isHeader: boolean;
  colWidth: number;
}

export const DataRow: React.FC<Props> = ({ rowData, isHeader, colWidth }) => {
  const tableStyles = getTableStyles();

  return (
    <tr>
      {rowData.map(cellText => (
        <td
          className={cx(
            tableStyles.border,
            tableStyles.tableTd,
            isHeader && tableStyles.header,
            css`
              width: ${colWidth};
            `
          )}
        >
          <span className={cx(tableStyles.cellContent)}> {cellText} </span>
        </td>
      ))}
    </tr>
  );
};
