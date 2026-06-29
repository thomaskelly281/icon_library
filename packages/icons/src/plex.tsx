import { mdiPlex } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Plex(props: IconComponentProps) {
  return <Icon path={mdiPlex} {...props} />;
}

export { mdiPlex as path };
