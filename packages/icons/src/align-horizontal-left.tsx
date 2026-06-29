import { mdiAlignHorizontalLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignHorizontalLeft(props: IconComponentProps) {
  return <Icon path={mdiAlignHorizontalLeft} {...props} />;
}

export { mdiAlignHorizontalLeft as path };
