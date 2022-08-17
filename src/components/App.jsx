import ProfileCard from './ProfileCard/ProfileCard';
import user from '../json/user.json'
import statistic from '../json/statistic.json'
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';

export const App = () => {
  return (
    <>
      <Section
        title='Task 1. Profile'
      >
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section
        title='Task 2. Statistics'
      >
        <Statistic
          statisticList={statistic}
        />
      </Section>
    </>
  );
};
