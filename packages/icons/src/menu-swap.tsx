import { mdiMenuSwap } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuSwap(props: IconComponentProps) {
  return <Icon path={mdiMenuSwap} {...props} />;
}

export { mdiMenuSwap as path };
