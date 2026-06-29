import { mdiArrowRightBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightBox(props: IconComponentProps) {
  return <Icon path={mdiArrowRightBox} {...props} />;
}

export { mdiArrowRightBox as path };
