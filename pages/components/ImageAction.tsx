
const ImgActionBundle = () => {

}


export default ImgActionBundle;

/*
const changeActivityState = async (active: boolean) => {

    console.log(active)
    if(!active) {
    const { payload } = await handleDBRead("works", imageUID)
        setImgLikes(payload.likes)
        console.log(payload.likes)
        setIsLikeActive(true)
    }
    else {
      setIsLikeActive(false)
    }
  }

  <FcLikePlaceholder onClick={ async () => {
    handleImageAction(1)
  }} size={40}/>
  { isLikeActive ? (
    <>
    <h2>{imgLikes}</h2>
  <Button
   onClick={ async () => changeActivityState(isLikeActive)}>
     Reveal
  </Button>
  </>
  ) : (
    <>
    <Button
   onClick={ async () => changeActivityState(isLikeActive)}>
     Reveal
  </Button>
   </>
   )}
   */