import { mdiImageAlbum } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageAlbum(props: IconComponentProps) {
  return <Icon path={mdiImageAlbum} {...props} />;
}

export { mdiImageAlbum as path };
