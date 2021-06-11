using MAS.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using MAS.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace MAS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtykulyController : ControllerBase
    {
        private readonly ArtykulyServices _artykulyService;
        public ArtykulyController(ArtykulyServices artykulyService)
        {
            _artykulyService = artykulyService;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<ArtykulDto> PobierzArtykuly([FromQuery] StronnicowanieDto stronnicowanie)
        {
            return _artykulyService.PobierzArtykuly(stronnicowanie);
        }

        [HttpGet("{id}")]
        [Authorize]
        public ArtykulDto PobierzArtykul(int id)
        {
            return _artykulyService.PobierzArtykul(id);
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public ArtykulDto DodajArtykul([FromBody] ArtykulDto dto)
        {
            return _artykulyService.DodajArtykul(dto);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public ArtykulDto EdytujArtykul(int id, [FromBody] ArtykulDto artykul)
        {
            return _artykulyService.EdytujArtykul(id, artykul);
        }
    }
}