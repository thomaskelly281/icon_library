import { mdiHomeAutomation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeAutomation(props: IconComponentProps) {
  return <Icon path={mdiHomeAutomation} {...props} />;
}

export { mdiHomeAutomation as path };
