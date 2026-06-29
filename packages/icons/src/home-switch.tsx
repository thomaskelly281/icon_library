import { mdiHomeSwitch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSwitch(props: IconComponentProps) {
  return <Icon path={mdiHomeSwitch} {...props} />;
}

export { mdiHomeSwitch as path };
