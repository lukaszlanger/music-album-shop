using MAS.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MAS.Controllers;

namespace MAS.Services
{
    public class ArtykulyServices
    {
        public static List<ArtykulDto> Artykuly = new List<ArtykulDto>
        {
            new ArtykulDto {
                Id = 1,
                Nazwa = "Plastic Hearts",
                Opis = "Miley Cyrus",
                Cena = 49
              },
            new ArtykulDto {
                Id = 2,
                Nazwa = "Fine Line",
                Opis = "Harry Styles",
                Cena = 39
                },
            new ArtykulDto {
                Id = 3,
                Nazwa = "Chromatica",
                Opis = "Lady Gaga",
                Cena = 59
                },
            new ArtykulDto {
                Id = 4,
                Nazwa = "Kraksa",
                Opis = "Mikromusic",
                Cena = 19
            },
            new ArtykulDto {
                Id = 5,
                Nazwa = "ToOoOoo prZezNaCzeeeNiEe",
                Opis = "Aldona Orłowska",
                Cena = 14999
            },
            new ArtykulDto {
                Id = 6,
                Nazwa = "Evolve",
                Opis = "Imagine Dragons",
                Cena = 39
            },
            new ArtykulDto {
                Id = 7,
                Nazwa = "25",
                Opis = "Adele",
                Cena = 19
            },
            new ArtykulDto {
                Id = 8,
                Nazwa = "SHE IS COMING",
                Opis = "Miley Cyrus",
                Cena = 69
            },
            new ArtykulDto {
                Id = 9,
                Nazwa = "When We All Fall Asleep, Where Do We Go?",
                Opis = "Billie Eilish",
                Cena = 29
            },
            new ArtykulDto {
                Id = 10,
                Nazwa = "The Thrill Of It All",
                Opis = "Sam Smith",
                Cena = 59
            }
        };

        public static List<ArtykulDto> ZawartoscKoszyka = new List<ArtykulDto> { };

        public IEnumerable<ArtykulDto> PobierzArtykuly(StronnicowanieDto stronnicowanie)
        {
            return Artykuly.Skip((stronnicowanie.Strona - 1) * stronnicowanie.Ilosc).Take(stronnicowanie.Ilosc);
        }

        public ArtykulDto PobierzArtykul(int id)
        {
            return Artykuly.Find(a => a.Id == id);
        }

        public ArtykulDto DodajArtykul(ArtykulDto dto)
        {
            dto.Id = Artykuly.Max(a => a.Id) + 1;
            Artykuly.Add(dto);
            return dto;
        }

        public ArtykulDto EdytujArtykul(int id, ArtykulDto dto)
        {
            var artykul = Artykuly.Find(a => id == a.Id);
            artykul.Nazwa = dto.Nazwa;
            artykul.Opis = dto.Opis;
            artykul.Cena = dto.Cena;
            return artykul;
        }

        public IEnumerable<ArtykulDto> PobierzKoszyk()
        {
            return ZawartoscKoszyka;
        }

        public IEnumerable<ArtykulDto> DodajDoKoszyka(int id)
        {
            var artykul = Artykuly.Find(a => id == a.Id);
            ZawartoscKoszyka.Add(artykul);
            return ZawartoscKoszyka;
        }

        public IEnumerable<ArtykulDto> WyczyscKoszyk()
        {
            ZawartoscKoszyka = new List<ArtykulDto> { };
            return ZawartoscKoszyka;
        }
    }
}
