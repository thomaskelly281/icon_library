import { mdiPower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Power(props: IconComponentProps) {
  return <Icon path={mdiPower} {...props} />;
}

export { mdiPower as path };
