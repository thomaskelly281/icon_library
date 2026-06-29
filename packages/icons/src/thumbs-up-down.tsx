import { mdiThumbsUpDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThumbsUpDown(props: IconComponentProps) {
  return <Icon path={mdiThumbsUpDown} {...props} />;
}

export { mdiThumbsUpDown as path };
