import { mdiScriptOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ScriptOutline(props: IconComponentProps) {
  return <Icon path={mdiScriptOutline} {...props} />;
}

export { mdiScriptOutline as path };
