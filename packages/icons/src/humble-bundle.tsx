import { mdiHumbleBundle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HumbleBundle(props: IconComponentProps) {
  return <Icon path={mdiHumbleBundle} {...props} />;
}

export { mdiHumbleBundle as path };
