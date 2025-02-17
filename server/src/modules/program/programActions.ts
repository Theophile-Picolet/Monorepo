import programRepository from "./ProgramRepository";

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const programsFromDB = await programRepository.readAll();

  res.json(programsFromDB);
};

//*****************************************************

// Export them to import them somewhere else

export default { browse };
