import { mdiArtboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Artboard(props: IconComponentProps) {
  return <Icon path={mdiArtboard} {...props} />;
}

export { mdiArtboard as path };
