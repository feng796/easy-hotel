using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    public class DetailController : Controller{
        public IActionResult Index(){
            return Content("Guest name && room information");
        }
        
        public IActionResult upgrade(){
            return Content("upgrade");
        }
    }
}