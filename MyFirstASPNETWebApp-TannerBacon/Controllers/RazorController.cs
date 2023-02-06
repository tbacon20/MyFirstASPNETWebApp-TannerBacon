using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyFirstASPNETWebApp_TannerBacon.Controllers
{
    public class RazorController : Controller
    {
        public IActionResult Index()
        {
            // This will purposely throw an error
            // throw new IndexOutOfRangeException();
            
            // will end up doing something like return View(GradeForm);
            return View();
        }
    }
}
