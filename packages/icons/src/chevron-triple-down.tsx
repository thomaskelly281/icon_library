import { mdiChevronTripleDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronTripleDown(props: IconComponentProps) {
  return <Icon path={mdiChevronTripleDown} {...props} />;
}

export { mdiChevronTripleDown as path };
