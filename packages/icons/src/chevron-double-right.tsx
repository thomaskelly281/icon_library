import { mdiChevronDoubleRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDoubleRight(props: IconComponentProps) {
  return <Icon path={mdiChevronDoubleRight} {...props} />;
}

export { mdiChevronDoubleRight as path };
