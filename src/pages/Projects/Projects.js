import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill, PortfolioSequencedSlideWrap, PortfolioGrowWrap } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = (props) => {
  const user = props.user;
  // const hobbies = props.hobbies;
  const init = props.init;

  return (
    <Layout user={user} init={init}>
          <div>
            <PortfolioGrowWrap>
              <SectionTitle>Projects</SectionTitle>
            </PortfolioGrowWrap>
            <ul>
              {user.projects.map((project, i) => (
                <PortfolioSequencedSlideWrap index={i} key={i}>
                    <ProjectItem >
                      <ProjectTitle>{project.name}</ProjectTitle>
                      <p>{project.summary}</p>
                      <SkillContainer>
                        {[...project.languages, ...project.libraries].map((item, j) => (
                          <Pill key={j}>{item}</Pill>
                        ))}
                      </SkillContainer>
                    </ProjectItem>
                </PortfolioSequencedSlideWrap>
              ))}
            </ul>
          </div>
        </Layout>
  );
};

export default Projects;

// // import React from 'react';
// import Switch from '@material-ui/core/Switch';
// import Paper from '@material-ui/core/Paper';
// // import Slide from '@material-ui/core/Slide';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//   root: {
//     height: 180,
//   },
//   wrapper: {
//     width: 100 + theme.spacing(2),
//   },
//   paper: {
//     zIndex: 1,
//     position: 'relative',
//     margin: theme.spacing(1),
//   },
//   svg: {
//     width: 100,
//     height: 100,
//   },
//   polygon: {
//     fill: theme.palette.common.white,
//     stroke: theme.palette.divider,
//     strokeWidth: 1,
//   },
// }));

// export default function SimpleSlide() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked(prev => !prev);
//   };

//   return (
//     <div className={classes.root}>
//       <div className={classes.wrapper}>
//         <FormControlLabel
//           control={<Switch checked={checked} onChange={handleChange} />}
//           label="Show"
//         />
//         <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//           <Paper elevation={4} className={classes.paper}>
//             <svg className={classes.svg}>
//               <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
//             </svg>
//           </Paper>
//         </Slide>
//       </div>
//     </div>
//   );
// }
