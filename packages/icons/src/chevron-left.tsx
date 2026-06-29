import { mdiChevronLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronLeft(props: IconComponentProps) {
  return <Icon path={mdiChevronLeft} {...props} />;
}

export { mdiChevronLeft as path };
