import React, { useEffect } from "react";
import { Card, Button, Icon } from "semantic-ui-react";
import AudioPlayer from "src/components/AudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { loadMore, loadMoreAPI } from "../../store/actions";

const TrackResults = () => {
  const results = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.searchOffset);

  useEffect(() => {
    if (offset !== 0) {
      dispatch(loadMoreAPI());
    }
  }, [offset]);

  return (
    <>
      <Card.Group centered itemsPerRow={4}>
        {results.tracks.items.map((track) => (
          <Card
            key={track.id}
            // cette ligne est un peu moche...
            image={track.album.images[0]?.url}
            header={track.name}
            meta={track.artist}
            extra={
              track.preview_url ? (
                <AudioPlayer url={track.preview_url} />
              ) : (
                <Button icon labelPosition="right">
                  No audio preview
                  <Icon name="question circle" />
                </Button>
              )
            }
          />
        ))}
      </Card.Group>
      {results && (
        <Button
          content="Load More"
          primary
          onClick={() => dispatch(loadMore())}
        />
      )}
    </>
  );
};

export default TrackResults;
