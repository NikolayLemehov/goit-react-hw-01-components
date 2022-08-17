import ProfileCard from './ProfileCard/ProfileCard';
import user from '../json/user.json'
import Section from './Section/Section';
console.log(user)

export const App = () => {
  return (
    <>
      <Section
        title='1. Profile'
      >
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
    </>
  );
};
