// import axios from "axios";

// window.addEventListener('load', () => {

//   if (document.querySelector('.press-body__wrapper') === null) {
//     return;
//   }
//   else {
//     if (window.location.href.indexOf('page') !== -1 && window.location.href.split('page/')[1].split('/')[0] === document.querySelector('.press-body__wrapper').dataset.max) {
//       document.querySelector('.press-body__more').parentNode.removeChild(document.querySelector('.press-body__more'));
//     }

//     else if (document.querySelector('.press-body__wrapper').dataset.page === document.querySelector('.press-body__wrapper').dataset.max) {
//       document.querySelector('.press-body__more').parentNode.removeChild(document.querySelector('.press-body__more'));
//     }

//     else {
//       const ajaxLoadMore = () => {
//         const loadButton = document.querySelector('.press-body__more');

//         if (loadButton !== undefined && loadButton !== null) {
//           let getUrl = window.location;
//           let baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname;

//           loadButton.addEventListener('click', () => {
//             let currentPage = document.querySelector('.press-body__wrapper').dataset.page;
//             let max_pages = document.querySelector('.press-body__wrapper').dataset.max;

//             let params = new URLSearchParams();
//             params.append('action', 'load_more_posts');
//             params.append('current_page', currentPage);
//             params.append('max_pages', max_pages);

//             axios.post('/wp-admin/admin-ajax.php', params)
//               .then(res => {
//                 let posts_list = document.querySelector('.press-body__wrapper');

//                 posts_list.innerHTML += res.data.data;

//                 window.history.replaceState('', '', baseUrl + '/page/' + (parseInt(document.querySelector('.press-body__wrapper').dataset.page) + 1) + '/');

//                 document.querySelector('.press-body__wrapper').dataset.page++;

//                 if (document.querySelector('.press-body__wrapper').dataset.page == document.querySelector('.press-body__wrapper').dataset.max) {
//                   loadButton.parentNode.removeChild(loadButton);
//                   document.getElementById('circle_follow').classList.remove('circle--active-yellow');
//                   document.getElementById('circle_follow').classList.remove('circle--active');
//                 }
//               });
//           });
//         }
//       }
//       ajaxLoadMore();
//     }
//   }
// })