import { mdiScriptText } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptText(props: IconComponentProps) {
  return <Icon path={mdiScriptText} {...props} />;
}

export { mdiScriptText as path };
