import { mdiAlignHorizontalCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignHorizontalCenter(props: IconComponentProps) {
  return <Icon path={mdiAlignHorizontalCenter} {...props} />;
}

export { mdiAlignHorizontalCenter as path };
