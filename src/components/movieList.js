import tenthings from "../images/10ThingsIHateAboutYou.jpg";
import father1 from "../images/fatherOfTheBride.jpg";
import father2 from "../images/fatherOfTheBride2.jpg";
import mamma1 from "../images/mammaMia.jpg";
import mamma2 from "../images/mammaMia2.jpg";
import oceans8 from "../images/oceans8.jpg";
import oceans11 from "../images/oceans11.jpg";
import oceans12 from "../images/oceans12.jpg";
import oceans13 from "../images/oceans13.jpg";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Movie from "./movie";

export default function MovieList(props) {

    const [movieData, setMovieData] = React.useState([
    {
        id: 1,
        title: "10 Things I Hate About You",
        director: "Gil Junger",
        writer: "Karen McCullah, Kirsten Smith, William Shakespeare",
        cast: "Heath Ledger, Julia Stiles, Joseph Gordon-Levitt",
        year: "1999",
        synopsis: "A high-school boy, Cameron, cannot date Bianca until her anti-social older sister, Kat, has a boyfriend. So, Cameron pays a mysterious boy, Patrick, to charm Kat.",
        image: tenthings,
        imdb: "https://www.imdb.com/title/tt0147800/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_10%2520Th",
        rottentomatoes: "https://www.rottentomatoes.com/m/10_things_i_hate_about_you",
    },
    {
        id: 2,
        title: "Father of the Bride",
        director: "Charles Shyer",
        writer: "Frances Goodrich, Albert Hackett, Nancy Meyers",
        cast: "Steve Martin, Diane Keaton, Martin Short",
        year: "1991",
        synopsis: "With his oldest daughter's wedding approaching, a father finds himself reluctant to let go.",
        image: father1,
        imdb: "https://www.imdb.com/title/tt0101862/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_father%2520of",
        rottentomatoes: "https://www.rottentomatoes.com/m/1037864-father_of_the_bride",
    },
    {
        id: 3,
        title: "Father of the Bride Part II",
        director: "Charles Shyer",
        writer: "Albert Hackett, Frances Goodrich, Nancy Meyers",
        cast: "Steve Martin, Diane Keaton, Martin Short",
        year: "1995",
        synopsis: "George Banks must deal not only with his daughter's pregnancy, but also with his wife's.",
        image: father2,
        imdb: "https://www.imdb.com/title/tt0113041/?ref_=tt_sims_tt_i_1",
        rottentomatoes: "https://www.rottentomatoes.com/m/father_of_the_bride_part_ii",
    },
    {
        id: 4,
        title: "Mamma Mia!",
        director: "Phyllida Lloyd",
        writer: "Catherine Johnson",
        cast: "Meryl Streep, Pierce Brosnan, Amanda Seyfried",
        year: "2008",
        synopsis: "The story of a bride-to-be trying to find her real father told using hit songs by the popular 1970s group ABBA.",
        image: mamma1,
        imdb: "https://www.imdb.com/title/tt0795421/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_mamma",
        rottentomatoes: "https://www.rottentomatoes.com/m/mamma_mia",
    },
    {
        id: 5,
        title: "Mamma Mia! Here We Go Again",
        director: "Ol Parker",
        writer: "Ol Parker, Richard Curtis, Catherine Johnson",
        cast: "Lily James, Amanda Seyfried, Meryl Streep",
        year: "2018",
        synopsis: "Five years after the events of Mamma Mia! (2008), Sophie prepares for the grand reopening of the Hotel Bella Donna as she learns more about her mother's past.",
        image: mamma2,
        imdb: "https://www.imdb.com/title/tt6911608/?ref_=tt_sims_tt_i_1",
        rottentomatoes: "https://www.rottentomatoes.com/m/mamma_mia_here_we_go_again",
    },
    {
        id: 6,
        title: "Ocean's 8",
        director: "Gary Ross",
        writer: "Gary Ross, Olivia Milch, George Clayton Johnson",
        cast: "Sandra Bullock, Cate Blanchett, Anne Hathaway",
        year: "2018",
        synopsis: "Debbie Ocean gathers an all-female crew to attempt an impossible heist at New York City's annual Met Gala.",
        image: oceans8,
        imdb: "https://www.imdb.com/title/tt5164214/?ref_=nv_sr_srsg_6_tt_8_nm_0_q_ocean%27s",
        rottentomatoes: "https://www.rottentomatoes.com/m/oceans_8",
    },
    {
        id: 7,
        title: "Ocean's Eleven",
        director: "Steven Soderbergh",
        writer: "George Clayton Johnson, Jack Golden Russell, Harry Brown",
        cast: "George Clooney, Brad Pitt, Julia Roberts",
        year: "2001",
        synopsis: "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.",
        image: oceans11,
        imdb: "https://www.imdb.com/title/tt0240772/?ref_=tt_sims_tt_i_3",
        rottentomatoes: "https://www.rottentomatoes.com/m/oceans_eleven",
    },
    {
        id: 8,
        title: "Ocean's Twelve",
        director: "Steven Soderbergh",
        writer: "George Nolfi, George Clayton Johnson, Jack Golden Russell",
        cast: "George Clooney, Brad Pitt, Julia Roberts",
        year: "2004",
        synopsis: "Daniel Ocean recruits one more team member so he can pull off three major European heists in this sequel to Ocean's Eleven (2001).",
        image: oceans12,
        imdb: "https://www.imdb.com/title/tt0349903/?ref_=tt_sims_tt_i_1",
        rottentomatoes: "https://www.rottentomatoes.com/m/oceans_twelve",
    },
    {
        id: 9,
        title: "Ocean's Thirteen",
        director: "Steven Soderbergh",
        writer: "Brian Koppelman, David Levien, George Clayton Johnson",
        cast: "George Clooney, Brad Pitt, Matt Damon",
        year: "2007",
        synopsis: "Danny Ocean rounds up the boys for a third heist after casino owner Willy Bank double-crosses one of the original eleven, Reuben Tishkoff.",
        image: oceans13,
        imdb: "https://www.imdb.com/title/tt0496806/?ref_=tt_sims_tt_i_1",
        rottentomatoes: "https://www.rottentomatoes.com/m/oceans_thirteen",
    },
    ]);
    return (
        movieData.map((movie, index) => {
            <Movie
                title={movie.title}
                synopsis={movie.synopsis}
                year={movie.year}
                director={movie.director}
                writer={movie.writer}
                cast={movie.cast}
                image={movie.image}
                imdb={movie.imdb}
                rottentomatoes={movie.rottentomatoes}
            />
        })
      );
}  