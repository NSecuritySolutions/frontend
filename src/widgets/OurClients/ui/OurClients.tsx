import yandex from 'src/assets/images/clients/webp/yandex-logo.webp';
import yandex_colored from 'src/assets/images/clients/webp/yandex-logo-colored.webp';
import scooter from 'src/assets/images/clients/webp/samokat-logo.webp';
import scooter_colored from 'src/assets/images/clients/webp/samokat-logo-colored.webp';
import rostelecom from 'src/assets/images/clients/webp/rostelekom-logo.webp';
import rostelecom_colored from 'src/assets/images/clients/webp/rostelekom-logo-colored.webp';
import avon from 'src/assets/images/clients/webp/avon-logo.webp';
import avon_colored from 'src/assets/images/clients/webp/avon-logo-colored.webp';

import {
  Section,
  SectionWrapper,
  SectionTitle,
  LogoWrapper,
  LogoYandex,
  LogoSamokat,
  LogoRostelecom,
  LogoAvon,
} from './styled.ts';

const OurClients = () => {
  return (
    <Section>
      <SectionWrapper>
        <SectionTitle>Нам доверяют</SectionTitle>
        <LogoWrapper>
          <LogoYandex $imgUrl={yandex} $imgUrl1={yandex_colored}/>
          <LogoSamokat $imgUrl={scooter} $imgUrl1={scooter_colored}/>
          <LogoRostelecom $imgUrl={rostelecom} $imgUrl1={rostelecom_colored}/>
          <LogoAvon $imgUrl={avon} $imgUrl1={avon_colored}/>
        </LogoWrapper>
      </SectionWrapper>
    </Section>
  );
};

export default OurClients;