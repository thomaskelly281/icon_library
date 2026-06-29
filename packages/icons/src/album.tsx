import { mdiAlbum } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Album(props: IconComponentProps) {
  return <Icon path={mdiAlbum} {...props} />;
}

export { mdiAlbum as path };
