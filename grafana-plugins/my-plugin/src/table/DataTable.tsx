import React, { ReactNode } from 'react';
import { DataRow } from './DataRow';
import { css, cx } from 'emotion';
import { getTableStyles } from 'styles/styles';

interface Props {
  children: ReactNode;
}

export const DataTable: React.FC<Props> = ({ children }) => {
  const tableStyles = getTableStyles();

  return (
    <div>
      <table
        className={cx(
          tableStyles.border,
          css`
            width: 100%;
            table-layout: fixed;
          `
        )}
      >
        {children}
      </table>
    </div>
  );
};
