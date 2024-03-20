import { TeamContacts } from 'src/shared/constants/texts/our-team.ts';

import {
  Section,
  SectionWrapper,
  ColumnTitle,
  ColumnWrapper,
  Column,
  StageParagraph,
  TextWrapper
} from './styled.ts';

const OurTeam = () => {
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>Наша команда</ColumnTitle>

              <StageParagraph>
                Уже более 10-ти лет мы занимаемся системами
                <br />
                безопасности. Системы видеонаблюдения, СКУД,
                <br /> охранная и пожарная сигнализации. Огромный опыт <br />
                работы, начиная от жилых квартир, заканчивая <br /> крупными
                производственными комплексами.
                <br /> Найдем решения под любые задачи и бюджет.
              </StageParagraph>
            </TextWrapper>
          </Column>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default OurTeam;
