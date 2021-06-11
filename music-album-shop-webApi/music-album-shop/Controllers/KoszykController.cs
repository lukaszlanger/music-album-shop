using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MAS.Models;
using MAS.Services;
using MAS.Controllers;
using Microsoft.AspNetCore.Cors;

namespace MAS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KoszykController : ControllerBase
    {
        private readonly ArtykulyServices _artykulyService;

        public KoszykController(ArtykulyServices artykulyService)
        {
            _artykulyService = artykulyService;
        }

        [HttpGet]
        public IEnumerable<ArtykulDto> PobierzKoszyk()
        {
            return _artykulyService.PobierzKoszyk();
        }

        [HttpPost("{id}")]
        public IEnumerable<ArtykulDto> DodajDoKoszyka(int id) 
        {
            return _artykulyService.DodajDoKoszyka(id);
        }

        [HttpPut]
        public IEnumerable<ArtykulDto> WyczyscKoszyk()
        {
            return _artykulyService.WyczyscKoszyk();
        }
    }
}
