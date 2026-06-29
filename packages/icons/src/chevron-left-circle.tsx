import { mdiChevronLeftCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronLeftCircle(props: IconComponentProps) {
  return <Icon path={mdiChevronLeftCircle} {...props} />;
}

export { mdiChevronLeftCircle as path };
