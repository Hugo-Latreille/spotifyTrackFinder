import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import AudioPlayer from "src/components/AudioPlayer";
import { useDispatch, useSelector } from "react-redux";

const TrackResults = () => {
  const results = useSelector((state) => state.searchResults);

  return (
    <Card.Group centered itemsPerRow={4}>
      {results.tracks.items.map((track) => (
        <Card
          key={track.id}
          // cette ligne est un peu moche...
          image={
            track.album.images &&
            track.album.images.length > 0 &&
            track.album.images[0].url
          }
          header={track.name}
          meta={track.artist}
          extra={<AudioPlayer url={track.preview_url} />}
        />
      ))}
    </Card.Group>
  );
};

export default TrackResults;
