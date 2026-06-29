import { mdiChevronRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronRight(props: IconComponentProps) {
  return <Icon path={mdiChevronRight} {...props} />;
}

export { mdiChevronRight as path };
