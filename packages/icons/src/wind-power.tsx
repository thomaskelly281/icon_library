import { mdiWindPower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WindPower(props: IconComponentProps) {
  return <Icon path={mdiWindPower} {...props} />;
}

export { mdiWindPower as path };
