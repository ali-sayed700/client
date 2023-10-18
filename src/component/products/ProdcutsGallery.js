import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

import ViewDetailsProd from "../../usehooks/products/ViewDetailsProd";
import { useParams } from "react-router";

function ProdcutsGallery() {
  let { id } = useParams();

  let [, images, , ,] = ViewDetailsProd(id);

  return (
    <div className="prod-gallery">
      <ImageGallery
        items={images}
        // defaultImage={1}
        showFullscreenButton={false}
        showPlayButton={false}
        renderRightNav={RightButton}
        renderLeftNav={LeftButton}
        thumbnailPosition="right"
        showThumbnails={true}
      />
    </div>
  );
}

export default ProdcutsGallery;
