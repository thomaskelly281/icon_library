import { mdiChevronTripleLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronTripleLeft(props: IconComponentProps) {
  return <Icon path={mdiChevronTripleLeft} {...props} />;
}

export { mdiChevronTripleLeft as path };
