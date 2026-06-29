import { mdiChevronDoubleDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChevronDoubleDown(props: IconComponentProps) {
  return <Icon path={mdiChevronDoubleDown} {...props} />;
}

export { mdiChevronDoubleDown as path };
