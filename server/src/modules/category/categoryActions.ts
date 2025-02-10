// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions
import type { RequestHandler } from "express";

/* Here you code */
const films: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredFilms = categories.filter((film) =>
      film.name.includes(req.query.q as string),
    );

    res.json(filteredFilms);
  } else {
    res.json(categories);
  }
};

const getCategory: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((c) => c.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
// Export them to import them somewhere else

export default {
  films,
  getCategory,
  /* Here you export */
};
