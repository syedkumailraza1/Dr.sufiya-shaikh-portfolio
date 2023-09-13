const nav = document.querySelector(".nav"),
 
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
 
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// contact us

const scripturl= 'https://docs.google.com/spreadsheets/d/1JREp6-GjW0Y11WdWT7yF6eyVdhLFZKAl8Yx5QnlKgrE/edit?pli=1#gid=0';
const form=document.forms['contact']



$(function() {
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target)
          && container.has(e.target).length === 0
        )

      {
          container.fadeOut();
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scripturl, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
  })