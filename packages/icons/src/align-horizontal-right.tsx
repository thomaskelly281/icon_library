import { mdiAlignHorizontalRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignHorizontalRight(props: IconComponentProps) {
  return <Icon path={mdiAlignHorizontalRight} {...props} />;
}

export { mdiAlignHorizontalRight as path };
