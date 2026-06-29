import { mdiAlignVerticalBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignVerticalBottom(props: IconComponentProps) {
  return <Icon path={mdiAlignVerticalBottom} {...props} />;
}

export { mdiAlignVerticalBottom as path };
