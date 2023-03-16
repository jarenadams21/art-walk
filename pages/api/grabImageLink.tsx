export default async function(req, res) {
  try {
    const searchParam = req.body.query
    const ART_INSTITUTE_CONSTANT = 'https://api.artic.edu/api/v1/artworks/search?q='
    const inter = 
    await fetch(ART_INSTITUTE_CONSTANT + searchParam,
    {
      method: 'GET',
      headers: {
        
      },
    }
    );
    console.log('interlinked')
    // List of results based on query search
    const response = await inter.json()
    // api_link to the best matching image to query
    const bestResult = response.data[0].api_link
    bestResult.replace(/\\/g, '')
    console.log(bestResult)
    res.status(200).json({result: bestResult})
  } catch (err) {
    console.log(err)
  }
};
