function YoutubePlayer() {
  return (
    <iframe
      width="600"
      height="350"
      src="https://www.youtube.com/embed/c2lYxSq4Fag"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
        className="mx-auto my-4 rounded-lg"
    ></iframe>
  );
}

export default YoutubePlayer;