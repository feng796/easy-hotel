using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EasyHotel.Models;
using Microsoft.AspNetCore.Mvc;

namespace EasyHotel.Controllers{
    [Route("detail")]
    public class DetailController : Controller{
        [Route("")]
        [Route("index")]
        public IActionResult Index(){
            var guestinformation = new Guest(){
                OrderNum = 12345678,
                name = "Fuheng Jiang",
                roomtype = "King"
            };
            
            return View(guestinformation);
        }

        [Route("upgrade")]
        public IActionResult Upgrade(){
            return View();
        }
    }
}