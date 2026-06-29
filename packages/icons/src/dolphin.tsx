import { mdiDolphin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Dolphin(props: IconComponentProps) {
  return <Icon path={mdiDolphin} {...props} />;
}

export { mdiDolphin as path };
