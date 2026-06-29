import { mdiAlignVerticalCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignVerticalCenter(props: IconComponentProps) {
  return <Icon path={mdiAlignVerticalCenter} {...props} />;
}

export { mdiAlignVerticalCenter as path };
