using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    [Route("detail")]
    public class DetailController : Controller{
        [Route("")]
        [Route("index")]
        public IActionResult Index(){
            return View();
        }

        [Route("upgrade")]
        public IActionResult Upgrade(){
            return View();
        }
    }
}