// //console.log($('body'));

// let p = $('#test');
// let div = $('.my-class');
// let ul = $('ul');

// console.log(p);
// console.log(div);
// console.log(ul);

// console.log(p.text());
// p.text('New Text');

// $('input').attr('placeholder', 'Placeholder Text');

// div.prepend('<p>prepended paragraph</p>');
// div.append('<p>appended paragraph</p>');
// div.before('<p>paragraph that was added before the div</p>');
// div.after('<p>paragraph added after the div</p>');

// div.empty();
// ul.remove();

// $('input').hide();
// setTimeout(() => $('input').show(), 2000);

// 03-20-2025 Thursday Class
//IIFE
(function ($, undefined) {
  $(function () {
    const $addButton = $('#add');
    const $inputEmail = $('#email');
    const $inputComment = $('#comment');
    const $listComments = $('#comments');

    //document.querySelector('#add').addEventListener('click', ...)
    $addButton.on('click', function (e) {
      let email = $inputEmail.val(); // inputEmail.value
      let comment = $inputComment.val();

      if (email && comment) {
        // createHTMLElement()
        let $item = $(`<li>
                <div class="email">${email}</div>
                <div class="comment>${comment}</div>
                </li>`);
        $listComments.append($item);

        $inputEmail.val('');
        $inputComment.val('');
        $addButton.addClass('disabled');
      }
    });

    $('input,textarea').on('change', (e) => {
      let email = $inputEmail.val();
      let comment = $inputComment.val();
      if (email && comment) {
        
      }
    });

    $addButton.removeClass('disabled');
  });
});
jQuery;
