import { projectMilestones } from 'src/shared/constants/texts/project-milestones';
import {
  Section,
  SectionWrapper,
  ColumnWrapper,
  Column,
  StageWrapper,
  StageNumber,
  StageLine,
  SectionTitle,
  StageTitle,
  StageParagraph
} from './styled.ts';

const ProjectStage = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Этапы работ</SectionTitle>
        <ColumnWrapper>
          {projectMilestones.map(item => (
            <Column>
              <StageWrapper>
                <StageNumber>{item.id}</StageNumber>
                <StageLine />
              </StageWrapper>
              <StageTitle>{item.title}</StageTitle>
              <StageParagraph>{item.text}</StageParagraph>
            </Column>
          ))}
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default ProjectStage;
