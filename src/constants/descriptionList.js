const CURRENT_POSITION = 'Working at Canva.';
const MAIN_EXPERIENCE = 'Building applications with javascript, TypeScript, C#, and node.js.'

export default [{
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
          start: MAIN_EXPERIENCE.indexOf('javascript'),
          end: MAIN_EXPERIENCE.indexOf('javascript') + 'javascript'.length
        },
        {
          tag: 'b',
          start: MAIN_EXPERIENCE.indexOf('TypeScript'),
          end: MAIN_EXPERIENCE.indexOf('TypeScript') + 'TypeScript'.length
        },
        {
          tag: 'b',
          start: MAIN_EXPERIENCE.indexOf('C#'),
          end: MAIN_EXPERIENCE.indexOf('C#') + 'C#'.length
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
  }
]
