import { stylesFactory, getTheme } from '@grafana/ui';
import { css } from 'emotion';

const theme = getTheme();

export const getGlobalStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});

export const getTableStyles = stylesFactory(() => {
  return {
    cellPadding: css`
      padding: 5px;
    `,
    border: css`
      border: 1px solid ${theme.colors.border3};
    `,
    header: css`
      font-weight: bold;
      font-size: 16px;
    `,
  };
});
