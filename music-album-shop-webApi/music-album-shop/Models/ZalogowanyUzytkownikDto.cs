using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MAS.Models
{
    public class ZalogowanyUzytkownikDto
    {
        public string Token { get; set; }
        public string Rola { get; set; }
    }
}