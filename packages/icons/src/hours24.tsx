import { mdiHours24 } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hours24(props: IconComponentProps) {
  return <Icon path={mdiHours24} {...props} />;
}

export { mdiHours24 as path };
