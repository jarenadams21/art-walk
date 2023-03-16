export default async function(req, res) {
    try {
      console.log('attempting display grab...')
      const api_link = req.body.link
      const FIELD_QUERY_CONSTANT = '?fields=id,title,image_id'
      const inter = 
      await fetch(api_link + FIELD_QUERY_CONSTANT,
      {
        method: 'GET',
        headers: {
          
        },
      }
      );
      // List of results based on query search
      const response = await inter.json()
      const IIIF_URL = response.config.iiif_url
      const JPEG_CONSTANT = 'full/843,/0/default.jpg'
      const IMAGE_ID = response.data.image_id
      res.status(200).json({result: IIIF_URL + "/" + IMAGE_ID + "/" + JPEG_CONSTANT,
                            title: response.data.title })
    } catch (err) {
      console.log(err)
    }
  };
  