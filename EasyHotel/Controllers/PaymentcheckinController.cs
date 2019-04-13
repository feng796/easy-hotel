using System;
using Microsoft.AspNetCore.Mvc;

namespace EasyHotel.Controllers{
    [Route("paymentcheckin")]
    public class PaymentcheckinController : Controller{
        [Route("")]
        [Route("index")]
        public IActionResult Index(){
            return Content("Total balance due: ____");
        }
    }
}