import ReactPlayer from "react-player";

const Video = ({playList = [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4']
}) => {

    return (
        <>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={playList}    // 플레이어 url
                    width='100vw'         // 플레이어 크기 (가로)
                    height='31.58vh'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    loop={true}
                    muted={true}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={''}   // 플레이어 초기 포스터 사진
                />
            </div>
        </>
    )
}

export default Video;