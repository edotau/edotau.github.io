import { useCallback, useEffect, useState } from 'react'
import videojs from 'video.js'


function VideoReact(props) {
  const [videoEl, setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  }, [])
  useEffect(() => {
    if (videoEl == null)
      return
    const player = videojs(videoEl, props)
    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (

    <>
      <h3>Discipline is one of the greatest forms it&apos;s ignoring current pleasures for future rewards and loving yourself enough to do what needs to be done in the pursit of what is meant for you</h3>
      <div data-vjs-player>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}

const InstagramReel = () => {
  const settings = {
    techOrder: ["html5", "flash", "youtube", "other supported tech"],
    autoplay: true,
    width: 480,
    controls: true,
    loop: true,
    sources: [
      {
        src: "/videos/discipline.MOV",
      },
    ],
    controlBar: {
      nativeControlsForTouch: false,
    },
  }
  return(
      <VideoReact {...settings} />
  );
}

export default InstagramReel;
