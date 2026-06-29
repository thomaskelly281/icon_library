import { mdiChiliMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChiliMedium(props: IconComponentProps) {
  return <Icon path={mdiChiliMedium} {...props} />;
}

export { mdiChiliMedium as path };
