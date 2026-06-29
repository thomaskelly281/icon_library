import { mdiTableHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TableHeart(props: IconComponentProps) {
  return <Icon path={mdiTableHeart} {...props} />;
}

export { mdiTableHeart as path };
