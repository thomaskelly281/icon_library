import { mdiAlignVerticalTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignVerticalTop(props: IconComponentProps) {
  return <Icon path={mdiAlignVerticalTop} {...props} />;
}

export { mdiAlignVerticalTop as path };
