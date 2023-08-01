document.addEventListener('DOMContentLoaded', function (event) {
  $(document).ready(function () {
    let toggleTubs = e => {
      e.preventDefault();
      let parentItem = $(e.currentTarget).parent();
      let elementActivatePosition = parentItem.index();

      let tabHeadList = parentItem.parent().children();
      let tabBodyList = parentItem
        .parent()
        .parent()
        .next()
        .children()
        .children();

      /*Способ 1*/
      // $(tabHeadList[2]).css('background', 'red')

      /*Способ 2 - .eq()c начала списка*/
      $(tabHeadList).eq(2).css('background', 'green');

      /*Способ 3 - .eq()c конца списка*/
      // $(tabHeadList).eq(-1).css('background', 'blue');

      // альтрнативный вариант
      /*let alternateVariant = parentItem.parents('.tab').find('.list__item');*/

      let activateTab = (elements, activeIndex) => {
        for (let item of elements) {
          $(item).removeClass('active');
          let elementPosition = $(item).index();
          if (activeIndex == elementPosition) {
            $(item).addClass('active');
          }
        }
      };
      activateTab(tabHeadList, elementActivatePosition);
      activateTab(tabBodyList, elementActivatePosition);

      // альтрнативный вариант
      /*activateTab(alternateVariant, elementActivatePosition);*/
    };

    $(document).on('click', '.list__link', e => toggleTubs(e));
  });
});
