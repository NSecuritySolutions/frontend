import { projectMilestones } from 'src/shared/constants/texts/project-milestones';
import {
  Section,
  ColumnWrapper,
  Column,
  Div,
  DivWrapper,
  Div8,
  H2,
  H4,
  P
} from './styled.ts';

const ProjectStage = () => {
  return (
    <Section>
      <H2>Этапы работы</H2>
      <ColumnWrapper>
        {projectMilestones.map(item => (
          <Column>
            <DivWrapper>
              <Div>{item.id}</Div>
              <Div8 />
            </DivWrapper>
            <H4>{item.title}</H4>
            <P>{item.text}</P>
          </Column>
        ))}
      </ColumnWrapper>
    </Section>
  );
};

export default ProjectStage;
