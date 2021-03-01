$(document).ready(function() {
  $(".hdiv1").click(function() {
    $(".show1").toggle();
    $(".hidden1").toggle();
  });
});
$(document).ready(function() {
  $(".hdiv2").click(function() {
    $(".show2").toggle();
    $(".hidden2").toggle();
  });
});
$(document).ready(function() {
  $(".hdiv3").click(function() {
    $(".show3").toggle();
    $(".hidden3").toggle();
  });
});
$(document).ready(function(){
  return function validate(){
    let nameInput = $('#name')
    let myForm = $('#myForm')
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    if (name == '' || email =='' || message ==''){
      alert('Fill all fields')
      nameInput.addClass('error')
      return false;
    }
    else{
      let link = 'https://gmail.us1.list-manage.com/subscribe/post?u=52726355d5081b4ef5b84cb09&amp;id=6b786bf150'
      myForm.attr('action', link)
      myForm.attr('method', 'post')
      let response = `Hey ${name}, your message has been received`
      alert(response);
    }
  }
});
