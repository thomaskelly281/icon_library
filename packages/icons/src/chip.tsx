import { mdiChip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Chip(props: IconComponentProps) {
  return <Icon path={mdiChip} {...props} />;
}

export { mdiChip as path };
