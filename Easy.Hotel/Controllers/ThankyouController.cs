using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    [Route("thankyou")]
    public class ThankyouController : Controller{
        [Route("")]
        [Route("index")]
        public IActionResult Index(){
            return Content("Thank you for staying. Enjoy!");
        }
    }
}