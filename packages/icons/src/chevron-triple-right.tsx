import { mdiChevronTripleRight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronTripleRight(props: IconComponentProps) {
  return <Icon path={mdiChevronTripleRight} {...props} />;
}

export { mdiChevronTripleRight as path };
