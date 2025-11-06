document.addEventListener('DOMContentLoeaded' , () =>{
Document.querrySelectorAll('.add-to-cart').forEach(button => {
button.addEventListener('click' , (event) =>{
        event.preventDefault();
        alert('Produto adicionado com sucesso');
     });
   });
});

function validateEmail(email)
{


const re =
 /^^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return re.test(String(email),toLowerCase());
const newsletterForm = document.querrySelector('newsletter-form');
if (newsletterForm)
{
   newsletterForm.addEventListener('submit' ,(event)=> {
      event.preventDefault();
      const emailInput = newsletterForm.querrySelector('.newsletter-input');
      const email = emailInput.value;
      if (validate(Email))

      {
        alert('Inscrição realizada com sucesso!');
        emailInput.value='';
      }
      else{
        alert('Por favor,insira um email válido!');
      }

   });
}
}



