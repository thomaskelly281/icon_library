import { mdiArrowRightTop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightTop(props: IconComponentProps) {
  return <Icon path={mdiArrowRightTop} {...props} />;
}

export { mdiArrowRightTop as path };
