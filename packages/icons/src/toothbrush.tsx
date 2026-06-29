import { mdiToothbrush } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Toothbrush(props: IconComponentProps) {
  return <Icon path={mdiToothbrush} {...props} />;
}

export { mdiToothbrush as path };
