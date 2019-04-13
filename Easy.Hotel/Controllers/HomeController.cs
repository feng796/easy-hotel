using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    
    public class HomeController : Controller{
        public IActionResult Index(){
            return view();
        }
        public IActionResult Checkin(){
            return Content("Check - in");
        }
        public IActionResult Checkout(){
            return Content("Check - out");
        }
    }
}