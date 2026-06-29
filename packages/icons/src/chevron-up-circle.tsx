import { mdiChevronUpCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronUpCircle(props: IconComponentProps) {
  return <Icon path={mdiChevronUpCircle} {...props} />;
}

export { mdiChevronUpCircle as path };
