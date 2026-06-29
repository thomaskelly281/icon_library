import { mdiArrowUUpLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUUpLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowUUpLeft} {...props} />;
}

export { mdiArrowUUpLeft as path };
