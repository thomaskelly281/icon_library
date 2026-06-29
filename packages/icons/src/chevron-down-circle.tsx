import { mdiChevronDownCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDownCircle(props: IconComponentProps) {
  return <Icon path={mdiChevronDownCircle} {...props} />;
}

export { mdiChevronDownCircle as path };
