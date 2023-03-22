import Image from 'next/image';
import nope from '../media/gifs/horseridinggif.gif'

const nopeSwitch = () => {

    return (
        <Image alt='nope' width={140} height={140} src={nope}/>
    )
}

export default nopeSwitch;