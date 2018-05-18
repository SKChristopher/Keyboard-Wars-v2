import React from "react";

const Trailer = props => {
  let styling;
  if (props.watching === true) styling = { display: "block" };
  else {
    styling = { display: "none" };
    // var iframe = document.getElementsByClassName("trailer").contentWindow;
    // iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    // document.getElementsByClassName("trailer");
  }
  return (
    <div className="trailer-div" style={styling}>
      <div id="close-button" onClick={props.closeTrailer}>
        X
      </div>
      <iframe
        className="trailer"
        width="100%"
        height="93%"
        src={
          props.currentMovie.trailer +
          "?autoplay=1&showinfo=0&rel=0&controls=0&autohide=1&modestbranding=1"
        }
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  );
};

export default Trailer;
