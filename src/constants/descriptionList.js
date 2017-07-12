const CURRENT_POSITION = 'Currently working as a software engineer at Canva.';
const MAIN_EXPERIENCE = 'Have experience in building websites and single page applications with React, Redux and node.js.'
const SECOND_EXPERIENCE = 'Built some back-end services in C#, node.js with AWS services.'

const descriptionList = [{
    text: CURRENT_POSITION,
    meta: {
      tagList: [
        {
          tag: 'a',
          start: CURRENT_POSITION.indexOf('Canva'),
          end: CURRENT_POSITION.indexOf('Canva') + 'Canva'.length,
          attributes: 'href="https://www.canva.com/" target="_blank"'
        }
      ]
    }
  }, {
    text: MAIN_EXPERIENCE,
    meta: {
      tagList: [
        {
          tag: 'b',
          start: MAIN_EXPERIENCE.indexOf('single page applications'),
          end: MAIN_EXPERIENCE.indexOf('single page applications') + 'single page applications'.length
        },
        {
          tag: 'b',
          start: MAIN_EXPERIENCE.indexOf('React'),
          end: MAIN_EXPERIENCE.indexOf('React') + 'React'.length
        },
        {
          tag: 'b',
          start: MAIN_EXPERIENCE.indexOf('Redux'),
          end: MAIN_EXPERIENCE.indexOf('Redux') + 'Redux'.length
        },
        {
          tag: 'b',
          start: MAIN_EXPERIENCE.indexOf('node.js'),
          end: MAIN_EXPERIENCE.indexOf('node.js') + 'node.js'.length
        }
      ]
    }
  }, {
    text: 'Enjoy writing clean code and solving complex problems.'
  }, {
    text: SECOND_EXPERIENCE,
    meta: {
      tagList: [
        {
          tag: 'b',
          start: SECOND_EXPERIENCE.indexOf('C#'),
          end: SECOND_EXPERIENCE.indexOf('C#') + 'C#'.length
        },
        {
          tag: 'b',
          start: SECOND_EXPERIENCE.indexOf('node.js'),
          end: SECOND_EXPERIENCE.indexOf('node.js') + 'node.js'.length
        },
        {
          tag: 'b',
          start: SECOND_EXPERIENCE.indexOf('AWS services'),
          end: SECOND_EXPERIENCE.indexOf('AWS services') + 'AWS services'.length
        }
      ]
    }
  }
]

export default descriptionList
