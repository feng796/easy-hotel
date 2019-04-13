using System;
using Microsoft.AspNetCore.Mvc;

namespace EasyHotel.Controllers{
    [Route("home")]
    public class HomeController : Controller{
        [Route("")]
        [Route("index")]
        public IActionResult Index(){
            return View();
        }

        [Route("checkin")]
        public IActionResult Checkin(){
            return View();
        }

        [Route("checkout")]
        public IActionResult Checkout(){
            return View();
        }
    }
}