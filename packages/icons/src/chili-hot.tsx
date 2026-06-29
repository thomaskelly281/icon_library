import { mdiChiliHot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChiliHot(props: IconComponentProps) {
  return <Icon path={mdiChiliHot} {...props} />;
}

export { mdiChiliHot as path };
