import { mdiAssistant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Assistant(props: IconComponentProps) {
  return <Icon path={mdiAssistant} {...props} />;
}

export { mdiAssistant as path };
