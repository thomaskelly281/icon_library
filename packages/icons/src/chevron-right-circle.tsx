import { mdiChevronRightCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronRightCircle(props: IconComponentProps) {
  return <Icon path={mdiChevronRightCircle} {...props} />;
}

export { mdiChevronRightCircle as path };
