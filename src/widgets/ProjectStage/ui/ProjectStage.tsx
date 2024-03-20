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
  StageParagraph,
  TextWrapper
} from './styled.ts';

const ProjectStage = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>
          Этапы работ fhdoifh;vdoifhv;dfihbv;dlfivdl;ijv'd ;goiuf;ogibhfi
        </SectionTitle>
        <ColumnWrapper>
          {projectMilestones.map((item, i) => (
            <Column key={i}>
              <StageWrapper>
                <StageNumber>{item.id}</StageNumber>
                <StageLine />
              </StageWrapper>
              <TextWrapper>
                <StageTitle>{item.title}</StageTitle>
                <StageParagraph>{item.text}</StageParagraph>
              </TextWrapper>
            </Column>
          ))}
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default ProjectStage;
