try
{
   addalert("Welcome Guest!")
}
catch(err)
{
   document.getElementById("error_message").innerHTML = err.message;
}
