import { mdiArrowRightBoldBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightBoldBox(props: IconComponentProps) {
  return <Icon path={mdiArrowRightBoldBox} {...props} />;
}

export { mdiArrowRightBoldBox as path };
