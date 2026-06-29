import { mdiEqualizer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Equalizer(props: IconComponentProps) {
  return <Icon path={mdiEqualizer} {...props} />;
}

export { mdiEqualizer as path };
