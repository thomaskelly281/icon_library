import { mdiStairsDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StairsDown(props: IconComponentProps) {
  return <Icon path={mdiStairsDown} {...props} />;
}

export { mdiStairsDown as path };
