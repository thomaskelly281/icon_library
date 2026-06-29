import { mdiChevronDownBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDownBox(props: IconComponentProps) {
  return <Icon path={mdiChevronDownBox} {...props} />;
}

export { mdiChevronDownBox as path };
