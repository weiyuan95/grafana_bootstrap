import React from 'react';
import { stylesFactory, useTheme } from '@grafana/ui';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';

interface Props {
  rowData: string[];
  isHeader: boolean;
}

export const DataRow: React.FC<Props> = ({ rowData, isHeader }) => {
  const tableStyles = getTableStyles();

  return (
    <tr>
      {rowData.map(cellText => (
        <td className={cx(tableStyles.border, isHeader && tableStyles.header)}>
          <div className={cx(tableStyles.cellPadding)}>{cellText}</div>
        </td>
      ))}
    </tr>
  );
};
