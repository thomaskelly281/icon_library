import { mdiPictureInPictureTopRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PictureInPictureTopRight(props: IconComponentProps) {
  return <Icon path={mdiPictureInPictureTopRight} {...props} />;
}

export { mdiPictureInPictureTopRight as path };
