import { mdiCarConnected } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarConnected(props: IconComponentProps) {
  return <Icon path={mdiCarConnected} {...props} />;
}

export { mdiCarConnected as path };
