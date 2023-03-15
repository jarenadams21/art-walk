export default async function(req, res) {
  try {
    const inter = 
    await fetch('https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id',
    {
      method: 'GET',
      headers: {

      },
    }
    );
    const data = await inter.json()
    const IIIF = data.config.iiif_url
    const ID = data.data.image_id
    const JPG_CONSTANT = '/full/843,/0/default.jpg'
    console.log(IIIF + '/' + ID + JPG_CONSTANT)
    res.status(200).json({result: IIIF + '/' + ID + JPG_CONSTANT})
  } catch (err) {
    console.log(err)
  }
};
