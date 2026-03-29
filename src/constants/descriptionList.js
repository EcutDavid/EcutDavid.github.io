const CURRENT_POSITION = 'Engineer at Canva.';

export default [
  {
    text: CURRENT_POSITION,
    meta: {
      tagList: [
        {
          tag: "a",
          start: CURRENT_POSITION.indexOf("Canva"),
          end: CURRENT_POSITION.indexOf("Canva") + "Canva".length,
          attributes:
            'href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" aria-label="canva, a company that provides graphic-design tools."'
        }
      ]
    }
  },
  {
    text: "Programming machines to do web and graphics stuff."
  },
  {
    text:
      "Lifelong learner, book lover and competitive programming enthusiast."
  },
  {
    text: "Interested in accessibility and all kinds of things."
  }
];
