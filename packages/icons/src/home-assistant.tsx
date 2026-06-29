import { mdiHomeAssistant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeAssistant(props: IconComponentProps) {
  return <Icon path={mdiHomeAssistant} {...props} />;
}

export { mdiHomeAssistant as path };
