export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  // Check if the parent section has the 'category' class
  const section = block.closest('.section');
  if (section && section.classList.contains('category')) {
    console.log('Category section detected');

    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        col.classList.add('card'); // Add card class
        const links = col.querySelectorAll('a');
        links.forEach((link) => {
          link.classList.add('card-link'); // Add class to <a> tags
        });
      });
    });
  }
}
 