import { mdiAurora } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Aurora(props: IconComponentProps) {
  return <Icon path={mdiAurora} {...props} />;
}

export { mdiAurora as path };
