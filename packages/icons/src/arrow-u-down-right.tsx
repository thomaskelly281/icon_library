import { mdiArrowUDownRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUDownRight(props: IconComponentProps) {
  return <Icon path={mdiArrowUDownRight} {...props} />;
}

export { mdiArrowUDownRight as path };
