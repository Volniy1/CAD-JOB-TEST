import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import styled from 'styled-components'

const YoutubeWrapper = styled.div`
	.yt-lite {
		background-blend-mode: color;
	}
	.yt-lite > .lty-playbtn {
		background-color: #ff0000;
		border-color: #ff0000;
		box-shadow: 0px 0px 30px #ff0000;
		transition: all 0.3s ease;
		&:hover,
		&:touch-action {
			opacity: 1;
		}
	}
`

export default function YouTubeEmbed() {
	return (
		<YoutubeWrapper>
			<LiteYouTubeEmbed
				id="dQw4w9WgXcQ"
				title="Important Video"
				playerClass="lty-playbtn"
				wrapperClass="yt-lite"
			/>
		</YoutubeWrapper>
	)
}
