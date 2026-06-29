import { mdiMagnetOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnetOn(props: IconComponentProps) {
  return <Icon path={mdiMagnetOn} {...props} />;
}

export { mdiMagnetOn as path };
