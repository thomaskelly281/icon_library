import { mdiStadium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Stadium(props: IconComponentProps) {
  return <Icon path={mdiStadium} {...props} />;
}

export { mdiStadium as path };
