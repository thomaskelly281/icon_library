import { mdiChevronLeftBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronLeftBox(props: IconComponentProps) {
  return <Icon path={mdiChevronLeftBox} {...props} />;
}

export { mdiChevronLeftBox as path };
