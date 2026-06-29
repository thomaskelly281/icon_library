import { mdiPictureInPictureBottomRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PictureInPictureBottomRight(props: IconComponentProps) {
  return <Icon path={mdiPictureInPictureBottomRight} {...props} />;
}

export { mdiPictureInPictureBottomRight as path };
