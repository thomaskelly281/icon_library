import { mdiSelectArrowUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectArrowUp(props: IconComponentProps) {
  return <Icon path={mdiSelectArrowUp} {...props} />;
}

export { mdiSelectArrowUp as path };
