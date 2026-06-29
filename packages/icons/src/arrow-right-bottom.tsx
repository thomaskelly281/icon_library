import { mdiArrowRightBottom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightBottom(props: IconComponentProps) {
  return <Icon path={mdiArrowRightBottom} {...props} />;
}

export { mdiArrowRightBottom as path };
