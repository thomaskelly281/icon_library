import { mdiMemory } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Memory(props: IconComponentProps) {
  return <Icon path={mdiMemory} {...props} />;
}

export { mdiMemory as path };
