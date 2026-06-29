import { mdiMagnet } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Magnet(props: IconComponentProps) {
  return <Icon path={mdiMagnet} {...props} />;
}

export { mdiMagnet as path };
