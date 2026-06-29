import { mdiGoogleAssistant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GoogleAssistant(props: IconComponentProps) {
  return <Icon path={mdiGoogleAssistant} {...props} />;
}

export { mdiGoogleAssistant as path };
