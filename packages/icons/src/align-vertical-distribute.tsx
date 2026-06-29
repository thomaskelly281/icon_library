import { mdiAlignVerticalDistribute } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlignVerticalDistribute(props: IconComponentProps) {
  return <Icon path={mdiAlignVerticalDistribute} {...props} />;
}

export { mdiAlignVerticalDistribute as path };
