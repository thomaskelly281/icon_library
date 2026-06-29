import { mdiChevronDoubleLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDoubleLeft(props: IconComponentProps) {
  return <Icon path={mdiChevronDoubleLeft} {...props} />;
}

export { mdiChevronDoubleLeft as path };
