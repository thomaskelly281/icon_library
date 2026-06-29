import { mdiMemoryArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MemoryArrowDown(props: IconComponentProps) {
  return <Icon path={mdiMemoryArrowDown} {...props} />;
}

export { mdiMemoryArrowDown as path };
