import { mdiChevronDoubleUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDoubleUp(props: IconComponentProps) {
  return <Icon path={mdiChevronDoubleUp} {...props} />;
}

export { mdiChevronDoubleUp as path };
