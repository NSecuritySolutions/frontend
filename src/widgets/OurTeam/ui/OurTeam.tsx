import { TeamContacts } from 'src/shared/constants/texts/our-team.ts';

import {
  Section,
  SectionWrapper,
  ColumnTitle,
  Column,
  ColumnParagraph,
  TextWrapper,
  ColumnWrapper
} from './styled.ts';

const OurTeam = () => {
  return (
    <Section>
      <SectionWrapper>
        <ColumnWrapper>
          <Column>
            <TextWrapper>
              <ColumnTitle>Наша команда</ColumnTitle>

              <ColumnParagraph>
                Уже более 10-ти лет мы занимаемся системами
                <br />
                безопасности. Системы видеонаблюдения, СКУД,
                <br /> охранная и пожарная сигнализации. Огромный опыт <br />
                работы, начиная от жилых квартир, заканчивая
                <br /> крупными производственными комплексами.
                <br /> Найдем решения под любые задачи и бюджет.
              </ColumnParagraph>
            </TextWrapper>
          </Column>
        </ColumnWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default OurTeam;
