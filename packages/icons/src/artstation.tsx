import { mdiArtstation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Artstation(props: IconComponentProps) {
  return <Icon path={mdiArtstation} {...props} />;
}

export { mdiArtstation as path };
