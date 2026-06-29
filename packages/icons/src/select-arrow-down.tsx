import { mdiSelectArrowDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectArrowDown(props: IconComponentProps) {
  return <Icon path={mdiSelectArrowDown} {...props} />;
}

export { mdiSelectArrowDown as path };
