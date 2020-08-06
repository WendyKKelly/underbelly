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
} from './checkin.style';
import { data } from 'common/src/data/AgencyDigital';
import illustration from 'common/src/assets/image/agencyDigital/banner.png';

const CheckIn = () => {
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
              content="Curious about yourself and your personality?"
            />
            <Text content="Getting to know yourself and how you best work and play in this world can be a great way to check-in and begin to learn how to best look after yourself." />
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

export default CheckIn;
