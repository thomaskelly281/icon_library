import { mdiChevronUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronUp(props: IconComponentProps) {
  return <Icon path={mdiChevronUp} {...props} />;
}

export { mdiChevronUp as path };
