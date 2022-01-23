import './App.css';
import { Stack, IStackTokens, Text, IStackStyles, ITextStyles, FontWeights, Link} from '@fluentui/react';
import { IPersonaSharedProps, Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { ExperienceResumePanel, DropNewsBlog, ProjectsPanel } from './pinterest-Api'
import pic from './headshot.png';
const stackTokens: IStackTokens = { childrenGap: 15 };
const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };

const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

const stackTheme: Partial<IStackStyles> = {
  root: {
      color: '#a4262c',
      margin: '0 0',
      width: '58%',
      textAlign: 'left',
      },
};

export const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">

      <Stack styles={stackTheme}>

  <Stack horizontalAlign="end" verticalAlign="end" ><DropNewsBlog/></Stack>
    <Text variant="xxLarge" styles={boldStyle} >About Me</Text></Stack>


   <Stack styles={stackTheme}
    tokens={stackTokens}>
      <Text variant="medium" >{"\n"}Hello Hello! I studied Applied Mathematics & CS and my love for developmental biology pushed me to develop a variety of skills in both computer science and molecular genetics. My previous projects combine computational methods with a deep understanding of high throughput genetic sequencing of recombinant DNA. </Text></Stack>
      <Stack horizontal tokens={stackTokens}horizontalAlign="center" styles={stackTheme} >
        <ExperienceResumePanel />
        <ProjectsPanel/>
      </Stack>

   <Stack styles={stackTheme} tokens={stackTokens}>
    <Text variant="medium" >I love learning about interesting topics in software engineering, cloud computing, genetics, and genomics. I'm terrible at golf, but hope to be good enough one day to play at Torrey Pines. I enjoy power lifting, badminton and watching nfl-football and nba-basketball. Most importantly, I dream about redefining the boundaries of success and hard work and prioritize being happy.{"\n"}</Text>
    <HeadShot/>
  </Stack>

  <Stack styles={{
      root: {
        textAlign: 'center',
      },
    }} tokens={stackTokens}>
    <Text>{"\n"}Essential Links{"\n"}</Text>
  </Stack>
  <Stack styles={{root: { color: '#a4262c', textAlign: 'center'}}} horizontal tokens={stackTokens}>
      <Text color="blue" ><Link href="https://www.linkedin.com/in/edotau/">LinkedIn</Link></Text>
      <Text color="blue"><Link href="https://github.com/edotau">Github</Link></Text>
      <Text color="blue"><Link href="https://www.pinterest.com/edotau/redefine">Pinterest</Link></Text>
      <Text color="blue"> <Link href="https://www.instagram.com/_edotau/">Instagram</Link></Text>
  </Stack>

      </header>
    <body>
    </body>
    </div>
  );
}

export const HeadShot: React.FunctionComponent = () => {
  const EricAu: IPersonaSharedProps = {
    text: 'Eric Au',
    imageUrl: pic,
    imageInitials: 'EA',
    secondaryText: 'Computer Scientist & Molecular Geneticist',
    showSecondaryText: true,
  };
  return (
    <Persona
      {...EricAu}
      size={PersonaSize.size32}
    />
  );
};

export default App;
