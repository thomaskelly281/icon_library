import { mdiChevronDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDown(props: IconComponentProps) {
  return <Icon path={mdiChevronDown} {...props} />;
}

export { mdiChevronDown as path };
