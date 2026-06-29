import { mdiSquareMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareMedium(props: IconComponentProps) {
  return <Icon path={mdiSquareMedium} {...props} />;
}

export { mdiSquareMedium as path };
