using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using newhotel.api.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace newhotel.api.controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : Controller
    {
        private readonly CustomerContext db;
        public CustomerController(CustomerContext db)
        {
            this.db = db;
            if (this.db.Customer.Count() == 0)
            {
                this.db.Customer.Add(new Customer()
                {
                    Id = 123,
                    Name = "Apple",
                    Room = "King"
                });
                this.db.Customer.Add(new Customer()
                {
                    Id = 124,
                    Name = "Banana",
                    Room = "Double"
                }
            );
            }
            this.db.SaveChanges();
        }
        [HttpGet]
        public IActionResult AddCustomer()
        {
            return View();
        }
        [HttpGet("{id}")]
        public IActionResult GetCustomer(int id)
        {
            var customer = db.Customer.FirstOrDefault(b => b.Id ==id);
            if(customer==null){
                return NotFound();
            }
            return View(customer);
        }
        [HttpPost("add")]
        public IActionResult Post([FromBody]Customer customer)
        {
            if (customer == null)
            {
                return BadRequest();
            }
            db.Customer.Add(customer);
            db.SaveChanges();
            return CreatedAtRoute("Get Customer", new {id = customer.Id}, customer);
        }
    }
}