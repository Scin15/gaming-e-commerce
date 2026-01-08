import SteamIcon from "./Icons/SteamIcon.component";
import PlayStationIcon from "./Icons/PlayStationIcon.component";
import SeriexIcon from "./Icons/SeriexIcon.component";

    const PlatformIcon = ( {width, height, id} ) => {
        switch(id) {
            case 0:
            return (
                <>
                    <SteamIcon width={width} height={height}/>
                </>
            )
            case 1:
            return (
                <>
                    <PlayStationIcon width={width} height={height}/>
                </>
            )
            case 2:
            return (
                <>
                    <SeriexIcon width={width} height={height}/>
                </>
            )
        }
    }

export default PlatformIcon;