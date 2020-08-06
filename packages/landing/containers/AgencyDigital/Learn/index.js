import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_check_circle } from 'react-icons-kit/md/ic_check_circle';

import Container from 'common/src/components/UI/ContainerTwo';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import List from 'common/src/components/List';

import SectionWrapper, {
  Section,
  Content,
  Illustration,
  ListGroup,
} from './learn.style';
import { data } from 'common/src/data/AgencyDigital';
import illustration from 'common/src/assets/image/agencyDigital/banner.png';

const Learn = () => {
  return (
    <SectionWrapper>
      <Container>
        <Section id="learn">
          <Illustration>
            <Image src={illustration} alt="Illustration" />
          </Illustration>
          <Content>
            <Heading
              as="h2"
              content="Customer support is our main priority with their hundred percent satisfaction."
            />
            <Text content="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever." />
            <ListGroup>
              {data.workHardList.map(item => (
                <List
                  className="list-item"
                  key={item.id}
                  text={item.title}
                  icon={
                    <Icon
                      icon={ic_check_circle}
                      size={18}
                      style={{ color: '#56BBD0' }}
                    />
                  }
                />
              ))}
            </ListGroup>
          </Content>
        </Section>
      </Container>
    </SectionWrapper>
  );
};

export default Learn;