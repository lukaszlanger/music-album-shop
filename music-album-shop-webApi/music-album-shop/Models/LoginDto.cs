using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MAS.Models
{
    public class LoginDto
    {
        public string Login { get; set; }
        public string Haslo { get; set; }
    }
}
