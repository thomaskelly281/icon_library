import { mdiChevronUpBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronUpBox(props: IconComponentProps) {
  return <Icon path={mdiChevronUpBox} {...props} />;
}

export { mdiChevronUpBox as path };
