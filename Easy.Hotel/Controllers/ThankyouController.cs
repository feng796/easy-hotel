using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    public class ThankyouController : Controller{
        public IActionResult Index(){
            return Content("Thank you for staying. Enjoy!");
        }
    }
}