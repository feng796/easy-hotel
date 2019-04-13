using System;
using Microsoft.AspNetCore.Mvc;

namespace Easy.Hotel.Controllers{
    [Route("parking")]
    public class ParkingController : Controller{
        [Route("")]
        [Route("index")]
        public IActionResult Index(){
            return Content("Parking information");
        }
    }
}