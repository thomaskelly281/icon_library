import { mdiChevronTripleUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronTripleUp(props: IconComponentProps) {
  return <Icon path={mdiChevronTripleUp} {...props} />;
}

export { mdiChevronTripleUp as path };
