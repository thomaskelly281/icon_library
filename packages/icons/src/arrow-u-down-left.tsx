import { mdiArrowUDownLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUDownLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowUDownLeft} {...props} />;
}

export { mdiArrowUDownLeft as path };
