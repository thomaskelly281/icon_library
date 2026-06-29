import { mdiThumbDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThumbDown(props: IconComponentProps) {
  return <Icon path={mdiThumbDown} {...props} />;
}

export { mdiThumbDown as path };
