import AddJobForm from './addJobForm';
import TableReports from '../TableReports';
import Text from '@commercetools-uikit/text';
import Grid from '@commercetools-uikit/grid';

const ImportJobs = () => {
  return (
    <>
      <Grid gridGap="20px">
        <Grid gridTemplateColumns="1fr auto">
          <Text.Headline as="h1">{'PIM'}</Text.Headline>
          <AddJobForm />
        </Grid>
        <TableReports />
      </Grid>
    </>
  );
};

export default ImportJobs;
