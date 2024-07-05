import NEWS_API from "../api/NEWS_API.js";

export const getBreakingEvents = async (req, res) => {
  const language = req.query.language || "en-US ";
  const region = req.query.region || "us";
  const category = req.query.category;
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 10;  

  try {
    const response = await NEWS_API.get("/event/getBreakingEvents", {
      params: {
        language: language,
        region: region,
        categoryUri: category,
        breakingEventsPage: page,
        breakingEventsCount: pageSize,
      },
    });   
    return res.send(response.data.breakingEvents.results);
  } catch (error) {
    console.log(error);
  }
};