import { mdiNecklace } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Necklace(props: IconComponentProps) {
  return <Icon path={mdiNecklace} {...props} />;
}

export { mdiNecklace as path };
