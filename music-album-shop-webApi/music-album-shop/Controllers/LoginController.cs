using MAS.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MAS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost]
        public ZalogowanyUzytkownikDto Login([FromBody] LoginDto login)
        {
            var res = new ZalogowanyUzytkownikDto();
            if (login.Login == "admin" && login.Haslo == "admin")
            {
                res.Rola = "Admin";
            }
            else if (login.Login == "user" && login.Haslo == "user")
            {
                res.Rola = "User";
            }
            else
            {
                throw new Exception("Błędny login lub hasło!");
            }

            var klucz = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("bardzotrudnehaslotokena"));
            var zaszfrowanyKlucz = new SigningCredentials(klucz, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken("http://localhost:44308", null, new List<Claim> { new Claim(ClaimTypes.Role, res.Rola) }, null, DateTime.Now.AddMinutes(30), zaszfrowanyKlucz);
            res.Token = new JwtSecurityTokenHandler().WriteToken(token);
            return res;
        }
    }
}
