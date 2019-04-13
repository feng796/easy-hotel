using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    public class PaymentcheckinController : Controller{
        public IActionResult Index(){
            return Content("Total balance due: ____");
        }
    }
}