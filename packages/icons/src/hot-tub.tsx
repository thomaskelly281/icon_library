import { mdiHotTub } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HotTub(props: IconComponentProps) {
  return <Icon path={mdiHotTub} {...props} />;
}

export { mdiHotTub as path };
