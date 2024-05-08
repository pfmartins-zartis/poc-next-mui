import {
  AccordionSummary,
  accordionSummaryClasses,
  styled,
} from "@mui/material";

export const AccordionNavSummary = styled(AccordionSummary)`
  padding: 0;

  .${accordionSummaryClasses.gutters} {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled("nav")`
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;
